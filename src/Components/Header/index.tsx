import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getHeaderTitle } from '@react-navigation/elements';
import { Colors } from "../../Theme/Colors";
import { Metrics } from "../../Theme/Metrics";

interface IProps {
    navigation: any,
    route: any,
    options: any,
}

const ConnectivityIcon = require("../../Assets/Connectivity.png")
const AccountHeaderIcon = require("../../Assets/Account1.png")

const Header = (props: IProps) => {

    return <View style={styles.MainContainer} >
        <View style={styles.AccountIconContainer}  >
            <Image source={AccountHeaderIcon} style={{ width: Metrics.WIDTH * 0.1, height: Metrics.WIDTH * 0.1 }} />
        </View>
        <Text style={styles.Title} >{props.route.name}</Text>
        <View style={styles.ConnectivityIconContainer}   >
            <Image source={ConnectivityIcon} style={{ width: Metrics.WIDTH * 0.07, height: Metrics.WIDTH * 0.08 }} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: Colors.backgroundBlue,
        flexDirection: "row",
        height: Metrics.HEIGHT * 0.1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    Title: {
        fontSize: Metrics.HEIGHT * 0.03,
        color: Colors.white
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