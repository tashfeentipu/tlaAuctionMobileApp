import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from "react";
import { Image, ImageSourcePropType, Text } from 'react-native';
import Header from '../Components/Header';
import Home from '../Screens/Home';
import Referrels from '../Screens/Referrals';
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

    imageHandler = (source: ImageSourcePropType) => {
        return <Image source={source} style={{ width: 20, height: 20 }} />
    }

    render() {
        return (
            <Tab.Navigator screenOptions={({ route }) => ({
                header: (props) => <Header {...props} />,
                tabBarStyle: {
                    backgroundColor: Colors.grey2,
                    borderTopLeftRadius: Metrics.WIDTH * 0.05,
                    borderTopRightRadius: Metrics.WIDTH * 0.05,
                    elevation: 1,
                    width: Metrics.WIDTH * 0.98,
                    left: Metrics.WIDTH * 0.01,
                    right: Metrics.WIDTH * 0.01,
                    height: Metrics.HEIGHT * 0.08
                },
                tabBarLabel: ({ focused }: any) => {
                    return focused && <Text style={{ fontSize: 10, color: Colors.indigo1 }}>{route.name}</Text> || null
                }
            })} >
                <Tab.Screen name={RouteNames.HOME} component={Home}
                    options={{
                        tabBarIcon: () => this.imageHandler(HomeIcon)
                    }} />
                <Tab.Screen name={RouteNames.WALLET} component={Wallet}
                    options={{
                        tabBarIcon: () => this.imageHandler(WalletIcon)
                    }} />
                <Tab.Screen name={RouteNames.REWARDS} component={Rewards}
                    options={{
                        tabBarIcon: () => this.imageHandler(RewardsIcon)
                    }} />
                <Tab.Screen name={RouteNames.REFERRELS} component={Referrels}
                    options={{
                        tabBarIcon: () => this.imageHandler(AccountIcon)
                    }} />
                <Tab.Screen name={RouteNames.SETTINGS} component={Settings}
                    options={{
                        tabBarIcon: () => this.imageHandler(SettingsIcon)
                    }} />
            </Tab.Navigator >
        );
    }
}


export default BottomTabNavigator;