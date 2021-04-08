import React,{ useState ,useRef} from "react";
import useApiCall from "../../Hooks/useApiCall";
import AvatarStory from "./AvatarStory";
import {BiChevronRight,BiChevronLeft} from "react-icons/bi";
import "../Css/StoryContainer.css";

function StoryContainer() {
    //StoryContainer component will be used in HomePage & Profile Page
    
    //states
    const [stories,setStories]=useState([]);

    //Refs
    const container=useRef({});

    //Calling Hooks
    useApiCall("http://localhost:3000/JsonFiles/Followers.json",setStories);

    //Variables
    let leftButton=null;
    let rightButton=null;

    //Functions
    const moveRight=(event)=>{
        if(leftButton!=null) leftButton.style.visibility="visible";
        rightButton=event.target;
        const div=container.current;
        div.scrollBy(300,0);
        if(div.scrollLeft+div.clientWidth===div.scrollWidth) {
            rightButton.style.visibility="hidden";
        }
    };
    const moveLeftt=(event)=>{
        if(rightButton!=null) rightButton.style.visibility="visible";
        leftButton=event.target;
        const div=container.current;
        div.scrollBy(-300,0);
        if(div.scrollLeft===0){
            leftButton.style.visibility="hidden";
        }
    };
    const displayScrolling=()=>{
        const scrollDiv=document.getElementById("scrolling");
        scrollDiv.style.visibility="visible";
    };
    const hidScrolling=()=>{
        const scrollDiv=document.getElementById("scrolling");
        scrollDiv.style.visibility="hidden";
    };

    return (
        <div className="story__container" 
            onMouseEnter={displayScrolling}
            onMouseLeave={hidScrolling}>
            <div id="container" ref={container}>
                {stories.map((element,index)=>{
                   return <AvatarStory
                        key={index}
                        src={element.profileImg}
                        userName={element.userName}
                    ></AvatarStory>
                })}
            </div>
            <div id="scrolling">
                <BiChevronLeft onClick={(event)=>moveLeftt(event)}></BiChevronLeft>
                <BiChevronRight onClick={(event)=>moveRight(event)}></BiChevronRight>
            </div>
        </div>
    );
}
export default StoryContainer;