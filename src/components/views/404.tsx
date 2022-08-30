import React from "react";
import {useNavigate} from "react-router-dom";

export const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className={"not-found"}>
            <div className={"not-found__wrapper"}>
                <p className={"not-found__title"}>Sorry, page not found.</p>
                <ul className={"not-found__list"}>
                    <li className={"not-found__list__item"}
                        onClick={() => {
                            navigate(-1)
                        }}
                    >go back
                    </li>
                    <li className={"not-found__list__item"}>go main</li>
                </ul>
            </div>
        </div>
    )
}