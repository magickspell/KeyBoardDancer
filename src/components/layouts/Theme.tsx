import React from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setDarkTheme, setLightTheme} from "../../store/slice/themeSlice";

export const ThemeBtn = () => {

    const dispatch = useAppDispatch()

    let theme = useAppSelector(state => state.theme.theme)

    return (
        <div className={"theme-button"}
             onClick={() => {
                 if (theme === `light`) {
                     dispatch(setDarkTheme())
                 } else {
                     dispatch(setLightTheme())
                 }
             }}
        >
            <p>🌕</p>
        </div>
    )
}