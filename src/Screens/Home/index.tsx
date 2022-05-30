import React, { Component } from "react";
import {
    Image, ScrollView,
    StyleSheet, Text, View
} from "react-native";
import Swiper from 'react-native-swiper';
import {
    Academy, AirDrop, Buy, Deposit, Logo, NewsUpdate, Packages, 
    PlayToEarn, Slide1, Slide2, Slide3, Stake, Withdraw, YieldFarming
} from "../../Assets";
import LinearGradientComponent from "../../Components/LinearGradient";
import ActionButton from "../../Containers/Home/ActionButton";
import StatusButton from "../../Containers/Home/StatusButton";
import {
    AIRDROP, NEWS_UPDATES, PACKAGES,
    PLAY_TO_EARN, VIDEOS, YIELD_FARMING
} from "../../Navigation/Routes";
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

    render() {

        const SliderArray = [Slide1, Slide2, Slide3]

        return (
            <ScrollView contentContainerStyle={styles.MainContainer} >
                <Swiper autoplay style={styles.CarouselContainer} dotColor={Colors.grey} activeDotColor={Colors.white}>
                    {SliderArray.map((item, index) => <View style={styles.CarouselImageView} key={index} >
                        <Image source={item} style={styles.BannerImage} />
                    </View>)}
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
                            <ActionButton source={Deposit} text={"Deposit"} />
                            <ActionButton source={Withdraw} text={"Withdraw"} />
                            <ActionButton source={Buy} text={"Buy"} />
                            <ActionButton source={Stake} text={"Stake"} />
                        </View>
                    </View>
                    <View style={styles.GradientSubContainer2} >
                        <Image source={Logo} style={styles.Logo} />
                    </View>
                </LinearGradientComponent>
                <View style={styles.StatusButtonsContainer} >
                    <View style={styles.StatusButtonsSubContainer} >
                        <StatusButton source={NewsUpdate} onPress={() => { this.props.navigation.navigate(NEWS_UPDATES) }} />
                        <StatusButton source={AirDrop} onPress={() => { this.props.navigation.navigate(AIRDROP) }} />
                        <StatusButton source={Packages} onPress={() => { this.props.navigation.navigate(PACKAGES) }} />
                    </View>
                    <View style={styles.StatusButtonsSubContainer}>
                        <StatusButton source={PlayToEarn} onPress={() => { this.props.navigation.navigate(PLAY_TO_EARN) }} />
                        <StatusButton source={Academy} onPress={() => { this.props.navigation.navigate(VIDEOS) }} />
                        <StatusButton source={YieldFarming} onPress={() => { this.props.navigation.navigate(YIELD_FARMING) }} />
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
    Logo: {
        width: Metrics.WIDTH * 0.45,
        height: Metrics.WIDTH * 0.41,
        resizeMode: "contain"
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
    PackagesContainerText: {
        color: Colors.white,
        lineHeight: Metrics.HEIGHT * 0.05,
        fontFamily: Fonts.Regular
    }
});

export default Home;