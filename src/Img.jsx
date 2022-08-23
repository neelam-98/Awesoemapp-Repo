import React from "react";

function Img(){
    return(
        <img src="https://picsum.photos/id/237/200/200"/>
    );
}
function Pic(){
    return(
        <>
        <img src="https://picsum.photos/200/200"/>
        < Img/>
        </>
    );
}
export default Pic;
