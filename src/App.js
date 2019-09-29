import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar sidebar={props.state.sidebar} />
                <div  className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile postsData={props.state.profilePage.postsData} addPost={props.addPost} />} />
                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
