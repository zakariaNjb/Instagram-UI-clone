import React, { useState } from "react";
import StoryContainer from "./StoryContainer.js";
import useApiCall from "../../Hooks/useApiCall";
import "../Css/LeftHomePage.css";
import HpPost from "./HpPost.js";
function LeftHomePage(){

    //LefttHomePage conponent made for the left side of HomePage 

    //State
    const [posts,setposts]=useState([]);

    //API call
    useApiCall("http://localhost:3000/JsonFiles/HomePagePosts.json",setposts);

    return (
        <div className="left__HomePage">
            <div className="stories">
                <StoryContainer></StoryContainer>
            </div>
            {posts.map((element,index)=>{
                return <HpPost key={index} post={element}></HpPost>
            })}
        </div>
    );
}
export default LeftHomePage;