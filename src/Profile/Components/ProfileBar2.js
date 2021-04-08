import React from "react";
import "../Css/ProfileBar2.css";
import {AiOutlineTable} from "react-icons/ai";
import {CgTv} from "react-icons/cg";
import {BsBookmark} from "react-icons/bs";
import {FaUserShield} from "react-icons/fa";
function ProfileBar2(){
    
    //ProfileBar2 will contain IGTV,pub,enregistrement..for small screen

    return (
        <div id="profileBar2">
            <nav>
                <span>
                    <li>14</li>
                    <li>publications</li>
                </span>
                <span>
                    <li>270</li>
                    <li>abonnés</li>
                </span>
                <span>
                    <li>220</li>
                    <li>abonnements</li>
                </span>
            </nav>
            <nav>
                <span><AiOutlineTable></AiOutlineTable></span>
                <span><CgTv></CgTv></span>
                <span><BsBookmark></BsBookmark></span>
                <span><FaUserShield></FaUserShield></span>
            </nav>
        </div>
    );

}
export default React.memo(ProfileBar2);