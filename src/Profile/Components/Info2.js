import React from "react";
import "../Css/Info2.css";
import {RiSettings2Fill} from "react-icons/ri";

function Info2(){

    //Info2 will diplay img nbr followers... in the small screen

    return (
        <div id="info2">
            <main>
                <img src="/Images/82e31ac35a548b221a137276e87593576b277b13_main_hero_image.jpg" alt="pict"></img>
                <div>
                    <span>
                        <li>zakaria_njb</li>
                        <li><RiSettings2Fill></RiSettings2Fill></li>
                    </span>
                    <button>Modifier profile</button>
                </div>
            </main>
            <span>
                <li style={{fontWeight:"500"}}>zakaria najib MA</li>
                <li>Casablanca</li>
                <li>I am who I am</li>
            </span>
        </div>
    );
}
export default React.memo(Info2);