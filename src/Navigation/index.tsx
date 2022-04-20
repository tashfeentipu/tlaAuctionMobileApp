import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from "react";
import StackNavigator from './StackNavigator';

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
                <StackNavigator />
            </NavigationContainer>

        );
    }
}

export default HOCNavigationContainer;