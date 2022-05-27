import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {

}

interface IState {

}

class Support extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Text>Support</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {}
});

export default Support;