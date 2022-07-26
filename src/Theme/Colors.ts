import { ITheme } from "../Types/Theme"

export const Colors = {
    grey: "#5D5C71",
    grey2: "#E8E8E8",
    grey3: "#5D6568",
    grey4: "#373232",
    white: "#FFFFFF",
    valentino: "#2D0C33",
    pink: "#DB2FB1",
    pink2: "#DC30B2",
    backgroundBlue: "#05020F",
    indigo1: '#4C1C7D',
    indigo2: '#87719A',
    indigo3: '#D5CED6',
    backgroundGrey: "#353343",
    black: "#000000",
    skyBlue: "#AAB9BF",
    purple1: "#6D0093",
    purple2: "#2C0054",
    green1: "#00BD13",
    red: "#FF0000"
}

export const DefaultTheme: ITheme = {
    primary: '#4C1C7D',
    secondary: "#4C1C7D",
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    buttonTextColor: "white",
    labelText: "black",
    cardsBackground:"#D9EAF1"
}

export const DarkTheme: ITheme = {
    ...DefaultTheme,
    background: "black",
    text: "white"
}