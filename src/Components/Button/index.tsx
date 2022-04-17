import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IProps {
    title: string
    onPress: Function
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
            <TouchableOpacity style={styles.MainContainer} onPress={() => this.props.onPress()} >
                <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        height: "50%",
        margin: "10%",
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