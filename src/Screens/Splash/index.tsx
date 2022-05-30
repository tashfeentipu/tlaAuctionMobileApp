import React, { Component } from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";
import { Logo } from "../../Assets";
import { SIGN_IN } from "../../Navigation/Routes";
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
            this.props.navigation.navigate(SIGN_IN)
        }, 4000)
    }

    render() {
        return (
            <SafeAreaView style={styles.MainContainer} >
                <Image source={Logo} style={styles.LogoImage} />
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
    LogoImage: {
        height: Metrics.WIDTH * 0.54,
        width: Metrics.WIDTH * 0.6,
        resizeMode: "contain"
    }
});

export default SplashScreen;