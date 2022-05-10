import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Metrics, Colors, Fonts } from "../../Theme";
import * as RouteNames from "../../Navigation/Routes";
import { ActiveIcon, DisabledIcon } from "../../Assets";

interface IProps {
    toggle: boolean,
    navigation: any
}

interface IState {

}

class LogonToggle extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <TouchableOpacity style={this.props.toggle && styles.Container1 || styles.Container2}
                    onPress={() => { this.props.navigation.navigate(RouteNames.SIGN_IN) }}  >
                    <Text style={this.props.toggle && styles.Text1 || styles.Text2} >SIGN IN</Text>
                    <Image source={this.props.toggle && ActiveIcon || DisabledIcon} />
                </TouchableOpacity>
                <View style={styles.Spacer} />
                <TouchableOpacity style={!this.props.toggle && styles.Container1 || styles.Container2}
                    onPress={() => { this.props.navigation.navigate(RouteNames.SIGN_UP) }} >
                    <Image source={!this.props.toggle && ActiveIcon || DisabledIcon} />
                    <Text style={!this.props.toggle && styles.Text1 || styles.Text2}>SIGN UP</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        marginVertical: Metrics.HEIGHT * 0.05,
        flexDirection: "row",
        alignItems: "center",
        width: Metrics.WIDTH * 0.9,
        justifyContent: "space-between"
    },
    Spacer: {
        width: Metrics.WIDTH * 0.4,
        borderBottomColor: Colors.grey,
        borderBottomWidth: Metrics.HEIGHT * 0.002
    },
    Container1: {
        flexDirection: "row",
        alignItems: "center",
        width: Metrics.WIDTH * 0.28,
        justifyContent: "space-between"
    },
    Container2: {
        flexDirection: "row",
        alignItems: "center",
        width: Metrics.WIDTH * 0.20,
        justifyContent: "space-between"
    },
    Text1: {
        fontSize: Metrics.WIDTH * 0.04,
        fontFamily: Fonts.Exo2Regular,
        color: Colors.pink2
    },
    Text2: {
        fontSize: Metrics.WIDTH * 0.04,
        fontFamily: Fonts.Exo2Regular,
        color: Colors.grey
    },
});

export default LogonToggle;