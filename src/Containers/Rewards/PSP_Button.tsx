import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Metrics } from "../../Theme";

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
            <View>
                <Text style={styles.TextStyle} >{this.props.Text}</Text>
                <TouchableOpacity style={styles.ButtonContainer} >
                    <Text style={styles.ButtonTextStyle} >{this.props.ButtonText} PSPad</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ButtonContainer: {
        borderWidth: Metrics.WIDTH * 0.008,
        borderRadius: Metrics.WIDTH * 0.06,
        // height: Metrics.HEIGHT * 0.05,s
        width: Metrics.WIDTH * 0.3,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.purple2,
        marginVertical: Metrics.HEIGHT * 0.01,
        // flex: 0.2
    },
    TextStyle: {
        // flex: 0.6s
    },
    ButtonTextStyle: {
        color: "black",
        fontSize: Metrics.WIDTH * 0.04
    }
});

export default PSP_Button;