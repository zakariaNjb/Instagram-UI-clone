import React from "react";
import "../Css/AvatarleftHomePage.css";
function AvatarleftHomePage({src,userName,description,info,styling}){
    
    //AvatarleftHomePage is made for the left side of the home Page
    
    return(
        <div className="avatar">
            <span>
                <img style={styling} src={"/Images/"+src} alt="pict"></img>
                <ul>
                    <li>{userName}</li>
                    <li>{description}</li>
                </ul>
            </span>
            <h6>{info}</h6>
        </div>
    );
}
export default React.memo(AvatarleftHomePage);