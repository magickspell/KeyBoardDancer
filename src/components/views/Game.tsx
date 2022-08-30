import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {RedirectFunc} from "../../functions/RedirectFunc";
import {DataProvider} from "../../api/DataProvider";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {pauseTimer, startTimer, stopTimer} from "../../store/slice/timerSlice";

export const Game = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    //clicked button - if yes, then scale with css class
    let [clickedBtn, setClickedBtn] = useState(-1)

    // current target text and targets array
    let [target, setTarget] = useState('')
    let [targetArr, setTargetArr] = useState<any[]>([])
    useEffect(() => {
        if (targetArr.length === 0) {
            DataProvider.Game.getEasy()
                .then((data: any) => {
                    let result = data.comments.map((i: any) => i.body)
                        .map((i: string) => {
                            return i.indexOf(`’`) !== -1
                                ? i.split(``).map((i: string) => {
                                    if (i === `’`) {
                                        return `'`
                                    } else {
                                        return i
                                    }
                                }).join(``)
                                : i
                        })
                    setTargetArr(result)
                })
        }
    }, [])
    let [completeTarget, setCompleteTarget] = useState<any[]>([])
    let [text, setText] = useState('')
    useEffect(() => {
        if (text === target) {
            setCompleteTarget(() => {
                let result = completeTarget.map((i: any) => i)
                result.push(text)
                return result
            })
            setTargetArr(() => {
                let result = targetArr.map((i: any) => i)
                result.splice(result.indexOf(text), 1)
                return result
            })
            setTarget(targetArr[Math.floor(Math.random() * 300)])
            setText(``)
        }
    }, [text])

    // timer status
    let play = useAppSelector(state => state.timer.play)
    let pause = useAppSelector(state => state.timer.pause)
    let stop = useAppSelector(state => state.timer.stop)

    // buttons actions
    const pressPlay = () => {
        if (targetArr.length > 0 && play === false && pause === false) {
            setTarget(targetArr[Math.floor(Math.random() * 300)])
            dispatch(startTimer())
        } else if (targetArr.length > 0 && play === false) {
            dispatch(startTimer())
        }
    }

    const pressPause = () => {
        if (pause === false && play === true) {
            dispatch(pauseTimer())
        }
    }

    const pressReset = () => {
        if (stop === false) {
            dispatch(stopTimer())
        }
    }


    return (
        <section className={'game'}>
            <p className="game__target">
                {
                    target//.length > 0
                        ? target
                        : `Tap "Play" when you are ready`
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
                    className={(clickedBtn !== 0) ? "game__btns_btn" : "game__btns_btn clicked"}
                    onClick={() => {
                        setClickedBtn(0)
                        pressPlay()
                        //setWord
                    }}
                >Play
                </button>

                <button
                    onClick={() => {
                        setClickedBtn(1)
                        pressPause()
                        //pauseTimer
                    }}
                    className={(clickedBtn !== 1) ? "game__btns_btn" : "game__btns_btn clicked"}
                >Pause
                </button>

                <button
                    //restartTimer
                    //setWord
                    className={(clickedBtn !== 2) ? "game__btns_btn" : "game__btns_btn clicked"}
                    onClick={() => {
                        setClickedBtn(2)
                        pressReset()
                        setTarget(``)
                    }}
                >Restart
                </button>

                <button
                    onClick={() => {
                        setClickedBtn(3)
                        pressReset()
                        navigate(RedirectFunc({code: `main`}))
                    }}
                    className={(clickedBtn !== 3) ? "game__btns_btn" : "game__btns_btn clicked"}
                >Exit
                </button>
            </div>

        </section>
    )
}