import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {RedirectFunc} from "../../functions/RedirectFunc";


export const Navbar = () => {

    const navigate = useNavigate()

    let [currentLocation, setCurrentLocation] = useState(window.location.pathname)
    setInterval(() => { // for check current location
        if (currentLocation !== window.location.pathname) {
            setCurrentLocation(window.location.pathname)
        }
    }, 500)
    useEffect(() => { // if we have element nav, check current page and add class
        let el = document.querySelector(`nav`) ? document.querySelector(`nav`)!.children[0] : undefined
        if (el) {
            if (currentLocation === `/`) {
                el.children[0].classList.add(`selected`)
            } else {
                el.children[0].classList.remove(`selected`)
            }
            if (currentLocation === `/info`) {
                el.children[1].classList.add(`selected`)
            } else {
                el.children[1].classList.remove(`selected`)
            }
            if (currentLocation === `/leaderboard`) {
                el.children[2].classList.add(`selected`)
            } else {
                el.children[2].classList.remove(`selected`)
            }
        }
    }, [currentLocation])

    return (
        <nav>
            <ul>
                <li
                    onClick={() => {
                        navigate(RedirectFunc({code: ''}))
                    }}
                >Menu
                </li>
                <li
                    onClick={() => {
                        navigate(RedirectFunc({code: 'info'}))
                    }}
                >Info
                </li>
                <li
                    onClick={() => {
                        navigate(RedirectFunc({code: 'leaderboard'}))
                    }}
                >Leader Board
                </li>
            </ul>
            <div className={"logo"}>
                <b>KD</b>
            </div>
            <img src={require("../../img/keyBoardDancer.png")} alt="logo"/>
        </nav>
    )
}