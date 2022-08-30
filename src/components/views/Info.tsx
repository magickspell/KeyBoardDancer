import React from "react";

export const Info = () => {
    return (
        <>

            <div className={"info"}>
                <article>
                    <h1>Keyboard Dancer - Website to train your typing skills.</h1>
                    <p>Greetings!</p>
                    <p>On this website you will type different words.</p>
                    <p>The goal is to type exactly match with screen words, for this you will earn points.</p>
                    <p>On leader boards you can see people with the best results.</p>
                    <p>There are 3 modes: easy, medium and hard. More complexity - bigger words.</p>
                    <p>Also, you can use website just to learn typing, with easy mode.</p>

                    <a href="https://github.com/magickspell/KeyBoardDancer" target={"_blank"} className="info__github">
                        <img
                            src="https://rroylance.github.io/assets/img/logo.png"
                            alt="github-icon"
                        />
                    </a>
                </article>
            </div>

        </>
    )
}