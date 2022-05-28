import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {

}

interface IState {

}

class History extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Text>History</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {}
});

export default History;