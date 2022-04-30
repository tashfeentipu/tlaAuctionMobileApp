import React, { Component } from "react";
import { Image, StyleSheet, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Button from "../../Components/Button";
import { Metrics } from "../../Theme";
import { Colors } from "../../Theme/Colors";

const HomeBannerImage = require("../../Assets/HomeBanner.png")
const AddonFeaturesBack = require("../../Assets/AddonFeaturesBack.png")
const NewsUpdate = require("../../Assets/NewsUpdate.png")
const AirDrop = require("../../Assets/AirDrop.png")
const Packages = require("../../Assets/Packages.png")

interface IProps {

}

interface IState {

}

class Home extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.MainContainer} >
                <Image source={HomeBannerImage} style={styles.BannerImage} />
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.purple1, Colors.purple2]} style={styles.GradientContainer}>
                    <Text>
                    </Text>
                </LinearGradient>
                <View>
                    <TouchableOpacity style={styles.PackagesContainer} >
                        <Image source={AddonFeaturesBack} />

                        <Image source={NewsUpdate} />
                        <Text></Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        alignItems: 'center',
        // justifyContent: "space-around",
        backgroundColor: Colors.white
    },
    BannerImage: {
        marginTop: Metrics.HEIGHT * 0.01,
        width: Metrics.WIDTH * 0.85,
        height: 205
    },
    GradientContainer: {
        width: Metrics.WIDTH * 0.873,
        height: Metrics.HEIGHT * 0.325,
        borderRadius: Metrics.WIDTH * 0.1,
        paddingTop: Metrics.WIDTH * 0.1
    },
    PackagesContainer: {}
});

export default Home;