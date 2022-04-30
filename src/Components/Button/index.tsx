import React, { Component, CSSProperties } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Metrics } from "../../Theme";

interface IProps {
    title: string
    onPress: Function
    buttonContainerStyle?: any
}

interface IState {

}

class Button extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity style={{ ...styles.MainContainer, ...this.props.buttonContainerStyle }} onPress={() => this.props.onPress()} >
                <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        height: Metrics.HEIGHT * 0.5,
        margin: Metrics.HEIGHT * 0.1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
    },
    title: {
        color: "white",
        fontSize: 20
    }
});

export default Button;