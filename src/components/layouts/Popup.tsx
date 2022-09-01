import React from "react";

interface PopupInt {
    title: string,
    text: string,
    setPopup:  React.Dispatch<React.SetStateAction<boolean>>,
}

export const Popup = (props: PopupInt) => {
    return(
        <div className={"popup__wrapper"}>
            <div className={"popup"}>
                <div className={"popup__btn_close"}
                     onClick={() => {props.setPopup(false)}}
                >close</div>
                <p className={"popup__title"}>{props.title}</p>
                <p className={"popup__text"}>{props.text}</p>
            </div>
        </div>
    )
}