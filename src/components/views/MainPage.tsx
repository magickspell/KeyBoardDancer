import React from "react";
import {RedirectFunc} from "../../functions/RedirectFunc";
import {useNavigate} from "react-router-dom";

export const MainPage = () => {

    const navigate = useNavigate()

    return(
        <section className={"main-menu"}>
            <h2 className={"main-menu__title"}>
                Choose difficulty
            </h2>

            <ul>
                <li
                    onClick={() => {navigate(RedirectFunc({code: `game`}))}}
                >Easy</li>
                <li>Medium</li>
                <li>Hard</li>
            </ul>
        </section>
    )
}