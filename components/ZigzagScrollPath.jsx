import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZigzagScrollPath({ sectionRefs, containerRef }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const dotRef = useRef(null);
  const [pathD, setPathD] = useState("");
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    function buildPath() {
      const container = containerRef.current;
      if (!container) return;
      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const width = container.offsetWidth;

      const points = sectionRefs
        .map((ref, i) => {
          const el = ref.current;
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          const y = rect.top + window.scrollY - containerTop + 80; // small offset from top of section
          return { y, side: i % 2 === 0 ? 0.25 : 0.75 };
        })
        .filter(Boolean);

      setSvgHeight(container.offsetHeight);

      let d = "";
      points.forEach((p, i) => {
        const x = p.side * width;
        if (i === 0) {
          d += `M ${x} ${p.y} `;
        } else {
          const prev = points[i - 1];
          const prevX = prev.side * width;
          const midY = (prev.y + p.y) / 2;
          d += `C ${prevX} ${midY}, ${x} ${midY}, ${x} ${p.y} `;
        }
      });
      setPathD(d);

      // recalc ScrollTrigger since positions/height may have shifted
      ScrollTrigger.refresh();
    }

    buildPath();

    // rebuild once everything (incl. images) has fully loaded
    window.addEventListener("load", buildPath);

    // rebuild as each image inside the container finishes loading
    const container = containerRef.current;
    const imgs = container ? Array.from(container.querySelectorAll("img")) : [];
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", buildPath);
    });

    window.addEventListener("resize", buildPath);

    return () => {
      window.removeEventListener("load", buildPath);
      window.removeEventListener("resize", buildPath);
      imgs.forEach((img) => img.removeEventListener("load", buildPath));
    };
  }, [sectionRefs, containerRef]);

  useEffect(() => {
    if (!pathRef.current || !pathD) return;
    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Binary search: find the arc-length position on the path
    // whose y-coordinate matches the target scroll-based y.
    function findLengthForY(targetY) {
      let low = 0;
      let high = length;
      let mid = 0;
      // ~20 iterations is plenty precise for pixel-level accuracy
      for (let i = 0; i < 20; i++) {
        mid = (low + high) / 2;
        const y = path.getPointAtLength(mid).y;
        if (y < targetY) {
          low = mid;
        } else {
          high = mid;
        }
      }
      return mid;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: svgRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
        onUpdate: (self) => {
          const targetY = self.progress * svgHeight;
          const drawLength = findLengthForY(targetY);

          path.style.strokeDashoffset = length - drawLength;

          if (dotRef.current) {
            const point = path.getPointAtLength(drawLength);
            dotRef.current.setAttribute(
              "transform",
              `translate(${point.x}, ${point.y})`
            );
          }
        },
      });
    });

    return () => ctx.revert();
  }, [pathD, svgHeight]);

  return (
    <svg
      ref={svgRef}
      className="absolute top-0 left-0 w-full pointer-events-none hidden lg:block z-0"
      style={{ height: svgHeight }}
    >
      {/* base trail (always visible, faint) */}
      <path d={pathD} fill="none" stroke="#ffcc29" strokeWidth="3" strokeDasharray="6 8" />
      {/* progress line, draws in as you scroll */}
      <path ref={pathRef} d={pathD} fill="none" stroke="#ffcc29" strokeWidth="3" />
      {/* moving dot - glow + solid center, travels along the drawn line */}
      <g ref={dotRef}>
        <circle r="12" fill="#ffcc29" opacity="0.25" />
        <circle r="6" fill="#ffcc29" />
      </g>
    </svg>
  );
}