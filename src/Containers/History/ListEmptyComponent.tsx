import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { No_Transactions } from "../../Assets";
import { Colors, Metrics } from "../../Theme";

interface IProps {

}

interface IState {

}

class ListEmptyComponent extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Image source={No_Transactions} style={{ width: Metrics.WIDTH * 0.351, height: Metrics.WIDTH * 0.295 }} />
                <Text style={{color: Colors.black}}>No Transactions</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        height: Metrics.HEIGHT * 0.5,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default ListEmptyComponent;