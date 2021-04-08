import React, { useRef } from "react";
import "../Css/Publication.css";
import {AiFillHeart} from "react-icons/ai";
import {FaComment} from "react-icons/fa";
function Publication({postImg,nbrLikes,nbrComments}){

    //Publications conatains the post
    
    //ref
    const iconDivRef=useRef();
    const image=useRef();

    //function
    const displayIcons=()=>{
        const iconDiv=iconDivRef.current;
        iconDiv.style.visibility="visible";
    }
    const hidIcons=()=>{
        const iconDiv=iconDivRef.current;
        iconDiv.style.visibility="hidden";
    }

    //function to display the post in the portal
    const displayPortal=()=>{
        const img=image.current;
        //graping the img tag from Poratl.js Compo
        const imgTag=document.getElementById("bigImg");
        imgTag.src=img.src;
        const portal=document.getElementById("portal");
        portal.style.display="block";
        //affect src to img tag of responsive portal
        document.getElementById("smallImg").src=img.src;
        document.getElementsByTagName("body")[0].style.overflowY="hidden";
    }

    return (
        <div className="pub"
            onClick={displayPortal}
            onMouseEnter={displayIcons} 
            onMouseLeave={hidIcons}>
            <img ref={image} src={"/Images/"+postImg} alt="pict"></img>
            <div className="__nbrLikes" ref={iconDivRef}>
                <span><AiFillHeart></AiFillHeart> {nbrLikes}</span>
                <span><FaComment></FaComment> {nbrComments}</span>
            </div>
        </div>
    )

}
export default React.memo(Publication);