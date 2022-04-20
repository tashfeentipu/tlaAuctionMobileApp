import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import TextInputBox from "../../Components/TextInput";
import { Metrics } from "../../Theme/Metrics";

interface IProps {

}

interface IState {

}

class SignUp extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <View>
                    <Image source={require("../../Assets/Logo.png")} />
                </View>
                <View>
                    <Text style={styles.InputLabel}>Name</Text>
                    <TextInputBox />
                </View>
                <View>
                    <Text style={styles.InputLabel}>Email</Text>
                    <TextInputBox />
                </View>
                <View>
                    <Text style={styles.InputLabel}>Password</Text>
                    <TextInputBox />
                </View>
                <View style={styles.FPLabelContainer} >
                    <Text style={styles.FPLabel} >Privacy Policy</Text>
                    <TouchableOpacity style={styles.signInButtonContainer} >
                        <Text style={styles.signInButtonText}  >
                            Sign Up
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
        fontSize: 14,
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
        color: "white"
    }
});

export default SignUp;