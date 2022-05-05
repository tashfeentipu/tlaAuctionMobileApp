import React, { Component } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {
    source: ImageSourcePropType,
    symbol: string,
    name: string,
    balance?: string,
    percentage?: string
}

interface IState {

}

class WalletItem extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.SubContainer1}>
                    <Image source={this.props.source} />
                </View>
                <View style={styles.SubContainer2}>
                    <Text style={styles.symbolText}>
                        {this.props.symbol}
                    </Text>
                    <Text style={styles.nameText}>
                        {this.props.name}
                    </Text>
                </View>
                <View style={styles.SubContainer3}>
                    <Text style={styles.symbolText}>
                        {this.props.balance}
                    </Text>
                    <Text style={styles.percentageText}>
                        {this.props.percentage}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: Metrics.HEIGHT * 0.01,
        paddingVertical: Metrics.HEIGHT * 0.02,
        borderBottomColor: Colors.black,
        borderBottomWidth: Metrics.HEIGHT * 0.001
    },
    SubContainer1: {
    },
    SubContainer2: {
        flex: 0.8
    },
    SubContainer3: {
        alignItems: "flex-end"
    },
    symbolText: {
        fontSize: Metrics.HEIGHT * 0.025,
        fontFamily: Fonts.Exo2Regular,
        color: Colors.black,
    },
    nameText: {
        color: Colors.grey3,
        fontFamily: Fonts.Exo2Regular,
    },
    percentageText: {
        fontFamily: Fonts.Exo2Regular,
        fontSize: Metrics.HEIGHT * 0.018,
        color: Colors.green1
    },
});

export default WalletItem;