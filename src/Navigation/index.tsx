import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from "react";
import StackNavigator from './StackNavigator';
import { DefaultTheme } from "../Theme";

interface IProps {

}

interface IState {

}

class HOCNavigationContainer extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    darkTheme = {
        dark: false,
        colors: DefaultTheme
    }

    render() {
        return (
            <NavigationContainer theme={this.darkTheme} >
                <StackNavigator />
            </NavigationContainer>

        );
    }
}

export default HOCNavigationContainer;