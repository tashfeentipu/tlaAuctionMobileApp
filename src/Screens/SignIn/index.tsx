import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextInputBox from "../../Components/TextInput";
import LogonToggle from "../../Containers/LogonToggle";
import { Colors } from "../../Theme/Colors";
import { Metrics } from "../../Theme/Metrics";
import * as RouteNames from "../../Navigation/Routes";

interface IProps {
    navigation: any
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
                <LogonToggle toggle={true} />
                <View >
                    <Image source={require("../../Assets/Logo2.png")} style={{ width: 210, height: 130 }} />
                </View>
                <View>
                    <TextInputBox inputLabel="Email" />
                    <TextInputBox inputLabel="Password" />
                </View>
                <View style={styles.FPLabelContainer} >
                    <Text style={styles.FPLabel} >Forgot Password?</Text>
                    <TouchableOpacity style={styles.signInButtonContainer} onPress={() => { this.props.navigation.navigate(RouteNames.WALKTHROUGH1) }} >
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
        backgroundColor: Colors.white,
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
        marginBottom: Metrics.HEIGHT * 0.1
    },
    FPLabel: {
        fontSize: 14,
        color: Colors.black
    },
    signInButtonContainer: {
        height: Metrics.HEIGHT * 0.06,
        width: Metrics.WIDTH * 0.3,
        borderRadius: Metrics.WIDTH * 0.2,
        backgroundColor: Colors.pink2,
        alignItems: "center",
        justifyContent: 'center'
    },
    signInButtonText: {
        color: Colors.white,
        fontSize: Metrics.WIDTH * 0.04
    }
});

export default SignIn;