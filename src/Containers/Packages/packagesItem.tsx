import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Package1, Package1_a } from "../../Assets";
import { Metrics } from "../../Theme";

interface IProps {

}

interface IState {

}

class PackagesItem extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                {/* <View style={{position: "absolute", backgroundColor: "pink"}} > */}
                <Package1 height={Metrics.HEIGHT * 0.7} />
                    <Package1_a style={styles.Ellipse} />
                {/* </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "pink",
        position: "absolute",
        // width: Metrics.WIDTH * 0.9,
        marginTop: Metrics.HEIGHT * 0.02
    },
    SubContainer: {

    },
    Ellipse: {}
});

export default PackagesItem;