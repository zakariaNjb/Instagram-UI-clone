import React from "react";
import "../Css/NbLikesIcon.css";
import {AiOutlineHeart} from "react-icons/ai";
import {ImCompass} from "react-icons/im";
import {FaRegComment,FaRegBookmark} from "react-icons/fa";
function NbLikesIcon({nbrLikes}){
    
    //this componet containes nbr of like section + icons
    
    //Styling
    const SPAN_STYLING={
        flexGrow:"0.08",
        display:"flex",
        justifyContent:"space-between",
    };
    return (
        <div className="postIconBar">
            <div style={{paddingTop:"5px"}}>
                <span style={SPAN_STYLING}>
                    <AiOutlineHeart></AiOutlineHeart>
                    <FaRegComment></FaRegComment>
                    <ImCompass></ImCompass>
                </span>
                <FaRegBookmark></FaRegBookmark>
            </div>
            <h4>{nbrLikes} J'aime</h4>
        </div>
    );
};
export default React.memo(NbLikesIcon);
