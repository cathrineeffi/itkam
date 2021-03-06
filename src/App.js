import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div  className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
                    <Route path='/dialogs' render={ () => <DialogsContainer />} />
                    <Route path='/users' render={ () => <UsersContainer />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/login' component={Login} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
