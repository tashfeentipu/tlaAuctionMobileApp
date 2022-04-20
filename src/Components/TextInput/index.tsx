import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Metrics } from "../../Theme/Metrics";

interface IProps {

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
            <TextInput style={styles.MainContainer} />
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        borderBottomColor: "white",
        borderBottomWidth: Metrics.WIDTH * 0.01,
        width: Metrics.WIDTH * 0.9
    },
});

export default TextInputBox;