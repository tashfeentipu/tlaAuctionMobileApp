import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Loader from "../../Components/Loader";

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
                <Loader />
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