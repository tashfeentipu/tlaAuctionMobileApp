import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {

}

interface IState {

}

class Packages extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Text>Packages</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {}
});

export default Packages;