import React, {useState} from "react";
import {Loader} from "../layouts/Loader";

export const LeaderBoard = () => {

    let [loading, setLoading] = useState(true)

    return (
        <section className={"leader-board"}>
            {
                (loading)
                    ? <Loader/>
                    : []
            }
        </section>
    )
}