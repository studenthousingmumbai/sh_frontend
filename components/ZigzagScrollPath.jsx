import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZigzagScrollPath({ sectionRefs, containerRef }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
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
          const y = rect.top + window.scrollY - containerTop + rect.height / 2;
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
    }

    buildPath();
    window.addEventListener("resize", buildPath);
    return () => window.removeEventListener("resize", buildPath);
  }, [sectionRefs, containerRef]);

  useEffect(() => {
    if (!pathRef.current || !pathD) return;
    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
        },
      });
    });

    return () => ctx.revert();
  }, [pathD]);

  return (
    <svg
      ref={svgRef}
      className="absolute top-0 left-0 w-full pointer-events-none hidden lg:block z-0"
      style={{ height: svgHeight }}
    >
      {/* base trail (always visible, faint) */}
      <path d={pathD} fill="none" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="6 8" />
      {/* progress line, draws in as you scroll */}
      <path ref={pathRef} d={pathD} fill="none" stroke="#14b8a6" strokeWidth="3" />
    </svg>
  );
}