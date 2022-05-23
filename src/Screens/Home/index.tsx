import React, { Component } from "react";
import {
    Image, ImageBackground, ImageSourcePropType, ScrollView,
    StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
    AddonFeaturesBack, AirDrop, Buy, Deposit, HomeBannerImage,
    Logo, NewsUpdate, Packages, Stake, Withdraw
} from "../../Assets";
import { VIDEOS } from "../../Navigation/Routes";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {
    navigation: any
}

interface IState {

}

class Home extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    actionButtons = (source: ImageSourcePropType, text: string) => {
        return <TouchableOpacity style={styles.ImageContainer}>
            <View style={{ flex: 0.5 }} >
                <Text style={styles.BottomContainerTextStyle}>{text}</Text>
            </View>
            <View style={{ flex: 0.2, alignItems: "center" }} >
                <Image source={source} />
            </View>
        </TouchableOpacity>
    }

    statusButtons = (source: ImageSourcePropType, text: string, onPress?: () => void) => {
        return <ImageBackground source={AddonFeaturesBack} style={{ height: Metrics.WIDTH * 0.35, width: Metrics.WIDTH * 0.3 }} >
            <TouchableOpacity style={styles.PackagesContainer} onPress={onPress} >
                <Image source={source} />
                <Text style={styles.PackagesContainerText}>{text}</Text>
            </TouchableOpacity >
        </ImageBackground>
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.MainContainer} >
                <View style={styles.BannerImageContainer} >
                    <Image source={HomeBannerImage} style={styles.BannerImage} />
                </View>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.purple1, Colors.purple2]} style={styles.GradientContainer}>
                    <View style={styles.GradientSubContainer1}>
                        <View>
                            <Text style={styles.PSPHeading1} >
                                PSPad
                            </Text>
                            <Text style={styles.PSPHeading2} >
                                Total Balance : 0.00
                            </Text>
                        </View>
                        <View style={styles.HomeImagesContainer}>
                            {this.actionButtons(Deposit, "Deposit")}
                            {this.actionButtons(Withdraw, "Withdraw")}
                            {this.actionButtons(Buy, "Buy")}
                            {this.actionButtons(Stake, "Stake")}
                        </View>
                    </View>
                    <View style={styles.GradientSubContainer2} >
                        <Image source={Logo} style={{ width: Metrics.WIDTH * 0.356, height: Metrics.WIDTH * 0.2 }} />
                    </View>
                </LinearGradient>
                <View style={styles.StatusButtonsContainer} >
                    {this.statusButtons(NewsUpdate, "News Update", () => { this.props.navigation.navigate(VIDEOS) })}
                    {this.statusButtons(AirDrop, "Air Drop")}
                    {this.statusButtons(Packages, "Packages")}
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    BannerImage: {
        marginTop: Metrics.HEIGHT * 0.01,
        width: Metrics.WIDTH * 0.85,
        height: 205
    },
    BannerImageContainer: {
        marginVertical: Metrics.HEIGHT * 0.025
    },
    GradientContainer: {
        width: Metrics.WIDTH * 0.873,
        height: Metrics.HEIGHT * 0.325,
        marginVertical: Metrics.HEIGHT * 0.025,
        borderRadius: Metrics.WIDTH * 0.1,
        padding: Metrics.WIDTH * 0.05,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    GradientSubContainer1: {
        flex: 1,
        justifyContent: "space-between"
    },
    GradientSubContainer2: {
        opacity: 0.6,
        justifyContent: "center"
    },
    HomeImagesContainer: {
        flex: 0.8,
        justifyContent: "space-between",
    },
    ImageContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    BottomContainerTextStyle: {
        color: Colors.white,
        fontFamily: Fonts.Regular,
        marginLeft: Metrics.WIDTH * 0.015
    },
    PSPHeading1: {
        color: Colors.white,
        fontFamily: Fonts.Bold,
        fontSize: Metrics.WIDTH * 0.05
    },
    PSPHeading2: {
        color: Colors.white,
        fontFamily: Fonts.Regular,
        fontSize: Metrics.WIDTH * 0.04
    },
    StatusButtonsContainer: {
        flexDirection: "row",
        marginVertical: Metrics.HEIGHT * 0.025,
        width: Metrics.WIDTH * 0.95,
        justifyContent: "space-between",
    },
    PackagesContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    PackagesContainerText: {
        color: Colors.white,
        lineHeight: Metrics.HEIGHT * 0.05,
        fontFamily: Fonts.Regular
    }
});

export default Home;