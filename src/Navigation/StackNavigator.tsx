import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import AirDrops from '../Screens/AirDrops';
import NewsUpdates from '../Screens/NewsUpdates';
import Packages from '../Screens/Packages';
import PlayToEarn from '../Screens/PlayToEarn';
import Profile from '../Screens/Profile';
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import SignUpSuccess from "../Screens/SignUpSuccess";
import SplashScreen from "../Screens/Splash";
import Videos from '../Screens/Videos';
import Walkthrough1 from "../Screens/Walkthrough1";
import Walkthrough2 from "../Screens/Walkthrough2";
import Walkthrough3 from "../Screens/Walkthrough3";
import YieldFarming from '../Screens/YieldFarming';
import * as RouteNames from "./Routes";
import BottomTabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const HomeStackNav = () => {
    return <Stack.Navigator initialRouteName={RouteNames.HOME_TAB_NAV} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RouteNames.VIDEOS} component={Videos} />
        <Stack.Screen name={RouteNames.AIRDROP} component={AirDrops} />
        <Stack.Screen name={RouteNames.PLAY_TO_EARN} component={PlayToEarn} />
        <Stack.Screen name={RouteNames.YIELD_FARMING} component={YieldFarming} />
        <Stack.Screen name={RouteNames.NEWS_UPDATES} component={NewsUpdates} />
        <Stack.Screen name={RouteNames.PACKAGES} component={Packages} />
        <Stack.Screen name={RouteNames.HOME_TAB_NAV} component={BottomTabNavigator} />
    </Stack.Navigator>
}

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={RouteNames.SPLASH} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={RouteNames.SIGN_IN} component={SignIn} />
            <Stack.Screen name={RouteNames.SIGN_UP} component={SignUp} />
            <Stack.Screen name={RouteNames.SPLASH} component={SplashScreen} />
            <Stack.Screen name={RouteNames.WALKTHROUGH1} component={Walkthrough1} />
            <Stack.Screen name={RouteNames.WALKTHROUGH2} component={Walkthrough2} />
            <Stack.Screen name={RouteNames.WALKTHROUGH3} component={Walkthrough3} />
            <Stack.Screen name={RouteNames.SIGN_UP_SUCCESS} component={SignUpSuccess} />
            <Stack.Screen name={RouteNames.PROFILE} component={Profile} />
            <Stack.Screen name={RouteNames.HOME_TAB_NAV_MAIN} component={HomeStackNav} />
        </Stack.Navigator>
    );
}

export default StackNavigator;