import React, { Component } from "react";
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity } from "react-native";
import { Metrics } from "../../Theme";

interface IProps {
    source: ImageSourcePropType,
    onPress?: () => void
}

class StatusButton extends Component<IProps> {
    render() {
        return (
            <TouchableOpacity style={styles.PackagesContainer} onPress={this.props.onPress} >
                <Image source={this.props.source} style={{
                    width: Metrics.WIDTH * 0.22,
                    height: Metrics.WIDTH * 0.2,
                }} />
            </TouchableOpacity >
        );
    }
}

const styles = StyleSheet.create({
    PackagesContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
});

export default StatusButton;