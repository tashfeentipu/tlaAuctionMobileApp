import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Metrics } from "../../Theme";
import { Colors } from "../../Theme/Colors";
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

                </LinearGradient>
                <View style={styles.MarketContainer} >
                    <Text style={styles.MarketHeading} >
                        Market
                    </Text>

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
        width: Metrics.WIDTH * 0.873,
        height: Metrics.HEIGHT * 0.325,
        borderRadius: Metrics.WIDTH * 0.1,
        paddingTop: Metrics.WIDTH * 0.1
    },
    MarketContainer: {
        marginTop: Metrics.HEIGHT * 0.05,
        borderTopLeftRadius: Metrics.HEIGHT * 0.05,
        borderTopRightRadius: Metrics.HEIGHT * 0.05,
        width: Metrics.WIDTH,
        height: Metrics.HEIGHT * 0.4,
        backgroundColor: Colors.skyBlue
    },
    MarketHeading: {
        fontSize: Metrics.WIDTH * 0.08
    }
});

export default Wallet;