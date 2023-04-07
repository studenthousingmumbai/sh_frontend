import { useRef, useState, useEffect } from 'react';
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE, fitSelection, zoomOnViewerCenter, fitToViewer } from 'react-svg-pan-zoom';
import { AutoSizer } from 'react-virtualized';

export default function App({ floor_plan, beds, selectedBed, setSelectedBed }) {
  const Viewer = useRef(null);
  const [tool, setTool] = useState(TOOL_NONE)
  const [value, setValue] = useState(INITIAL_VALUE)
  const is_mounted = useRef(false); 
  const [imageWidth, setImageWidth] = useState(100); 
  const [imageHeight, setImageHeight] = useState(100);  

  useEffect(() => {
    if(!is_mounted.current){
        is_mounted.current = true; 

        var img = new Image();
        img.src = floor_plan || '';
    
        img.onload = function() {
            console.log("floor plan w: ", this.width); 
            console.log('floor plan h: ', this.height); 

            setImageWidth(this.width);
            setImageHeight(this.height); 

            setTimeout(() => {
                Viewer.current.fitToViewer();
            }, 100)
        };
    }   
  }, []);

  /* Read all the available methods in the documentation */
//   const _zoomOnViewerCenter1 = () => Viewer.current.zoomOnViewerCenter(1.1)
//   const _fitSelection1 = () => Viewer.current.fitSelection(40, 40, 200, 200)
//   const _fitToViewer1 = () => Viewer.current.fitToViewer()

  /* keep attention! handling the state in the following way doesn't fire onZoom and onPam hooks */
//   const _zoomOnViewerCenter2 = () => setValue(zoomOnViewerCenter(value, 1.1))
//   const _fitSelection2 = () => setValue(fitSelection(value, 40, 40, 200, 200))
//   const _fitToViewer2 = () => setValue(fitToViewer(value))

  return (
    <div className='w-full h-[500px] border border-gray-300'>
        <div className='w-full h-full'>
            <AutoSizer>
                {({ width, height }) => (
                    <ReactSVGPanZoom
                        ref={Viewer}
                        height={height}
                        width={width}
                        tool={tool} 
                        onChangeTool={setTool}
                        value={value} 
                        onChangeValue={setValue}
                        onZoom={e => console.log('zoom')}
                        onPan={e => console.log('pan')}
                        background="#FFF"
                        detectAutoPan={false}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={imageWidth}
                            height={imageHeight}
                        >
                            <image
                                overflow="visible"
                                width={imageWidth}
                                height={imageHeight}
                                href={floor_plan}
                            />
                            {
                                beds.map(bed => ( 
                                    <g>
                                        <rect
                                            onMouseUpCapture={() => (bed.available && !bed.locked) && setSelectedBed(bed)}
                                            className={`fill-[rgba(255,255,255,0.4)] cursor-pointer ${(!bed.available || bed.locked) && 'fill-[rgba(248,113,113,0.8)]'} hover:fill-[rgba(187,247,208,0.8)] active:fill-[rgba(74,222,128,0.8)] ${!bed.available && ' hover:fill-[rgba(248,113,113,0.8)] '} stroke-white ${selectedBed.id === bed.id && bed.available && 'fill-[rgba(74,222,128,0.8)] hover:fill-[rgba(74,222,128,0.8)] '}`}
                                            strokeDasharray={"5,5"}
                                            x={bed.bb.x}
                                            y={bed.bb.y}
                                            width={bed.bb.w}
                                            height={bed.bb.h}
                                        />
                                        {/* <text x={bed.bb.x} y={bed.bb.y + 25} font-family="Montserrat" font-size="15" fill="black">
                                            {bed.available && 'AVAILABLE' || 'UNAVAILABLE'}
                                        </text> */}
                                    </g>
                                ))
                            }
                        </svg>
                    </ReactSVGPanZoom>
                )}
            </AutoSizer>
        </div>
    </div>
  )
}