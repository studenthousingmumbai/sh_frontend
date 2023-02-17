import {
    useEffect,
    useCallback,
    useLayoutEffect,
    useRef,
    useState
} from "react";
  
const ORIGIN = Object.freeze({ x: 0, y: 0 });

function diffPoints(p1, p2) {
    return { x: p1.x - p2.x, y: p1.y - p2.y };
}

function addPoints(p1, p2) {
    return { x: p1.x + p2.x, y: p1.y + p2.y };
}

function scalePoint(p1, scale) {
    return { x: p1.x / scale, y: p1.y / scale };
}

const ZOOM_SENSITIVITY = 500; // bigger for lower zoom per scroll

export default function Canvas(props) {
    const ratio = 1;

    useEffect(() => {
        window.devicePixelRatio = ratio;
    }, []); 
    
    // adjust to device to avoid blur
    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);
    const [scale, setScale] = useState(1);
    const [offset, setOffset] = useState(ORIGIN);
    const [mousePos, setMousePos] = useState(ORIGIN);
    const [viewportTopLeft, setViewportTopLeft] = useState(ORIGIN);
    const isResetRef = useRef(false);
    const lastMousePosRef = useRef(ORIGIN);
    const lastOffsetRef = useRef(ORIGIN);

    // update last offset
    useEffect(() => {
        lastOffsetRef.current = offset;
    }, [offset]);

    // reset
    const reset = useCallback(
        (context) => {
            if (context && !isResetRef.current) {
                // adjust for device pixel density
                context.canvas.width = props.canvasWidth * ratio;
                context.canvas.height = props.canvasHeight * ratio;
                context.scale(ratio, ratio);
                setScale(1);

                // reset state and refs
                setContext(context);
                setOffset(ORIGIN);
                setMousePos(ORIGIN);
                setViewportTopLeft(ORIGIN);
                lastOffsetRef.current = ORIGIN;
                lastMousePosRef.current = ORIGIN;

                // this thing is so multiple resets in a row don't clear canvas
                isResetRef.current = true;
            }
        },
        [props.canvasWidth, props.canvasHeight]
    );

    // functions for panning
    const mouseMove = useCallback(
        (event) => {
        if (context) {
            const lastMousePos = lastMousePosRef.current;
            const currentMousePos = { x: event.pageX, y: event.pageY }; // use document so can pan off element
            lastMousePosRef.current = currentMousePos;

            const mouseDiff = diffPoints(currentMousePos, lastMousePos);
            setOffset((prevOffset) => addPoints(prevOffset, mouseDiff));
        }
        },
        [context]
    );

    const mouseUp = useCallback(() => {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
    }, [mouseMove]);

    const startPan = useCallback(
        (event) => {
            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);
            lastMousePosRef.current = { x: event.pageX, y: event.pageY };
        },
        [mouseMove, mouseUp]
    );

    // setup canvas and set context
    useLayoutEffect(() => {
        if (canvasRef.current) {
            // get new drawing context
            const renderCtx = canvasRef.current.getContext("2d");

            if (renderCtx) {
                reset(renderCtx);
            }
        }
    }, [reset, props.canvasHeight, props.canvasWidth]);

    // pan when offset or scale changes
    useLayoutEffect(() => {
        if (context && lastOffsetRef.current) {
            const offsetDiff = scalePoint(
                diffPoints(offset, lastOffsetRef.current),
                scale
            );
            context.translate(offsetDiff.x, offsetDiff.y);
            setViewportTopLeft((prevVal) => diffPoints(prevVal, offsetDiff));
            isResetRef.current = false;
        }
    }, [context, offset, scale]);

    // draw
    useLayoutEffect(() => {
        if (context) {
            const squareSize = 200;

            // clear canvas but maintain transform
            const storedTransform = context.getTransform();
            context.canvas.width = context.canvas.width;
            context.setTransform(storedTransform);

            context.fillRect(
                props.canvasWidth / 2 - squareSize / 2,
                props.canvasHeight / 2 - squareSize / 2,
                squareSize,
                squareSize
            );
            context.arc(viewportTopLeft.x, viewportTopLeft.y, 5, 0, 2 * Math.PI);
            context.fillStyle = "red";
            context.fill();
        }
    }, [
        props.canvasWidth,
        props.canvasHeight,
        context,
        scale,
        offset,
        viewportTopLeft
    ]);

    // add event listener on canvas for mouse position
    useEffect(() => {
        const canvasElem = canvasRef.current;
        if (canvasElem === null) {
            return;
        }

        function handleUpdateMouse(event) {
            event.preventDefault();
            if (canvasRef.current) {
                const viewportMousePos = { x: event.clientX, y: event.clientY };
                const topLeftCanvasPos = {
                x: canvasRef.current.offsetLeft,
                y: canvasRef.current.offsetTop
                };
                setMousePos(diffPoints(viewportMousePos, topLeftCanvasPos));
            }
        }

        canvasElem.addEventListener("mousemove", handleUpdateMouse);
        canvasElem.addEventListener("wheel", handleUpdateMouse);

        return () => {
            canvasElem.removeEventListener("mousemove", handleUpdateMouse);
            canvasElem.removeEventListener("wheel", handleUpdateMouse);
        };
    }, []);

    // add event listener on canvas for zoom
    useEffect(() => {
        const canvasElem = canvasRef.current;
        
        if (canvasElem === null) {
            return;
        }

        // this is tricky. Update the viewport's "origin" such that
        // the mouse doesn't move during scale - the 'zoom point' of the mouse
        // before and after zoom is relatively the same position on the viewport
        function handleWheel(event) {
            event.preventDefault();

            if (context) {
                const zoom = 1 - event.deltaY / ZOOM_SENSITIVITY;

                const viewportTopLeftDelta = {
                    x: (mousePos.x / scale) * (1 - 1 / zoom),
                    y: (mousePos.y / scale) * (1 - 1 / zoom)
                };

                const newViewportTopLeft = addPoints(
                    viewportTopLeft,
                    viewportTopLeftDelta
                );

                context.translate(viewportTopLeft.x, viewportTopLeft.y);
                context.scale(zoom, zoom);
                context.translate(-newViewportTopLeft.x, -newViewportTopLeft.y);

                setViewportTopLeft(newViewportTopLeft);
                setScale(scale * zoom);
                isResetRef.current = false;
            }
        }

        canvasElem.addEventListener("wheel", handleWheel);

        return () => canvasElem.removeEventListener("wheel", handleWheel);
    }, [context, mousePos.x, mousePos.y, viewportTopLeft, scale]);

    return (
        <div>
            <button onClick={() => context && reset(context)}>Reset</button>
            <pre>scale: {scale}</pre>
            <pre>offset: {JSON.stringify(offset)}</pre>
            <pre>viewportTopLeft: {JSON.stringify(viewportTopLeft)}</pre>
            <canvas
                onMouseDown={startPan}
                ref={canvasRef}
                width={props.canvasWidth * ratio}
                height={props.canvasHeight * ratio}
                style={{
                    border: "2px solid #000",
                    width: `${props.canvasWidth}px`,
                    height: `${props.canvasHeight}px`
                }}
            />
        </div>
    );
}
