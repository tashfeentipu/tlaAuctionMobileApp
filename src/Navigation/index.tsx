import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from "react";
import { Text } from 'react-native';
import BottomTabNavigator from './TabNavigator';

interface IProps {

}

interface IState {

}

class HOCNavigationContainer extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>

        );
    }
}

export default HOCNavigationContainer;