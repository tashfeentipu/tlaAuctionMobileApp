export interface ITheme {
    primary: string,
    secondary: string,
    background: string,
    card: string,
    text: string,
    border: string,
    notification: string,
    buttonTextColor: string,
    labelText: string
}

export interface IThemeContext {
    theme: ITheme
    switchTheme: Function
}