import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import { Metrics, Colors, Fonts } from "../../Theme";
import * as RouteNames from "../../Navigation/Routes";

interface IProps {
    navigation: any,
    route: any,
    options: any,
}

const ConnectivityIcon = require("../../Assets/Connectivity.png")
const AccountHeaderIcon = require("../../Assets/Account1.png")

const Header = (props: IProps) => {

    return <View style={styles.MainContainer} >
        <TouchableOpacity style={styles.AccountIconContainer} onPress={() => { props.navigation.navigate(RouteNames.PROFILE) }} >
            <Image source={AccountHeaderIcon} style={{ width: Metrics.WIDTH * 0.1, height: Metrics.WIDTH * 0.1 }} />
        </TouchableOpacity>
        <Text style={styles.Title} >{props.route.name}</Text>
        <View style={styles.ConnectivityIconContainer}>
            <Image source={ConnectivityIcon} style={{ width: Metrics.WIDTH * 0.07, height: Metrics.WIDTH * 0.08 }} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: Colors.white,
        flexDirection: "row",
        height: Metrics.HEIGHT * 0.1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    Title: {
        fontSize: Metrics.HEIGHT * 0.03,
        fontFamily: Fonts.DubaiBold,
        color: Colors.black
    },
    AccountIconContainer: {
        flex: 0.15,
        alignItems: "center"
    },
    ConnectivityIconContainer: {
        flex: 0.15,
        alignItems: "center"
    },
});

export default Header;