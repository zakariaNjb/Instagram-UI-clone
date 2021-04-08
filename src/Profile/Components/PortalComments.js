import React from "react";
import "../Css/PortalComments.css";
import {BsFillHeartFill} from "react-icons/bs";
function PortalComments({userName,profileImg,comment}){

    //this Component represent the post comments on the portal div

    return (
        <div className="portalComment">
            <img src={"/Images/"+profileImg} alt="pict"></img>
            <div>
             <span><span style={{fontWeight:"500"}}>{userName}</span> {comment}</span>
                <span style={{padding:"10px 20px"}}><BsFillHeartFill style={{color:"rgba(255, 0, 0, 0.836)"}}></BsFillHeartFill></span>
            </div>
        </div>
    )
}
export default React.memo(PortalComments);