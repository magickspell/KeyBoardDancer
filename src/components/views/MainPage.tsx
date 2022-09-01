import React from "react";
import {RedirectFunc} from "../../functions/RedirectFunc";
import {useNavigate} from "react-router-dom";

export const MainPage = () => {

    const navigate = useNavigate()

    return(
        <section className={"main-menu"}>
            <div className={"main-menu__wrapper"}>


            <h2 className={"main-menu__title"}>
                Choose difficulty
            </h2>

            <ul>
                <li
                    onClick={() => {navigate(RedirectFunc({code: `game`}))}}
                >Easy</li>
                <li
                    onClick={() => {navigate(RedirectFunc({code: `game-medium`}))}}
                >Medium</li>
                <li
                    onClick={() => {navigate(RedirectFunc({code: `game-hard`}))}}
                >Hard</li>
            </ul>
            </div>
        </section>
    )
}