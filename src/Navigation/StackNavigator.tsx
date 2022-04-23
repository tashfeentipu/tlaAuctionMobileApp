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
            <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />
                <Stack.Screen name="Walkthrough1" component={Walkthrough1} />
                <Stack.Screen name="Walkthrough2" component={Walkthrough2} />
                <Stack.Screen name="Walkthrough3" component={Walkthrough3} />
                <Stack.Screen name="HomeTabNav" component={BottomTabNavigator} />
            </Stack.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {}
});

export default StackNavigator;