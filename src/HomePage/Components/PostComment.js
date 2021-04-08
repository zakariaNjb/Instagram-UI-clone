import React from "react";
import "../Css/PostComment.css";
function PostComment({addCommentFct},refInput){
    return (
        <div className="postComment">
            <input 
                ref={refInput} 
                type="text" 
                name="comment" 
                placeholder="Ajouter un commentaire..."
            ></input>
            <span onClick={addCommentFct}>Publier</span>
        </div>
    );
};
export default React.forwardRef(PostComment);