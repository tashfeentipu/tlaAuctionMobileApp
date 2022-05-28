import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Metrics } from "../../Theme";

interface IProps {
    user: boolean
    text: string
    time: string
}

interface IState {

}

class ChatItem extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ ...styles.MainContainer, alignItems: this.props.user && "flex-end" || "flex-start" }}>
                <View style={styles.SubContainer}>
                    <Text style={{ color: "white" }}>{this.props.text}</Text>
                    <Text style={{ alignSelf: "flex-end" }} >{this.props.time}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        width: Metrics.WIDTH * 0.95,
        marginVertical: Metrics.HEIGHT * 0.02
    },
    SubContainer: {
        width: Metrics.WIDTH * 0.6,
        backgroundColor: Colors.skyBlue,
        padding: Metrics.WIDTH * 0.02,
        borderRadius: Metrics.WIDTH * 0.03
    }
});

export default ChatItem;