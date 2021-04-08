import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../Css/Portal.css";
import AvatarPost from "../../HomePage/Components/AvatarPost";
import PostComment from "../../HomePage/Components/PostComment";
import NbLikesIcon from "../../HomePage/Components/NbLikesIcons";
import PortalComments from "../../Profile/Components/PortalComments";
import {GrClose} from "react-icons/gr";
import {BsChevronLeft} from "react-icons/bs";
import useApiCall from "../../Hooks/useApiCall";
import {BsChevronRight,BsFillHeartFill} from "react-icons/bs";


function Portal(){

    // IHAVE TO MAKE A FUNCTION THAT WILL HANDLE OPENING AND CLOSING THE PORTAL
    
    //Sate
    const [portalComments,setPortalComments]=useState([]);
    const [nbrLikes,setNbrLikes]=useState(2036);

    //API call
    useApiCall("http://localhost:3000/JsonFiles/PortalComments.json",setPortalComments);

    //Function
    const like=()=>{
        const ht=document.getElementById("heartPortal");
        ht.style.visibility="visible";
        ht.style.transform="scale(1.5)";
        setNbrLikes(nbrLikes+1);
        setTimeout(()=>{
            ht.style.visibility="hidden";
        },500);
    };

    //Function to close the portal
    const closePortal=()=>{
        document.getElementsByTagName("body")[0].style.overflowY="scroll";
        document.getElementById("portal").style.display="none";
    }

    return ( ReactDOM.createPortal(
        <React.Fragment>
            <GrClose id="close" onClick={closePortal}></GrClose>
            <div id="container__portal">
                <BsChevronLeft style={{fontSize:"2.5em",color:"snow"}}></BsChevronLeft>
                <div className="post__info">
                    <div className="post__info__pict" onClick={like}>
                        {/* the Id "bigImg" of img used to grap the img tag in displayPortal fct in Publication component */}
                        <img id="bigImg" src="/Images/DWbRiXnXcAAL3fB.jpg" alt="pict"></img>
                        <div id="post__info__pict__heart">
                            <BsFillHeartFill id="heartPortal" style={{fontSize:"6em",color:"snow",visibility:"hidden",transitionDuration:"200ms"}}></BsFillHeartFill>
                        </div>
                    </div>
                    <div className="post__info__section">
                        <AvatarPost 
                            userName={"zakaria_njb"}
                            profileImg={"82e31ac35a548b221a137276e87593576b277b13_main_hero_image.jpg"}
                            place={null}
                        ></AvatarPost>
                        <div className="post__info__section__comments">
                            {portalComments.map((element,index)=>{
                                return (
                                    <PortalComments
                                        key={index}
                                        userName={element.userName}
                                        profileImg={element.profileImg}
                                        comment={element.comment}
                                    ></PortalComments>
                                )
                            })}
                        </div>
                        <div style={{padding:"10px 10px"}}>
                            <NbLikesIcon nbrLikes={nbrLikes}></NbLikesIcon> 
                        </div>
                        <PostComment></PostComment>
                    </div>
                    <div className="small">
                        <main>
                            <AvatarPost 
                                userName={"zakaria_njb"}
                                profileImg={"82e31ac35a548b221a137276e87593576b277b13_main_hero_image.jpg"}
                                place={null}
                            ></AvatarPost>
                            <img id="smallImg" style={{width:"100%",height:"68%"}} src="/Images/DWbRiXnXcAAL3fB.jpg" alt="pict"></img>
                            <NbLikesIcon nbrLikes={nbrLikes}></NbLikesIcon>
                            <PostComment></PostComment> 
                        </main>
                    </div>
                </div>
                <BsChevronRight style={{fontSize:"2.5em",color:"snow"}}></BsChevronRight>
            </div>
        </React.Fragment>,document.getElementById("portal")))
}
export default Portal;