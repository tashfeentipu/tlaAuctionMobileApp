import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import TextInputBox from "../../Components/TextInput";
import LogonToggle from "../../Containers/LogonToggle";
import { Colors, Metrics } from "../../Theme";

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
                    <Image source={require("../../Assets/Logo2.png")} style={{ width: Metrics.WIDTH * 0.55, height: Metrics.HEIGHT * 0.185 }} />
                </View>
                <TextInputBox inputLabel="Name" />
                <TextInputBox inputLabel={"Email"} />
                <TextInputBox inputLabel={"Password"} />
                {/* <TextInputBox inputLabel={"Referrel"} /> */}
                <View style={styles.PPLabelContainer} >
                    <Text style={styles.PPLabel} >Privacy Policy</Text>
                    <TouchableOpacity style={styles.SignInButtonContainer} >
                        <Text style={styles.SignInButtonText}  >
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
        backgroundColor: Colors.white,
        height: Metrics.HEIGHT,
        alignItems: "center",
        justifyContent: "space-between"
    },
    PPLabelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Metrics.WIDTH * 0.9,
        height: Metrics.HEIGHT * 0.1,
    },
    PPLabel: {
        fontSize: 14,
        color: Colors.black
    },
    SignInButtonContainer: {
        height: Metrics.HEIGHT * 0.06,
        width: Metrics.WIDTH * 0.3,
        borderRadius: Metrics.WIDTH * 0.2,
        backgroundColor: Colors.pink2,
        alignItems: "center",
        justifyContent: 'center'
    },
    SignInButtonText: {
        color: Colors.white
    }
});

export default SignUp;