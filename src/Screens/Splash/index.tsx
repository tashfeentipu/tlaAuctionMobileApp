import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as RouteNames from "../../Navigation/Routes";

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