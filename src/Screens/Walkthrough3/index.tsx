import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {

}

interface IState {

}

class Walkthrough3 extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Text>Walkthorough 3</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#05020F",
        flex: 1
    }
});

export default Walkthrough3;