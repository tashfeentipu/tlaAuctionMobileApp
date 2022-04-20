import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
interface IProps {

}

interface IState {

}

class Wallet extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Text>Wallet</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {}
});

export default Wallet;