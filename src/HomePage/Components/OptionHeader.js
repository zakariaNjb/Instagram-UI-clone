import React from "react";
import "../Css/OptionHeader.css";
import {HiOutlineUserCircle} from "react-icons/hi";
import {BsBookmark} from "react-icons/bs";
import {RiSettings2Fill,RiExchangeFundsLine} from "react-icons/ri";
import {Link} from "react-router-dom";
function OptionHomePage(){

    //Option Menu of Header (profile,enregistrer..)

    return (
        <div id="options">
            <div>
                <HiOutlineUserCircle></HiOutlineUserCircle>
                <Link to={"profile"}><span>Profile</span></Link>
            </div>
            <div>
                <BsBookmark></BsBookmark>
                <span>Enregistré</span>
            </div>
            <div>
                <RiSettings2Fill></RiSettings2Fill>
                <span>Paramètres</span>
            </div>
            <div>
                <RiExchangeFundsLine></RiExchangeFundsLine>
                <span>Change de compte</span>
            </div>
            <div>
                <span style={{paddingLeft:"0px"}}>Déconnexion</span>
            </div>
        </div>
    );
}
export default React.memo(OptionHomePage);