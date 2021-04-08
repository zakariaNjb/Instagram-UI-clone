import React from "react";
import "../Css/ProfileBar1.css";
import {AiOutlineTable} from "react-icons/ai";
import {CgTv} from "react-icons/cg";
import {BsBookmark} from "react-icons/bs";
import {FaUserShield} from "react-icons/fa";
function ProfileBar1(){
    //ProfileBar1 will contain IGTV,pub,enregistrement..for full screen
    return(
        <div id="profileBar1">
            <nav>
                <span><AiOutlineTable></AiOutlineTable> PUBLICATION</span>
                <span><CgTv></CgTv> GTV</span>
                <span><BsBookmark></BsBookmark> ENREGISTREMENTS</span>
                <span><FaUserShield></FaUserShield> IDENTIFIE</span>
            </nav>
        </div>
    );
}
export default React.memo(ProfileBar1);