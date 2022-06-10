import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";
import { Metrics } from "../../Theme";

interface IProps {
    source: React.FC<SvgProps>,
    onPress?: () => void
}

class StatusButton extends Component<IProps> {
    render() {
        return (
            <TouchableOpacity style={styles.PackagesContainer} onPress={this.props.onPress} >
                <this.props.source style={{
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