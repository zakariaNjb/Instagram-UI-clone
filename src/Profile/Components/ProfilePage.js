import React, { useEffect, useState } from "react";
import "../Css/ProfilePage.css";
import StoryContainer from "../../HomePage/Components/StoryContainer.js";
import Info1 from "./Info1";
import Info2 from "./Info2";
import ProfileBar1 from "./ProfileBar1";
import ProfileBar2 from "./ProfileBar2";
import Publication from "./Publication";
import useApiCall from "../../Hooks/useApiCall";

function ProfilePage(){

    //Profile page

    //States
    const [pubs,setPubs]=useState([]);
    
    //API CALL
    useApiCall("http://localhost:3000/JsonFiles/HomePagePosts.json",setPubs);
    
    return (
        <div id="profilePage">
            <Info1></Info1>
            <Info2></Info2>
            <div style={{padding:"20px 0px"}}>
                <StoryContainer></StoryContainer>
            </div>
            <ProfileBar1></ProfileBar1>
            <ProfileBar2></ProfileBar2>
            <div id="publication">
                {
                    pubs.map((item, key) => {
                        return <Publication 
                            key={key} 
                            postImg={item.postImg}
                            nbrLikes={item.nbrLikes}
                            nbrComments={item.nbrComments}
                        ></Publication>
                    })
                }
            </div>
        </div>
    )
}
export default React.memo(ProfilePage);