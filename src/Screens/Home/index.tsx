import React, { Component } from "react";
import {
    Image, ImageSourcePropType, ScrollView,
    StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import Swiper from 'react-native-swiper';
import {
    Academy, AirDrop, Buy, Deposit, HomeBannerImage, Logo,
    NewsUpdate, Packages, PlayToEarn, Stake, Withdraw, YieldFarming
} from "../../Assets";
import LinearGradientComponent from "../../Components/LinearGradient";
import { AIRDROP, NEWS_UPDATES, PACKAGES, PLAY_TO_EARN, VIDEOS, YIELD_FARMING } from "../../Navigation/Routes";
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

    statusButtons = (source: ImageSourcePropType, onPress?: () => void) => {
        return <TouchableOpacity style={styles.PackagesContainer} onPress={onPress} >
            <Image source={source} style={{
                width: Metrics.WIDTH * 0.22,
                height: Metrics.WIDTH * 0.2,
            }} />
        </TouchableOpacity >
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.MainContainer} >
                <Swiper autoplay style={styles.CarouselContainer}  >
                    <View style={styles.CarouselImageView} >
                        <Image source={HomeBannerImage} style={styles.BannerImage} />
                    </View>
                    <View style={styles.CarouselImageView} >
                        <Image source={HomeBannerImage} style={styles.BannerImage} />
                    </View>
                    <View style={styles.CarouselImageView} >
                        <Image source={HomeBannerImage} style={styles.BannerImage} />
                    </View>
                </Swiper>
                <LinearGradientComponent gradientStyle={styles.GradientContainer} >
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
                </LinearGradientComponent>
                <View style={styles.StatusButtonsContainer} >
                    <View style={styles.StatusButtonsSubContainer} >
                        {this.statusButtons(NewsUpdate, () => { this.props.navigation.navigate(NEWS_UPDATES) })}
                        {this.statusButtons(AirDrop, () => { this.props.navigation.navigate(AIRDROP) })}
                        {this.statusButtons(Packages, () => { this.props.navigation.navigate(PACKAGES) })}
                    </View>
                    <View style={styles.StatusButtonsSubContainer}>
                        {this.statusButtons(PlayToEarn, () => { this.props.navigation.navigate(PLAY_TO_EARN) })}
                        {this.statusButtons(Academy, () => { this.props.navigation.navigate(VIDEOS) })}
                        {this.statusButtons(YieldFarming, () => { this.props.navigation.navigate(YIELD_FARMING) })}
                    </View>
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
        width: Metrics.WIDTH * 0.85,
        height: 205
    },
    CarouselContainer: {
        marginVertical: Metrics.HEIGHT * 0.025,
        height: 205,
    },
    CarouselImageView: {
        alignItems: 'center',
        justifyContent: "center"
    },
    GradientContainer: {
        width: Metrics.WIDTH * 0.873,
        height: Metrics.HEIGHT * 0.325,
        marginBottom: Metrics.HEIGHT * 0.025,
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
        width: Metrics.WIDTH * 0.85,
    },
    StatusButtonsSubContainer: {
        marginVertical: Metrics.HEIGHT * 0.025,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    PackagesContainer: {
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