import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface IProps {
    navigation: any
}

interface IState {

}

class SplashScreen extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("SignIn")
        }, 4000)
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Image source={require("../../Assets/Logo.png")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#2D0C33",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    LogoImage: { height: "140px", width: "210px" }
});

export default SplashScreen;