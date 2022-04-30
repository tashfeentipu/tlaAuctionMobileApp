import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Metrics, Colors } from "../../Theme";

interface IProps {

}

interface IState {

}

class Walkthrough3 extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Image source={require("../../Assets/Walkthrough3.png")} />
                <View style={styles.SubContainer1}>
                    <Text style={styles.Label1}>PSPad Wallet</Text>
                    <Text style={styles.Label2}>PSPad will provide reliable wallet</Text>
                </View>
                <TouchableOpacity onPress={() => { }} style={styles.GotItButton} >
                    <Text style={styles.GotItText}>
                        GOT IT
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: Colors.white,
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    SubContainer1: {
        height: Metrics.HEIGHT * 0.2,
        alignItems: "center",
        justifyContent: "space-around"
    },
    Label1: {
        fontSize: 20,
        color: "#4C1C7D"
    },
    Label2: {
        fontSize: 14,
        color: "#FFFFFF"
    },
    SubContainer2: {
        flexDirection: "row",
        width: Metrics.WIDTH * 0.9,
        justifyContent: "space-between"
    },
    GotItButton: {
        backgroundColor: "#2D0C33",
        width: Metrics.WIDTH * 0.4,
        height: Metrics.HEIGHT * 0.1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Metrics.HEIGHT * 0.05
    },
    GotItText: {
        color: "#FFFFFF"
    },

});

export default Walkthrough3;