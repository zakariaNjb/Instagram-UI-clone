import React, { useState } from "react";
import "../Css/Inbox.css";
import AvatarleftHomePage from "../../HomePage/Components/AvatarleftHomePage";
import {IoIosArrowDown} from "react-icons/io";
import {BsPencilSquare} from "react-icons/bs";
import {RiSendPlaneFill} from "react-icons/ri";
import useApiCall from "../../Hooks/useApiCall";

function Inbox(){

    //State
    const [chatTable,setChatTable]=useState([]);

    //APi call
    useApiCall("http://localhost:3000/JsonFiles/HomePagePosts.json",setChatTable);

    return (
        <div id="InboxContainer">
            <div className="chatSection">
                <nav>
                    <div>
                        <span style={{fontWeight:"500"}}>zakaria_njb</span>
                        <IoIosArrowDown></IoIosArrowDown> 
                    </div>
                    <BsPencilSquare style={{justifySelf:"right"}}></BsPencilSquare>
                </nav>
                <div style={{overflowY:"scroll",height:"100%"}}>
                    {chatTable.map((element,index)=>{
                        return (
                            <div className="chatavatar">
                                <AvatarleftHomePage
                                key={index}
                                src={element.profileImg}
                                userName={element.userName}
                                description="En ligne il ya 2h"
                                info=""
                                styling={{width:"3.5em",height:"3.5em",borderRadius:"100px"}}
                                ></AvatarleftHomePage>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="sendMessage">
                <div>
                    <RiSendPlaneFill
                        style={{
                            borderStyle:"groove",
                            borderWidth:"1px",
                            borderColor:"black",
                            padding:"20px",
                            borderRadius:"100px",
                            fontSize:"4em",
                            fontWeight:"bolder",
                            marginBottom:"10px"
                        }}
                    ></RiSendPlaneFill>
                    <h4>Vos messages</h4>
                    <h5>Envoyez des photos et des messages privés à un(e) ami(e) ou à un groupe.</h5>
                    <div style={{display:"flex",justifyContent:"center"}}><button>Envoyer un message</button></div>
                </div>
            </div>
        </div>
    )

}
export default Inbox;