import React, { Component } from "react";
import LottieView from 'lottie-react-native';
import { View, Text, StyleSheet } from "react-native";
import { Metrics } from "../../Theme";

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
                <LottieView source={require('../../Assets/Loader/Loader3.json')}
                    autoPlay
                    loop                  
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default YieldFarming;