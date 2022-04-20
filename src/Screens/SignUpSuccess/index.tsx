import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Metrics } from "../../Theme/Metrics";

interface IProps {

}

interface IState {

}

class SignUpSuccess extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <View>
                    <Image source={require("../../Assets/SignUpSuccess.png")} />
                </View>
                <View style={styles.LabelsContainer} >
                    <Text style={styles.Label1}>Sign Up Successful !!</Text>
                    <Text style={styles.Label2}>You are entering a new world of Blockchain</Text>
                </View>
                <TouchableOpacity style={styles.signInButtonContainer} >
                    <Text style={styles.signInButtonText}>
                        SIGN IN
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#05020F",
        justifyContent: 'center',
        alignItems: "center",
        flex: 1
    },
    Label1: {
        color: "#4C1C7D",
        fontSize: 20
    },
    Label2: {
        color: "#FFFFFF",
        fontSize: 14
    },
    signInButtonContainer: {
        backgroundColor: "#2D0C33",
        marginVertical: Metrics.HEIGHT * 0.1,
        width: Metrics.WIDTH * 0.4,
        height: Metrics.HEIGHT * 0.1,
        borderRadius: Metrics.HEIGHT * 0.05,
        justifyContent: "center",
        alignItems: "center"
    },
    signInButtonText: {
        color: "#FFFFFF"
    },
    LabelsContainer: {
        height: Metrics.HEIGHT * 0.2,
        justifyContent: "space-around",
        alignItems: "center"
    }
});

export default SignUpSuccess;