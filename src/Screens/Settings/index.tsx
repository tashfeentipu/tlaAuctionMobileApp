import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface IProps {

}

interface IState {

}

class Settings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Image source={require("../../Assets/SettingsIcon.png")} />
                <Text>
                    Shayan Shahid
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {}
});

export default Settings;