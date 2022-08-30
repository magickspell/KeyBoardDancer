import React from 'react';
import './App.scss';
import {Navbar} from "./components/layouts/Navbar";
import {Footer} from "./components/layouts/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./components/views/MainPage";
import {Info} from "./components/views/Info";
import {RedirectFunc} from "./functions/RedirectFunc";
import {LeaderBoard} from "./components/views/LeaderBoard";
import {Game} from "./components/views/Game";
import {NotFound} from "./components/views/404";

function App() {
    return (
        <BrowserRouter>
            <div className={"mask"}></div>
            <Navbar/>

            <Routes>
                <Route element={<NotFound/>} path="*"/>
                <Route element={<MainPage/>} path={RedirectFunc({code: ''})}/>
                <Route element={<Info/>} path={RedirectFunc({code: 'info'})}/>
                <Route element={<LeaderBoard/>} path={RedirectFunc({code: 'leaderboard'})}/>
                <Route element={<Game/>} path={RedirectFunc({code: 'game'})}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
        ;
}

export default App;
