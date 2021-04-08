import React, { useEffect, useState } from "react";
import useApiCall from "../../Hooks/useApiCall";
import LikesBarAvatar from "./LikesBarAvatar";
import "../Css/LikesBarHeader.css";
function LikesBarHeader(){
    //State
    const [likes,setLikes]=useState([]);

    //API call
    useApiCall("http://localhost:3000/JsonFiles/LikesBarData.json",setLikes);

    return (
        <div id="likesBar">
            {likes.map((element,index)=>{
                return (
                    <LikesBarAvatar 
                        profileImg={element.profileImg}
                        userName={element.userName}
                        key={index}
                    ></LikesBarAvatar>
                )
            })}
        </div>
    );
}
export default React.memo(LikesBarHeader);