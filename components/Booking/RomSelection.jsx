import { useState, useEffect, useRef } from 'react'; 
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const box_list = [ 
    { 
        x: 15, 
        y: 122, 
        w: 111,
        h: 96
    }, 
    {
        x: 416, 
        y: 125, 
        w: 105,
        h: 94 
    }
]

function mouse_in_rect(box, mouseX, mouseY){ 
    let x = box.x, y = box.y, w = box.w, h = box.h;
    
    // console.log("x: ", x, " y: ", y, " w: ", w, " h: ", h);
    // console.log("1) mouseX >= x - ", " mouseX: ", mouseX, " x: ", x); 
    // console.log("2) mouseX <= x + w - ", " mouseX: ", mouseX, ' x + w: ', x + w); 
    // console.log("3) mouseY >= y - ", " mouseY: ", mouseY, " y: ", y); 
    // console.log("4) mouseY <= y + h - ", "mouseY: ", mouseY, " y + h: ", y + h); 

    return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
}

const SelectionTool = () => { 
    const image_canvas_ref = useRef(null); 
    const overlay_canvas_ref = useRef(null); 
    const parent_ref = useRef(null); 

    const box_color = '#00ff00';
    const line_dash = [6];
    const line_width = 2;

    let hover = false; 
    let hover_index = null;
    let overlay_context = null;
    let image_context = null;

    const clearOverlay = () => {
        overlay_context !== null && overlay_context.clearRect(0, 0, overlay_canvas_ref.current.width, overlay_canvas_ref.current.height);
    }

    const drawBoundingBoxes = (box_list) => { 
        if(box_list.length > 0){
            for(let i =0; i< box_list.length; i++){
                const box = box_list[i];
    
                overlay_context.strokeStyle = box_color;
                overlay_context.setLineDash(line_dash);
                overlay_context.lineWidth = line_width;
                overlay_context.beginPath();
                overlay_context.rect(box.x, box.y, box.w, box.h);  
                overlay_context.stroke();
    
                if(hover && hover_index === i){
                    overlay_context.fillStyle = 'rgba(0,255,0,0.3)';
                }
                else{ 
                    overlay_context.fillStyle = 'rgba(0,255,0,0.1)';
                }
    
                overlay_context.fillRect(box.x, box.y, box.w, box.h);   
                // drawHandles(box);
            }
        }
    }

    const handleOverlayMouseMove = (e) => { 
        e.preventDefault();
        e.stopPropagation();
    
        clearOverlay();  

        console.log("mouse move handler called!");
    
        overlay_canvas_ref.current.style.cursor = "default";
        hover = false;

        console.log("Overlay left: ", overlay_canvas_ref.current.getBoundingClientRect().left); 
        console.log("Overlay top: ", overlay_canvas_ref.current.getBoundingClientRect().top); 

        let mouse_x = e.nativeEvent.offsetX - overlay_canvas_ref.current.getBoundingClientRect().left; 
        let mouse_y = e.nativeEvent.offsetY - overlay_canvas_ref.current.getBoundingClientRect().top; 

        for(let i = 0; i < box_list.length; i++){
            const box = box_list[i];

            if(mouse_in_rect(box, mouse_x, mouse_y)){
                console.log("Mouse is in rect!!!");
                hover = true;
                hover_index = i;
            }
        }

        drawBoundingBoxes(box_list);   
    }

    useEffect(() => {
        const image_canvas = image_canvas_ref.current;
        image_context = image_canvas.getContext('2d');

        const overlay_canvas = overlay_canvas_ref.current; 
        overlay_context = overlay_canvas.getContext('2d'); 

        let media = new Image();    
        media.src = 'https://i.pinimg.com/736x/b6/36/4c/b6364c3b1454d90dc6afb98ad9d2a02f.jpg';

        media.onload = function() { 
            image_canvas.width = media.naturalWidth; 
            image_canvas.height = media.naturalHeight;  

            overlay_canvas.width = media.naturalWidth;
            overlay_canvas.height = media.naturalHeight;

            image_context.drawImage(media, 0, 0, media.width, media.height, 0, 0, image_canvas.width, image_canvas.height);

            drawBoundingBoxes(box_list); 
        }   
    }, []);

    const viewer_ref = useRef(null); 
    
    let zoom = 1;
    const ZOOM_SPEED = 0.1;

    const handleZoom = (e) => { 
        if(e.deltaY > 0){    
            viewer_ref.current.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
        }
        else{    
            viewer_ref.current.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  
        }
    }

    return ( 
        <>
            <div className='border border-red-400 flex'>
                <div className='bg-gray-200 w-full h-[300px]'>

                </div>
                <div className='relative w-full' ref={parent_ref}>
                    <canvas  
                        id='imageCanvas' 
                        className='border border-gray-500 z-1 relative'
                        ref={image_canvas_ref}
                    />
                    <canvas 
                        id='overlayCanvas' 
                        onMouseMove={handleOverlayMouseMove} 
                        className='absolute top-0 left-0 z-2' 
                        ref={overlay_canvas_ref}
                    />
                </div>
            </div>
            

            {/* <div className='w-[500px] h-[500px] overflow-scroll'>
                <TransformWrapper>
                    <TransformComponent>
                        <div className='relative' ref={viewer_ref}> 
                            <img src='https://i.pinimg.com/736x/b6/36/4c/b6364c3b1454d90dc6afb98ad9d2a02f.jpg' className='w-full h-full object-cover'/>
                            <div className='absolute top-[122px] left-[15px] bg-[#00ff0033] w-[111px] h-[96px] hover:bg-[#00ff0080] border-2 border-green-500 cursor-pointer flex items-center justify-center hover:text-green-800 select-none'>
                                <div>Available</div>
                            </div>
                            <div className='absolute top-[125px] left-[416px] bg-[#ff000080] w-[105px] h-[94px] border-2 border-red-500 flex items-center justify-center text-white select-none'>
                                <div>Un-available</div>
                            </div>
                        </div>
                    </TransformComponent>
                </TransformWrapper>
            </div> */}
        </>

    )
}


export default function RomSelection() {
  return (
    <div>
        {/* <TestCanvas/> */}
        <SelectionTool/>
    </div>
  )
}
