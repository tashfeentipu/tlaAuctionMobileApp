import React, { Component } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import * as RouteNames from "../../Navigation/Routes";
import { Metrics } from "../../Theme";

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
            this.props.navigation.navigate(RouteNames.SIGN_IN)
        }, 4000)
    }

    render() {
        return (
            <SafeAreaView style={styles.MainContainer} >
                <Image source={require("../../Assets/Logo.png")} style={styles.LogoImage} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#2D0C33",
        height: Metrics.HEIGHT,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    LogoImage: { height: 125, width: 190 }
});

export default SplashScreen;