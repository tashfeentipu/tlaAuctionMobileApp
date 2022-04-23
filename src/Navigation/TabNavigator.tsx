import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from "react";
import { Image } from 'react-native';
import Home from '../Screens/Home';
import Profile from "../Screens/Profile";
import Rewards from "../Screens/Rewards";
import Settings from '../Screens/Settings';
import Wallet from "../Screens/Wallet";
import { Colors } from '../Theme/Colors';
import { Metrics } from '../Theme/Metrics';
import * as RouteNames from "./Routes";

const Tab = createBottomTabNavigator();

interface IProps {

}

interface IState {

}

const HomeIcon = require("../Assets/Home.png")
const AccountIcon = require("../Assets/Account.png")
const RewardsIcon = require("../Assets/Rewards.png")
const WalletIcon = require("../Assets/Wallet.png")
const SettingsIcon = require("../Assets/Settings.png")

class BottomTabNavigator extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Tab.Navigator screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.indigo2,
                    height: Metrics.HEIGHT * 0.08
                },
                tabBarActiveTintColor: Colors.white,
            }} >
                <Tab.Screen name={RouteNames.HOME} component={Home}
                    options={{
                        tabBarIcon: () => (<Image source={HomeIcon} style={{ width: 20, height: 20 }} />)
                    }} />
                <Tab.Screen name={RouteNames.WALLET} component={Wallet}
                    options={{
                        tabBarIcon: () => (<Image source={WalletIcon} style={{ width: 20, height: 20 }} />)
                    }} />
                <Tab.Screen name={RouteNames.REWARDS} component={Rewards}
                    options={{
                        tabBarIcon: () => (<Image source={RewardsIcon} style={{ width: 20, height: 20 }} />)
                    }} />
                <Tab.Screen name={RouteNames.PROFILE} component={Profile}
                    options={{
                        tabBarIcon: () => (<Image source={AccountIcon} style={{ width: 20, height: 20 }} />)
                    }} />
                <Tab.Screen name={RouteNames.SETTINGS} component={Settings}
                    options={{
                        tabBarIcon: () => (<Image source={SettingsIcon} style={{ width: 20, height: 20 }} />)
                    }} />
            </Tab.Navigator>
        );
    }
}

export default BottomTabNavigator;