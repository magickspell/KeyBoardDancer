import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {RedirectFunc} from "../../functions/RedirectFunc";
import {DataProvider} from "../../api/DataProvider";

export const Game = () => {

    const navigate = useNavigate()

    // current target text and targets array
    let [target, setTarget] = useState('')
    let [targetArr, setTargetArr] = useState([])
    useEffect(() => {
        if (targetArr.length === 0) {
            DataProvider.Game.getEasy()
                .then((data: any) => {
                    console.log(data)
                    setTargetArr(data.comments)
                })
        }
    }, [])
    useEffect(() => {
        if (targetArr.length === 300) {
            setTarget(targetArr[Math.floor(Math.random() * 300)]["body"])
        }
    }, [targetArr])
    let [text, setText] = useState('')

    return (
        <section className={'game'}>
            <p className={"game__target"}>
                {
                    target.length > 0
                        ? target
                        : <p>Tap "Play" when you are ready</p>
                }
            </p>
            <textarea
                className={"game__input_text"}
                value={text}
                onChange={(e) => {
                    setText(e.currentTarget.value)
                }}
            />
            <ul className={"game__hints"}>
                <p className={"game__hints_title"}>Useful shortcuts:</p>
                <li className={"game__hints_item"}>Ctrl+A - all,</li>
                <li className={"game__hints_item"}>Insert - change input,</li>
                <li className={"game__hints_item"}>Home - to start,</li>
                <li className={"game__hints_item"}>End - to end,</li>
                <li className={"game__hints_item"}>Ctrl + Arrow - skip word</li>
                {/*<li className={"game__hints_item"}>Ctrl + Shift + Home/End/Arrow - choose many words</li>*/}
            </ul>
            <div className={"game__btns"}>
                <button
                    className={"game__btns_btn"}
                    onClick={() => {
                        //startTimer
                        //setWord
                    }}
                >Play
                </button>
                <button
                    onClick={() => {
                        //pauseTimer
                    }}
                    className={"game__btns_btn"}
                >Pause
                </button>
                <button
                    //restartTimer
                    //setWord
                    className={"game__btns_btn"}
                >Restart
                </button>
                <button
                    onClick={() => {
                        navigate(RedirectFunc({code: `main`}))
                    }}
                    className={"game__btns_btn"}
                >Exit
                </button>
            </div>

        </section>
    )
}