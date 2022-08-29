import React from "react";
import {useNavigate} from "react-router-dom";
import {RedirectFunc} from "../../functions/RedirectFunc";

export const Navbar = () => {

    const navigate = useNavigate()

    return (
        <nav>
            <ul>
                <li
                    onClick={() => {
                        navigate(RedirectFunc({code: ''}))
                    }}
                >Menu</li>
                <li
                    onClick={() => {
                        navigate(RedirectFunc({code: 'info'}))
                    }}
                >Info</li>
                <li
                    onClick={() => {
                        navigate(RedirectFunc({code: 'leaderboard'}))
                    }}
                >Leader Board</li>
            </ul>
            <div className={"logo"}>
                <b>KD</b>
            </div>
            <img src={require("../../img/keyBoardDancer.png")} alt="logo"/>
        </nav>
    )
}