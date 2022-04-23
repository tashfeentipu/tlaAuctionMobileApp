import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import TextInputBox from "../../Components/TextInput";
import LogonToggle from "../../Containers/LogonToggle";
import { Colors } from "../../Theme/Colors";
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
            <ScrollView contentContainerStyle={styles.MainContainer} >
                <LogonToggle toggle={false} />
                <View>
                    <Image source={require("../../Assets/Logo.png")} style={{ width: Metrics.WIDTH * 0.55, height: Metrics.HEIGHT * 0.185 }} />
                </View>
                <TextInputBox inputLabel="Name" />
                <TextInputBox inputLabel={"Email"} />
                <TextInputBox inputLabel={"Password"} />
                {/* <TextInputBox inputLabel={"Referrel"} /> */}
                <View style={styles.FPLabelContainer} >
                    <Text style={styles.FPLabel} >Privacy Policy</Text>
                    <TouchableOpacity style={styles.signInButtonContainer} >
                        <Text style={styles.signInButtonText}  >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: Colors.backgroundBlue,
        // flexGrow: 1,
        height: Metrics.HEIGHT,
        alignItems: "center",
        justifyContent: "space-between"
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