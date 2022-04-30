import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "../Screens/Splash";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import SignUpSuccess from "../Screens/SignUpSuccess";
import BottomTabNavigator from "./TabNavigator";
import Walkthrough1 from "../Screens/Walkthrough1";
import Walkthrough2 from "../Screens/Walkthrough2";
import Walkthrough3 from "../Screens/Walkthrough3";
import * as RouteNames from "./Routes";

const Stack = createStackNavigator();

interface IProps {

}

interface IState {

}

class StackNavigator extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Stack.Navigator initialRouteName={RouteNames.SIGN_UP} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={RouteNames.SPLASH} component={SplashScreen} />
                <Stack.Screen name={RouteNames.SIGN_IN} component={SignIn} />
                <Stack.Screen name={RouteNames.SIGN_UP} component={SignUp} />
                <Stack.Screen name={RouteNames.SIGN_UP_SUCCESS} component={SignUpSuccess} />
                <Stack.Screen name={RouteNames.WALKTHROUGH1} component={Walkthrough1} />
                <Stack.Screen name={RouteNames.WALKTHROUGH2} component={Walkthrough2} />
                <Stack.Screen name={RouteNames.WALKTHROUGH3} component={Walkthrough3} />
                <Stack.Screen name={RouteNames.HOME_TAB_NAV} component={BottomTabNavigator} />
            </Stack.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {}
});

export default StackNavigator;