import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";
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
    MainContainer: {
        flex: 1,
        backgroundColor: Colors.white
    }
});

export default Wallet;