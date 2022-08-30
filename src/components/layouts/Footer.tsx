import React, {useState} from "react";

export const Footer = () => {

    let [currentLocation, setCurrentLocation] = useState(window.location.pathname)
    setInterval(() => { // for check current location
        if (currentLocation !== window.location.pathname) {
            setCurrentLocation(window.location.pathname)
        }
    }, 500)

    let [play, setPlay] = useState(`play`)

    return (
        <footer>
            <div className={"footer__btns"}>
                <button className={"footer__btn_music"}>
                    {
                        play === `play`
                        ? "II"
                        : `♫`
                    }

                </button>
            </div>
            <div className={(currentLocation === `/game`) ? "footer__timer" : "footer__timer_hidden"}>
                00:00
            </div>
            <ul>
                <li style={{color: "orange", textAlign: "end", marginBottom: 8, marginTop: 4}}> {/*inline style*/}
                    user: user
                </li>
                <ul>
                    <li>login/logout</li>
                </ul>
            </ul>
        </footer>
    )
}