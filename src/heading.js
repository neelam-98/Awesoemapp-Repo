import React from "react";
const head={
    color:'slategray',
    textAlign:'center'
}

function Heading(props){
//    console.log(props.name);
    return(
        <>
        
        <h1 style={head}>Welcome to react coding... </h1>
        <h3 style={head}>Hello, I am {props.name} </h3>
        </>
    );
}
export default Heading;