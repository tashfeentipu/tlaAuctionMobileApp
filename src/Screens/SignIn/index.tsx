import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Button from "../../Components/Button";
import TextInputBox from "../../Components/TextInput";
import { Metrics } from "../../Theme/Metrics";

interface IProps {

}

interface IState {

}

class SignIn extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <View >
                    <Image source={require("../../Assets/Logo.png")} style={{ width: 210, height: 130 }} />
                </View>
                <TextInputBox inputLabel="Email" />
                <TextInputBox inputLabel="Password" />
                <View style={styles.FPLabelContainer} >
                    <Text style={styles.FPLabel} >Forgot Password?</Text>
                    <TouchableOpacity style={styles.signInButtonContainer} >
                        <Text style={styles.signInButtonText}  >
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#05020F",
        height: Metrics.HEIGHT,
        alignItems: "center",
        justifyContent: "center"
    },
    FPLabelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Metrics.WIDTH * 0.9,
        height: Metrics.HEIGHT * 0.1,
    },
    InputLabel: {
        fontSize: Metrics.WIDTH * 0.04,
        color: "white"
    },
    FPLabel: {
        fontSize: 14,
        color: "white"
    },
    signInButtonContainer: {
        height: Metrics.HEIGHT * 0.06,
        width: Metrics.WIDTH * 0.3,
        borderRadius: Metrics.WIDTH * 0.2,
        backgroundColor: "#2D0C33",
        alignItems: "center",
        justifyContent: 'center'
    },
    signInButtonText: {
        color: "white",
        fontSize: Metrics.WIDTH * 0.04
    }
});

export default SignIn;