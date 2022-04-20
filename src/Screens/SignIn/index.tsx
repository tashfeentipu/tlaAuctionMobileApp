import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

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
                <View>
                    <Image source={require("../../Assets/Logo.png")} />
                </View>
                <Text>Sign In Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#05020F",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default SignIn;