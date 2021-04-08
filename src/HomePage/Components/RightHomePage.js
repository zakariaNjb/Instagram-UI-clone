import React,{useState} from "react";
import useApiCall from "../../Hooks/useApiCall";
import AvatarleftHomePage from "./AvatarleftHomePage.js";
import "../Css/RightHomePage.css";
function RightHomePage(){
    //RightHomePage conponent made for the right side of HomePage 

    //States
    const [suggestions,setSuggestions]=useState([]);


    //Calling hooks
    useApiCall("http://localhost:3000/JsonFiles/Followers.json",setSuggestions);


    //Styling
    const STYLING_IMG={
        width: "3.5em",
        height: "3.5em",
        borderRadius: "100px"
    };
    
    return (
        <div className="right__HomePage">
            <div className="avatar__container">
                <AvatarleftHomePage 
                    src="lg-leverage-of-coding.jpg"
                    userName="zakaria_najib" 
                    description="Zakaria Najib MA" 
                    info="Basculer" 
                    styling={STYLING_IMG}>
                </AvatarleftHomePage>
            </div>
            <span>
                <h5>Suggestions pour vous</h5>
                <h6>Voir tout</h6>
            </span>
            {suggestions.map((element,index)=>{
                if(index<=4){
                    return <AvatarleftHomePage
                    key={index}
                    src={element.profileImg}
                    userName={element.userName}
                    description="Follows you"
                    info="S'abonner"
                    styling={{...STYLING_IMG,width:"2em",height:"2em"}}
                    ></AvatarleftHomePage>
                }else return null;
            })}
        </div>
    );
}
export default RightHomePage;