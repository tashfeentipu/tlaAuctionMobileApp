import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Metrics } from "../../Theme";
import { TBA } from "../../Assets";

interface IProps {

}

interface IState {

}

class AirDrops extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <TBA />
                <Text style={styles.MainText}>To Be Announced..</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems : "center"
    },
    MainText: {
        color: "black",
        fontSize: Metrics.WIDTH * 0.06
    }
});

export default AirDrops;