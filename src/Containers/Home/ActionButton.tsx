import React, { Component } from "react";
import { View, Text, StyleSheet, ImageSourcePropType, TouchableOpacity, Image } from "react-native";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {
    source: ImageSourcePropType,
    text: string
}

class ActionButton extends Component<IProps> {
    render() {
        return (
            <TouchableOpacity style={styles.ImageContainer}>
                <View style={{ flex: 0.5 }} >
                    <Text style={styles.BottomContainerTextStyle}>{this.props.text}</Text>
                </View>
                <View style={{ flex: 0.2, alignItems: "center" }} >
                    <Image source={this.props.source} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    ImageContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    BottomContainerTextStyle: {
        color: Colors.white,
        fontFamily: Fonts.Regular,
        marginLeft: Metrics.WIDTH * 0.015
    },
});

export default ActionButton;