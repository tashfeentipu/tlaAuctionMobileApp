import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Profile from '../Screens/Profile';
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import SignUpSuccess from "../Screens/SignUpSuccess";
import SplashScreen from "../Screens/Splash";
import Walkthrough1 from "../Screens/Walkthrough1";
import Walkthrough2 from "../Screens/Walkthrough2";
import Walkthrough3 from "../Screens/Walkthrough3";
import * as RouteNames from "./Routes";
import BottomTabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

interface IProps {

}

interface IState {

}

const HomeStackNav = () => {
    return <Stack.Navigator initialRouteName={RouteNames.HOME_TAB_NAV}>
        <Stack.Screen name={RouteNames.PROFILE} component={Profile} />
        <Stack.Screen name={RouteNames.HOME_TAB_NAV} component={BottomTabNavigator} options={{headerShown: false}} />
    </Stack.Navigator>
}

class StackNavigator extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Stack.Navigator initialRouteName={RouteNames.HOME_TAB_NAV_MAIN} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={RouteNames.SPLASH} component={SplashScreen} />
                <Stack.Screen name={RouteNames.SIGN_IN} component={SignIn} />
                <Stack.Screen name={RouteNames.SIGN_UP} component={SignUp} />
                <Stack.Screen name={RouteNames.SIGN_UP_SUCCESS} component={SignUpSuccess} />
                <Stack.Screen name={RouteNames.WALKTHROUGH1} component={Walkthrough1} />
                <Stack.Screen name={RouteNames.WALKTHROUGH2} component={Walkthrough2} />
                <Stack.Screen name={RouteNames.WALKTHROUGH3} component={Walkthrough3} />
                <Stack.Screen name={RouteNames.HOME_TAB_NAV_MAIN} component={HomeStackNav} />
            </Stack.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {}
});

export default StackNavigator;