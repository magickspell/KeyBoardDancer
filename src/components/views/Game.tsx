import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {RedirectFunc} from "../../functions/RedirectFunc";

export const Game = () => {

    const navigate = useNavigate()

    let [target, setTarget] = useState('Dolor')
    let [text, setText] = useState('')

    return (
        <section className={'game'}>
            <p className={"game__target"}>
                {target}
            </p>
            <textarea
                className={"game__input_text"}
                value={text}
                onChange={(e) => {
                    setText(e.currentTarget.value.trim())
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
                <button className={"game__btns_btn"}>Play</button>
                <button className={"game__btns_btn"}>Pause</button>
                <button className={"game__btns_btn"}>Restart</button>
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