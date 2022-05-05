import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Metrics } from "../../Theme/Metrics";
import { Colors } from "../../Theme/Colors";
import { Fonts } from "../../Theme";

interface IProps {
    inputLabel: string
}

interface IState {

}

class TextInputBox extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Text style={styles.InputLabel}>{this.props.inputLabel}</Text>
                <TextInput style={styles.TextInputStyle} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        marginVertical: Metrics.HEIGHT * 0.03
    },
    TextInputStyle: {
        borderBottomColor: Colors.black,
        borderBottomWidth: Metrics.WIDTH * 0.001,
        width: Metrics.WIDTH * 0.9,
    },

    InputLabel: {
        fontSize: Metrics.WIDTH * 0.04,
        fontFamily: Fonts.Exo2Regular,
        color: Colors.black
    },
});

export default TextInputBox;