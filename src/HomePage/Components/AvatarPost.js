import React from "react";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import "../Css/AvatarPost.css";
function AvatarPost({userName,profileImg,place}){

    //AvatarPost is the header section of the post

    return (
        <div className="avatarPost">
            <span>
                <img src={"/Images/"+profileImg} alt="pict"></img>
                <ul>
                    <h5>{userName}</h5>
                    <h6>{place}</h6>
                </ul>
            </span>
            <BiDotsHorizontalRounded style={{color:"black"}}></BiDotsHorizontalRounded>
        </div>
    )
}
export default React.memo(AvatarPost);