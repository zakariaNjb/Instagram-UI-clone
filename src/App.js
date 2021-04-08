import React from "react";
//Components
import Header from "./HomePage/Components/Header";
import HomePage from "./HomePage/Components/HomePage";
import OptionHeader from "./HomePage/Components/OptionHeader";
import LikesBarHeader from "./HomePage/Components/LikesBarHeader";
import ProfilePage from "./Profile/Components/ProfilePage";
import Portal from "../../instagram/src/Portal/Components/Portal";
//React router
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import Inbox from "./Inbox/Component/Inbox";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/profile" component={ProfilePage}></Route>
          <Route path="/inbox" component={Inbox}></Route>
          <Route path="/"  component={HomePage}></Route>
        </Switch>
        <OptionHeader></OptionHeader>
        <LikesBarHeader></LikesBarHeader>
        <Portal></Portal>
      </BrowserRouter>
    </div>
  );
}

export default App;
