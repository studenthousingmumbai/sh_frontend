import React from 'react'
import ReactPannellum from "react-pannellum";

const MyVirtualTour = ({ imageLink }) => {
    return (
      <ReactPannellum
        width="100%"
        height="500px"
        imageSource={imageLink}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        showFullscreenCtrl={false}
        mouseZoom={false}
        onScenechange={() => console.log("scene changed")}
      />
    );
};

export default function test() {
    const imageLink = 'https://www.google.com/maps/@40.7125952,-74.0143501,3a,75y,198.9h,90.2t/data=!3m6!1e1!3m4!1swl3kLfgYDe8x6u5vxKUKZQ!2e0!7i16384!8i8192';

    return (
      <div>
        <MyVirtualTour imageLink={imageLink} />
      </div>
    );
}
