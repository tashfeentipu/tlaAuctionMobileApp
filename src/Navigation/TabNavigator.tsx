import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home";
import Wallet from "../Screens/Wallet";
import Profile from "../Screens/Profile";
import Rewards from "../Screens/Rewards";

const Tab = createBottomTabNavigator();

interface IProps {

}

interface IState {

}

class BottomTabNavigator extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Wallet" component={Wallet} />
                <Tab.Screen name="Rewards" component={Rewards} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {}
});

export default BottomTabNavigator;