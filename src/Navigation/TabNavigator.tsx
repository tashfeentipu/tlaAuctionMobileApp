import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from "react";
import Profile from "../Screens/Profile";
import Rewards from "../Screens/Rewards";
import Splash from "../Screens/Splash";
import Wallet from "../Screens/Wallet";

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
                <Tab.Screen name="Home" component={Splash} />
                <Tab.Screen name="Wallet" component={Wallet} />
                <Tab.Screen name="Rewards" component={Rewards} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        );
    }
}

export default BottomTabNavigator;