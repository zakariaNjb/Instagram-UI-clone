import React from "react";
import {AiFillHome,AiOutlineHeart} from "react-icons/ai";
import {ImCompass} from "react-icons/im";
import {MdExplore} from "react-icons/md";
import {FiSearch} from "react-icons/fi";
import {Link} from "react-router-dom";
import "../Css/Header.css";
function Header() {

    //Functions
    const displayOption=()=>{
        const optDiv=document.getElementById("options");
        optDiv.style.visibility="visible";
    };
    const hidOption=()=>{
        const optDiv=document.getElementById("options");
        optDiv.style.visibility="hidden";
    };
    const diplayLikesBar=()=>{
        const likeBar=document.getElementById("likesBar");
        likeBar.style.visibility="visible";
    };
    const hidLikesBar=()=>{
        const likeBar=document.getElementById("likesBar");
        likeBar.style.visibility="hidden";
    }

    return (
        <nav id="navBar">
            <div className="header">
                <h5>Instagram</h5>
                <button>
                    <FiSearch style={{fontSize:"1em",padding:"0px"}}></FiSearch>
                    <input type="text" name="search" placeholder="search"></input>
                </button>
                <span>
                    <Link to="/"><AiFillHome></AiFillHome></Link>
                    <Link to="Inbox"><ImCompass></ImCompass></Link>
                    <Link to=""><MdExplore ></MdExplore></Link>
                    <button onClick={diplayLikesBar} onBlur={hidLikesBar}>
                        <AiOutlineHeart></AiOutlineHeart>
                    </button>
                    <button onClick={()=>displayOption()} onBlur={()=>hidOption()}>
                        <img 
                            src="/Images/lg-leverage-of-coding.jpg" 
                            alt="pict" 
                        />
                    </button>
                </span>
            </div>
        </nav>
    );
}
export default Header;