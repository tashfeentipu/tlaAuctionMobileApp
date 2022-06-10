import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
    Bitcoin, BUSD, Buy, Copy_Icon, Deposit, Eth_Classic,
    Logo, Matic, PSPad, Stake, Tether, Withdraw
} from "../../Assets";
import LinearGradientComponent from "../../Components/LinearGradient";
import WalletItem from "../../Containers/Wallet/WalletItem";
import { ThemeContext } from "../../Context/ThemeContext";
import { Colors, Fonts, Metrics } from "../../Theme";
import { Translate } from "../../Translations/localization";
import { IThemeContext } from "../../Types/Theme";

interface IProps {

}

interface IState {

}

class Wallet extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;

    render() {
        const { theme }: IThemeContext = this.context as IThemeContext
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
                                <Text style={styles.BalanceText1}>{Translate("Wallet.CurrentBalance")}</Text>
                                <Text style={styles.BalanceText2}>$ 0.000</Text>
                            </View>
                        </View>
                        <View style={styles.SubContainer3}>
                            <Logo width={Metrics.WIDTH * 0.37} style={styles.LogoImageStyle} />
                        </View>
                    </View>
                    <View style={styles.SubContainer4}>
                        <TouchableOpacity style={styles.ImageContainer}>
                            <Deposit />
                            <Text style={styles.BottomContainerTextStyle}>{Translate("Common.Deposit")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImageContainer}>
                            <Withdraw />
                            <Text style={styles.BottomContainerTextStyle}>{Translate("Common.Withdraw")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImageContainer}>
                            <Buy />
                            <Text style={styles.BottomContainerTextStyle}>{Translate("Common.Buy")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImageContainer}>
                            <Stake />
                            <Text style={styles.BottomContainerTextStyle}>{Translate("Common.Stake")}</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradientComponent>
                <View style={styles.MarketContainer} >
                    <Text style={styles.MarketHeading} >
                        {Translate("Wallet.Market")}
                    </Text>
                    <WalletItem source={Bitcoin} symbol={Translate("Wallet.BTC")} name={Translate("Wallet.Bitcoin")} balance={"$ 100"} percentage={"+2.75%"} />
                    <WalletItem source={Eth_Classic} symbol={Translate("Wallet.ETH")} name={Translate("Wallet.Ehtereum")} balance={"$ 100"} percentage={"-2.78%"} />
                    <WalletItem source={PSPad} symbol={Translate("Wallet.PSP")} name={Translate("Wallet.Polkadot")} />
                    <WalletItem source={Tether} symbol={Translate("Wallet.USDT")} name={Translate("Wallet.Tether")} />
                    <WalletItem source={BUSD} symbol={Translate("Wallet.BUSD")} name={Translate("Wallet.Binance")} />
                    <WalletItem source={Matic} symbol={Translate("Wallet.MATIC")} name={Translate("Wallet.Polygon")} />
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