import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

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
            <TextInput style={styles.MainContainer}  />
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        borderBottomColor: "#5D5C71"
    }
});

export default TextInputBox;