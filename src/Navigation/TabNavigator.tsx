import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
    AccountIcon, ConnectivityIcon, HeaderAccountIcon, HomeIcon, RewardsIcon, SettingsIcon, WalletIcon
} from "../Assets";
import Header from '../Components/Header';
import Referrels from '../Screens/Referrals';
import Rewards from "../Screens/Rewards";
import Wallet from "../Screens/Wallet";
import { Colors, Fonts, Metrics } from '../Theme';
import { HOME_TAB_NAV, PROFILE, REFERRELS, REWARDS, SETTINGS_TAB_NAV, WALLET } from "./Routes";
import { HomeStackNav, SettingsStack } from './StackNavigator';


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

    imageHandler = (source: ImageSourcePropType) => {
        return <Image source={source} style={{ width: 20, height: 20 }} />
    }

    render() {
        return (
            <Tab.Navigator screenOptions={({ route }) => ({
                header: (props) => <Header
                    rightIcon={
                        <View style={styles.ConnectivityIconContainer}>
                            <Image source={ConnectivityIcon} style={{ width: Metrics.WIDTH * 0.07, height: Metrics.WIDTH * 0.08 }} />
                        </View>
                    }
                    {...props}
                    leftIcon={<TouchableOpacity style={styles.AccountIconContainer} onPress={() => { props.navigation.navigate(PROFILE); }}>
                        <Image source={HeaderAccountIcon} style={{ width: Metrics.WIDTH * 0.1, height: Metrics.WIDTH * 0.1 }} />
                    </TouchableOpacity>}
                />,
                tabBarStyle: styles.tabBarStyles,
                tabBarLabel: ({ focused }: any) => {
                    return focused && <Text style={styles.tabBarLabel}>{route.name.split("_")[0]}</Text> || null
                }
            })} >
                <Tab.Screen name={HOME_TAB_NAV} component={HomeStackNav}
                    options={{
                        tabBarIcon: () => this.imageHandler(HomeIcon)
                    }} />
                <Tab.Screen name={WALLET} component={Wallet}
                    options={{
                        tabBarIcon: () => this.imageHandler(WalletIcon)
                    }} />
                <Tab.Screen name={REWARDS} component={Rewards}
                    options={{
                        tabBarIcon: () => this.imageHandler(RewardsIcon)
                    }} />
                <Tab.Screen name={REFERRELS} component={Referrels}
                    options={{
                        tabBarIcon: () => this.imageHandler(AccountIcon)
                    }} />
                <Tab.Screen name={SETTINGS_TAB_NAV} component={SettingsStack}
                    options={{
                        tabBarIcon: () => this.imageHandler(SettingsIcon)
                    }} />
            </Tab.Navigator >
        );
    }
}

const styles = StyleSheet.create({
    AccountIconContainer: {
        flex: 0.15,
        alignItems: "center"
    },
    ConnectivityIconContainer: {
        flex: 0.15,
        alignItems: "center"
    },
    tabBarStyles: {
        backgroundColor: Colors.grey2,
        borderTopLeftRadius: Metrics.WIDTH * 0.05,
        borderTopRightRadius: Metrics.WIDTH * 0.05,
        elevation: 1,
        width: Metrics.WIDTH * 0.96,
        left: Metrics.WIDTH * 0.02,
        right: Metrics.WIDTH * 0.02,
        height: Metrics.HEIGHT * 0.08
    },
    tabBarLabel: {
        fontSize: 10,
        color: Colors.indigo1,
        fontFamily: Fonts.Bold
    }
});


export default BottomTabNavigator;