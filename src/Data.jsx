import React from "react";
import { useEffect } from "react";
import './Info.css';

function Data() {
        useEffect (() => {
        alert('Showing list of 10 users');
    },[]);
    const data = [
        {
            img : "https://picsum.photos/id/1/100/100",
            Username : "Neelam Kashyap",
            Mobile : "9876787657",
            email : "nlm@gmail.com"
        },
        {
            img :"https://picsum.photos/id/1011/100/100",
            Username : "Priynka Padhi",
            Mobile: "8796578987",
            email : "pri@gmail.com"
        },
        {
            img : "https://picsum.photos/id/1013/100/100",
            Username : "Urvi Bhavsar",
            Mobile: "9878765764",
            email : "urvi@gmail.com"
        },
        {
            img : "https://picsum.photos/id/101/100/100",
            Username : "Grena Panchal",
            Mobile : "9876787698",
            email : "grey@gmail.com"
        },
        {
            img : "https://picsum.photos/id/1012/100/100",
            Username : "Niraj Kashyap",
            Mobile : "9876787657",
            email : "nrj@gmail.com"
        },
        {
            img : "https://picsum.photos/id/1023/100/100",
            Username : "Nidhi Kashyap",
            Mobile : "9876787657",
            email : "ndh@gmail.com"
        },
        {
            img : "https://picsum.photos/id/1009/100/100",
            Username : "Uma Yadav",
            Mobile : "9876787657",
            email : "uma@gmail.com"
        },
        {
            img : "https://picsum.photos/id/1014/100/100",
            Username : "Lisa Verma",
            Mobile : "9876787657",
            email : "lisa@gmail.com"
        },
        { 
            img: "https://picsum.photos/id/1023/100/100",
            Username : "Nitu Mishra",
            Mobile : "9876787657",
            email : "nitu@gmail.com"
        },
        {
            img : "https://picsum.photos/id/1011/100/100",
            Username : "Mina Yadav",
            Mobile : "9876787657",
            email : "mina@gmail.com"
        }
       
    ]
    // data.map(
    //     (info) => {
    //         return (
    //             <>
    //                 <div className="box">
    //                     <h3>User Details</h3>
    //                     <img src={info.img}/><br/>
    //                     <label>Username: {info.Username}</label><br/>
    //                     <label>email : {info.email}</label><br/>
    //                     <label>Mobile Number: {info.Mobile}</label><br/>
    //                 </div>
    //             </>
    //         )
    //     }
    // )
    return (
    data.map(
        (info) => {
            return (
                <>
                    {/* <div className="user_data"> */}
                        <div className="box">
                            <h3>User Details</h3>
                            <img src={info.img}/><br/>
                            <label>Name: {info.Username}</label><br/>
                            <label>email : {info.email}</label><br/>
                            <label>Mobile Number: {info.Mobile}</label><br/>
                        </div>
                    {/* </div> */}
                </>
            )
        }
    )
    ); 
}
export default Data;