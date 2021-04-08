import React from "react";
import "../Css/HomePage.css";
import LeftHomePage from "./LeftHomePage";
import RightHomePage from "./RightHomePage";
function HomePage(){

    //Home page containes two sides: left Side(leftHomePage Conponent)
    //& righT Side (rightHomePae conponent);
    
    return (
        <div className="homePage">
            <LeftHomePage></LeftHomePage>
            <RightHomePage></RightHomePage>
        </div>
    );
}
export default HomePage;