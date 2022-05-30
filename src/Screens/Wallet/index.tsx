import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
    Bitcoin, BUSD, Buy, Copy_Icon, Deposit, Eth_Classic,
    Logo, Matic, PSPad, Stake, Tether, Withdraw
} from "../../Assets";
import LinearGradientComponent from "../../Components/LinearGradient";
import WalletItem from "../../Containers/Wallet/WalletItem";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {

}

interface IState {

}

class Wallet extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ScrollView style={styles.MainContainerStyle} contentContainerStyle={styles.MainContainer} >
                <LinearGradientComponent gradientStyle={styles.GradientContainer}>
                    <View style={styles.SubContainer1} >
                        <View style={styles.SubContainer2}>
                            <View style={styles.AddressContainer} >
                                <Text style={styles.AddressText}>0x2f321n321ns113</Text>
                                <TouchableOpacity>
                                    <Image source={Copy_Icon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.BalanceContainer} >
                                <Text style={styles.BalanceText1}>Your Current Balance</Text>
                                <Text style={styles.BalanceText2}>$ 0.000</Text>
                            </View>
                        </View>
                        <View style={styles.SubContainer3}>
                            <Image source={Logo} style={styles.LogoImageStyle} />
                        </View>
                    </View>
                    <View style={styles.SubContainer4}>
                        <TouchableOpacity style={styles.ImageContainer}>
                            <Image source={Deposit} />
                            <Text style={styles.BottomContainerTextStyle}>Deposit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImageContainer}>
                            <Image source={Withdraw} />
                            <Text style={styles.BottomContainerTextStyle}>Withdraw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImageContainer}>
                            <Image source={Buy} />
                            <Text style={styles.BottomContainerTextStyle}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImageContainer}>
                            <Image source={Stake} />
                            <Text style={styles.BottomContainerTextStyle}>Stake</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradientComponent>
                <View style={styles.MarketContainer} >
                    <Text style={styles.MarketHeading} >
                        Market
                    </Text>
                    <WalletItem source={Bitcoin} symbol={"BTC"} name={"Bitcoin"} balance={"$ 100"} percentage={"+2.75%"} />
                    <WalletItem source={Eth_Classic} symbol={"ETH"} name={"Ehtereum"} balance={"$ 100"} percentage={"-2.78%"} />
                    <WalletItem source={PSPad} symbol={"PSP"} name={"Polkadot"} />
                    <WalletItem source={Tether} symbol={"USDT"} name={"Tether"} />
                    <WalletItem source={BUSD} symbol={"BUSD"} name={"Binance USD"} />
                    <WalletItem source={Matic} symbol={"MATIC"} name={"Polygon"} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainerStyle: {
        backgroundColor: Colors.white,
        height: Metrics.HEIGHT,
        flex: 1
    },
    MainContainer: {
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    GradientContainer: {
        width: Metrics.WIDTH * 0.9,
        borderRadius: Metrics.WIDTH * 0.1,
        paddingTop: Metrics.WIDTH * 0.1,
        paddingHorizontal: Metrics.WIDTH * 0.03,
    },
    MarketContainer: {
        marginTop: Metrics.HEIGHT * 0.05,
        paddingTop: Metrics.HEIGHT * 0.04,
        paddingHorizontal: Metrics.WIDTH * 0.05,
        borderTopLeftRadius: Metrics.HEIGHT * 0.05,
        borderTopRightRadius: Metrics.HEIGHT * 0.05,
        width: Metrics.WIDTH,
        backgroundColor: Colors.white
    },
    LogoImageStyle: {
        width: Metrics.WIDTH * 0.37,
        resizeMode: "contain",
        opacity: 0.63
    },
    MarketHeading: {
        fontSize: Metrics.WIDTH * 0.06,
        fontFamily: Fonts.Bold,
    },
    SubContainer1: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    AddressContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    AddressText: {
        color: Colors.white,
        fontFamily: Fonts.Regular,
        marginRight: Metrics.WIDTH * 0.02
    },
    BalanceContainer: {
    },
    BalanceText1: {
        color: Colors.white,
        fontFamily: Fonts.Regular
    },
    BalanceText2: {
        color: Colors.white,
        fontFamily: Fonts.Regular,
        fontSize: Metrics.WIDTH * 0.08
    },
    SubContainer2: {
        height: Metrics.HEIGHT * 0.15,
        justifyContent: "space-between"
    },
    SubContainer3: {
    },
    BottomContainerTextStyle: {
        fontFamily: Fonts.Regular,
        color: Colors.white,
        marginLeft: Metrics.WIDTH * 0.015
    },
    SubContainer4: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Metrics.HEIGHT * 0.05,
    },
    ImageContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

});

export default Wallet;