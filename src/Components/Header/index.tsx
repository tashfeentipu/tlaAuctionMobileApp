import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {
    leftIcon: JSX.Element
    rightIcon: JSX.Element
    navigation?: any,
    route?: any,
    options?: any,
}

const Header = (props: IProps) => {
    return <View style={styles.MainContainer} >
        {props.leftIcon}
        <Text style={styles.Title} >{props.route.name}</Text>
        {props.rightIcon}
    </View>
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: Colors.white,
        flexDirection: "row",
        width: Metrics.WIDTH,
        height: Metrics.HEIGHT * 0.1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    Title: {
        fontSize: Metrics.HEIGHT * 0.03,
        fontFamily: Fonts.Bold,
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