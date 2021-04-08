import React from "react";
import "../Css/LikesBarAvatar.css";
function LikesBarAvatar({userName,profileImg}){
    return (
        <div className="likesAvatar">
            <img src={"/Images/"+profileImg} alt="like"></img>
            <div>
                <span>
                    <li>{userName}</li>
                    <li>a commencé à vous suivre. 19h</li>
                </span>
                <button>S'abonner</button>
            </div>
        </div>
    );
}
export default React.memo(LikesBarAvatar);