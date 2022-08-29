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

function App() {
    return (
        <BrowserRouter>
            <div className={"mask"}></div>
            <Navbar/>

            <Routes>
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
