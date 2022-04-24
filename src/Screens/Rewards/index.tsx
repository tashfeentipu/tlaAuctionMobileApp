import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../Components/Button";
import { Colors } from "../../Theme/Colors";

interface IProps {

}

interface IState {

}

class Rewards extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Button title={"Share With Link"} onPress={() => { }} />
                <Button title={"Facebook"} onPress={() => { }} />
                <Button title={"Telegram"} onPress={() => { }} />
                <Button title={"Twitter"} onPress={() => { }} />
                <Button title={"Instagram"} onPress={() => { }} />
                <Button title={"YouTube"} onPress={() => { }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundBlue
    }
});

export default Rewards;