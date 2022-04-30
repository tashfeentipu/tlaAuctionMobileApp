import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../Components/Button";
import { Colors } from "../../Theme/Colors";

interface IProps {

}

interface IState {

}

class Home extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <View style={{ flexDirection: "row" }} >
                    <Button title="10" onPress={() => { }} />
                    <Button title="25" onPress={() => { }} />
                </View>
                <View style={{ flexDirection: "row" }} >
                    <Button title="50" onPress={() => { }} />
                    <Button title="100" onPress={() => { }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: Colors.white
    },
    BuyButton: {}
});

export default Home;