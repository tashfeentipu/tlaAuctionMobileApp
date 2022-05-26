import React, { Component } from "react";
import LottieView from 'lottie-react-native';
import { View, Text, StyleSheet } from "react-native";

interface IProps {

}

interface IState {

}

class YieldFarming extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <LottieView source={require('../../Assets/Loader/Loader2.json')} autoPlay loop />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {}
});

export default YieldFarming;