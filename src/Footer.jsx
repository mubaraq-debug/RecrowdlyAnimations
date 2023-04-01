import React from "react";
import styled from "styled-components";


import dressed from "./assets/dressed.png"
import cloud from "./assets/cloud.png"
import drawing from "./assets/drawing.png"
import Slide from "./Slide";

const Footer = () => {
    return ( 
        <Con className="p-28 text-center flex flex-col ">
             <div className="bg-white text-black text-center pt-5 rounded-lg ml-10" style={{height: '259px', width: '1000px'}}>
                    <h1 className="font-bold text-3xl mb-4">Lights. Camera. Reaction!</h1>
                    <p className="mb-6">Start creating your own video today</p>

                    <div className="sub-section flex items-center border-solid border-2 justify-between h-16 mb-14 bg-white text-black pl-7 ml-72 rounded-3xl" style={{width: '476px'}}>
                        <input type="email" placeholder="Enter your email address" className=" text-black outline-none w-44"/>
                        <button className="bg-black text-white h-16 w-36 rounded-3xl">Book a Meeting</button>
                    </div>
            </div>


            <h2 className="font-bold text-3xl mb-2 mt-14 text-white">What Others are saying</h2>

            <Slide />
        </Con>
     );
}

const Con = styled.div`
    height: 1000px;
    background: #575757;
`
 
export default Footer;