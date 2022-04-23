import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from "react";
import { Image } from 'react-native';
import Home from '../Screens/Home';
import Profile from "../Screens/Profile";
import Rewards from "../Screens/Rewards";
import Settings from '../Screens/Settings';
import Wallet from "../Screens/Wallet";
import * as RouteNames from "./Routes";

const Tab = createBottomTabNavigator();

interface IProps {

}

interface IState {

}

const HomeIcon = require("../Assets/Home.png")
const Account = require("../Assets/Account.png")
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
            <Tab.Navigator >
                <Tab.Screen name={RouteNames.HOME} component={Home} options={{
                    tabBarIcon: (color: string, size: number) => (<Image source={HomeIcon} />)


                }} />
                <Tab.Screen name={RouteNames.WALLET} component={Wallet}
                    options={{
                        tabBarIcon: () =>
                            <Image source={HomeIcon} />

                    }} />
                <Tab.Screen name={RouteNames.REWARDS} component={Rewards}
                    options={{
                        tabBarIcon: () =>
                            <Image source={HomeIcon} />

                    }} />
                <Tab.Screen name={RouteNames.PROFILE} component={Profile}
                    options={{
                        tabBarIcon: () =>
                            <Image source={HomeIcon} />

                    }} />
                <Tab.Screen name={RouteNames.SETTINGS} component={Settings}
                    options={{
                        tabBarIcon: () => {
                            return <Image source={HomeIcon} />
                        }
                    }} />
            </Tab.Navigator>
        );
    }
}

export default BottomTabNavigator;