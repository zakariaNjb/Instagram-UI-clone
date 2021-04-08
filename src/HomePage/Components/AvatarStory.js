import React from "react";
import "../Css/AvatarStory.css";
function AvatarStory({src,userName}) {
    //AvatarStory will be used in StoryContainer Component
    return (
        <span id="story">
            <img src={"/Images/"+src} alt="story"></img>
            <h6>{userName}</h6>
        </span>
    );
}
export default React.memo(AvatarStory);