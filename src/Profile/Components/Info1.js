import React from "react";
import {RiSettings2Fill} from "react-icons/ri";
import "../Css/Info1.css";
function Info1(){

    //Info1 will diplay img nbr followers... in the full screen


    return (
        <div id="info1">
            <img src="/Images/82e31ac35a548b221a137276e87593576b277b13_main_hero_image.jpg" alt="pict"></img>
            <div className="infoSection">
                <div>
                    <li>zakaria_njb</li>
                    <li><button style={{fontWeight:"700"}}>Modifier profile</button></li>
                    <li><RiSettings2Fill></RiSettings2Fill></li>
                </div>
                <div style={{padding:"15px 0px"}}>
                    <li>14 publications</li>
                    <li>270 abonnés</li>
                    <li>222 abonnements</li>
                </div>
                <span>
                    <li>zakaria najib MA</li>
                    <li>Casablanca</li>
                    <li>I am who I am</li>
                </span>
            </div>
        </div>
    )
}
export default React.memo(Info1);