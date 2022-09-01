import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../store/hooks";
import {Popup} from "./Popup";

export const Footer = () => {

    //popup
    let [popupVis, setPopupVis] = useState(false)

    //get location to set up timer or nor
    let [currentLocation, setCurrentLocation] = useState(window.location.pathname)
    setInterval(() => { // for check current location
        if (currentLocation !== window.location.pathname) {
            setCurrentLocation(window.location.pathname)
        }
    }, 500)

    //music
    let [play, setPlay] = useState(false)

    //timer
    let playTimer = useAppSelector(state => state.timer.play)
    let timeTimer = useAppSelector(state => state.timer.time)
    let stopTimer = useAppSelector(state => state.timer.stop)
    let [seconds, setSeconds] = useState(0)
    let [minutes, setMinutes] = useState(0)
    let [hours, setHours] = useState(0)
    let [timer, setTimer] = useState(timeTimer)
    useEffect(() => { // when seconds pass - set timer
        if (playTimer && !stopTimer) {
            if (seconds > 59) {
                seconds = 0
                setMinutes(minutes + 1)
                setSeconds(0)
                setTimeout(() => {
                    setSeconds(seconds + 1)
                }, 1000)
            } else {
                setTimeout(() => {
                    setSeconds(seconds + 1)
                }, 1000)
            }
            setTimer(`${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`)
        } else if (stopTimer) { // if stop - reset timer
            setTimer(timeTimer)
            setHours(0)
            setMinutes(0)
            setSeconds(0)
        }

    }, [seconds, playTimer, stopTimer])

    return (
        <footer>
            {
                (popupVis)
                    ? <Popup title={"Oops"} text={`Something went wrong... try again later.`} setPopup={setPopupVis}/>
                    : []
            }
            <div className={"footer__btns"}>
                <button
                    className={"footer__btn_music"}
                    onClick={() => {
                        setPlay(!play)
                        setPopupVis(true)
                    }}
                >
                    {
                        play
                            ? "II"
                            : `♫`
                    }

                </button>
            </div>
            <div className={(currentLocation === `/game`) ? "footer__timer" : "footer__timer_hidden"}>
                {timer}
            </div>
            <ul>
                <li style={{color: "orange", textAlign: "end", marginBottom: 8, marginTop: 4, width: 100}}> {/*inline style*/}
                    user: none
                </li>
                <ul>
                    <li
                        onClick={() => {
                            setPopupVis(true)
                        }}
                    >login/logout
                    </li>
                </ul>
            </ul>
        </footer>
    )
}