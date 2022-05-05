import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {
    ButtonText: string,
    Text: string
}

interface IState {

}

class PSP_Button extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <View style={styles.TextContainer} >
                    <Text style={styles.TextStyle} >{this.props.Text}</Text>
                </View>
                <TouchableOpacity style={styles.ButtonContainer} >
                    <Text style={styles.ButtonTextStyle} >{this.props.ButtonText} PSPad</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        width: Metrics.WIDTH * 0.95,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: Metrics.HEIGHT * 0.02
    },
    ButtonContainer: {
        borderWidth: Metrics.WIDTH * 0.008,
        borderRadius: Metrics.WIDTH * 0.06,
        height: Metrics.HEIGHT * 0.05,
        width: Metrics.WIDTH * 0.3,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.purple2,
        marginVertical: Metrics.HEIGHT * 0.01,
        flex: 0.3
    },
    TextStyle: {
        color: Colors.black,
        fontFamily: Fonts.DubaiMedium
    },
    TextContainer: {
        flex: 0.6
    },
    ButtonTextStyle: {
        fontFamily: Fonts.DubaiMedium,
        fontSize: Metrics.WIDTH * 0.04
    }
});

export default PSP_Button;