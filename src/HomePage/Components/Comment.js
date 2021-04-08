import React from "react";
import "../Css/Comment.css";
import {AiOutlineHeart} from "react-icons/ai";
function Comment({comment}){
    return (
        <div className="comment">
            <p><span>{comment.userName} </span>{comment.comment}</p>
            <AiOutlineHeart onClick={(event)=>{event.target.style.color="red"}}></AiOutlineHeart>
        </div>
    );
};
export default React.memo(Comment);
