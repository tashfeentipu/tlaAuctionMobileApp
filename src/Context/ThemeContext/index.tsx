import React, { createContext, ReactNode, useState } from "react";
import { DefaultTheme } from "../../Theme";
import { DarkTheme } from "../../Theme/Colors";
import { IThemeContext } from "../../Types/Theme";

interface IProps {
    children: ReactNode
}

export const ThemeContext = createContext<IThemeContext>({ theme: DefaultTheme, switchTheme: () => { } });

const ThemeContextProvider = (props: IProps) => {

    const [dark, setDarkTheme] = useState<boolean>(false)
    const switchTheme = () => {
        setDarkTheme(prevState => !prevState)
    }

    return <ThemeContext.Provider value={{ theme: dark && DarkTheme || DefaultTheme, switchTheme }} >
        {props.children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider;