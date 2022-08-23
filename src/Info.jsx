import React from "react";
import './Info.css';

function Info(props){
    return(
        <>
        {/* <div  className='user_data'> */}
            <div className="box">
                <img src={props.img}/><br/>
                <label>Username: {props.name}</label><br/>
                <label>email : {props.email}</label><br/>
                <label>Mbile Number: {props.mob}</label><br/>
            </div>
        {/* </div> */}
        </>

    );
}
export default Info;