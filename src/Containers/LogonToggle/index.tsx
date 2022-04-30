import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Metrics } from "../../Theme/Metrics";

const ActiveIcon = require("../../Assets/Active.png")
const DisabledIcon = require("../../Assets/Disabled.png")

interface IProps {
    toggle: boolean
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
                <View style={this.props.toggle && styles.Container1 || styles.Container2}  >
                    <Text style={this.props.toggle && styles.Text1 || styles.Text2} >SIGN IN</Text>
                    <Image source={this.props.toggle && ActiveIcon || DisabledIcon} />
                </View>
                <View style={styles.Spacer} />
                <View style={!this.props.toggle && styles.Container1 || styles.Container2}>
                    <Image source={!this.props.toggle && ActiveIcon || DisabledIcon} />
                    <Text style={!this.props.toggle && styles.Text1 || styles.Text2}>SIGN UP</Text>
                </View>
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
        color: Colors.pink2
    },
    Text2: {
        fontSize: Metrics.WIDTH * 0.04,
        color: Colors.grey
    },
});

export default LogonToggle;