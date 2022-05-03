import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import WalletItem from "../../Containers/Wallet/WalletItem";
import { Metrics, Colors } from "../../Theme";

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
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.purple1, Colors.purple2]} style={styles.GradientContainer}>
                    <View style={styles.SubContainer1} >
                        <View style={styles.SubContainer2}>
                            <View style={styles.AddressContainer} >
                                <Text style={{ color: Colors.white, marginRight: Metrics.WIDTH * 0.02 }}>0x2f321n321ns113</Text>
                                <TouchableOpacity>
                                    <Image source={require("../../Assets/Copy_Icon.png")} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.BalanceContainer} >
                                <Text style={{ color: Colors.white }}>Your Current Balance</Text>
                                <Text style={{ color: Colors.white, fontSize: Metrics.WIDTH * 0.08 }}>$ 0.000</Text>
                            </View>
                        </View>
                        <View style={styles.SubContainer3}>
                            <Image source={require("../../Assets/Logo.png")} style={styles.LogoImageStyle} />
                        </View>
                    </View>
                    <View style={styles.SubContainer4}>
                        <TouchableOpacity style={styles.DepositContainer}>
                            <Image source={require("../../Assets/Deposit.png")} />
                            <Text style={styles.BottomContainerTextStyle}>Deposit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.WithdrawContainer} >
                            <Image source={require("../../Assets/Withdraw.png")} />
                            <Text style={styles.BottomContainerTextStyle}>Withdraw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BuyContainer} >
                            <Image source={require("../../Assets/Buy.png")} />
                            <Text style={styles.BottomContainerTextStyle}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.StakeContainer} >
                            <Image source={require("../../Assets/Stake.png")} />
                            <Text style={styles.BottomContainerTextStyle}>Stake</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <View style={styles.MarketContainer} >
                    <Text style={styles.MarketHeading} >
                        Market
                    </Text>
                    <WalletItem source={require("../../Assets/Bitcoin.png")} symbol={"BTC"} name={"Bitcoin"} balance={"$ 100"} percentage={"+2.75%"} />
                    <WalletItem source={require("../../Assets/Eth_Classic.png")} symbol={"ETH"} name={"Ehtereum"} balance={"$ 100"} percentage={"-2.78%"} />
                    <WalletItem source={require("../../Assets/Stellar.png")} symbol={"XLM"} name={"Stellar"} />
                    <WalletItem source={require("../../Assets/Dogecoin.png")} symbol={"DOGE"} name={"Dogecoin"} />
                    <WalletItem source={require("../../Assets/Litecoin.png")} symbol={"LTC"} name={"Litecoin"} />
                    <WalletItem source={require("../../Assets/Tether.png")} symbol={"USDT"} name={"Tether"} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainerStyle: {
        backgroundColor: Colors.white
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
        backgroundColor: Colors.skyBlue
    },
    LogoImageStyle: {
        width: Metrics.WIDTH * 0.4,
        height: Metrics.HEIGHT * 0.115,
        opacity: 0.63
    },
    MarketHeading: {
        fontSize: Metrics.WIDTH * 0.06,
        fontWeight: "bold"
    },
    SubContainer1: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    AddressContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    BalanceContainer: {
    },
    SubContainer2: {
        height: Metrics.HEIGHT * 0.15,
        justifyContent: "space-between"
    },
    SubContainer3: {
    },
    BottomContainerTextStyle: {
        color: Colors.white,
        marginLeft: Metrics.WIDTH * 0.015
    },
    SubContainer4: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Metrics.HEIGHT * 0.05,
    },
    DepositContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    WithdrawContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    BuyContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    StakeContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

});

export default Wallet;