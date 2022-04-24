import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";

interface IProps {

}

interface IState {

}

class Profile extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Text>React Native Class Component</Text>
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

export default Profile;