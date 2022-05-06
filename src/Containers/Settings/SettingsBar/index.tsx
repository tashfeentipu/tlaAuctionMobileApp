import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { Fonts, Colors, Metrics } from "../../../Theme";

interface IProps {
    source: ImageSourcePropType
    title: string
    noBorder?: boolean
}

interface IState {

}

class SettingsBar extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity style={{ ...styles.MainContainer, borderBottomWidth: !this.props.noBorder && Metrics.HEIGHT * 0.002 || 0, }} >
                <View style={{ flex: 0.1 }}  >
                    <Image source={this.props.source} />
                </View>
                <View style={{ flex: 0.8 }}>
                    <Text style={styles.TitleText}>{this.props.title}</Text>
                </View>
                <Image source={require("../../../Assets/RightIcon.png")} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flexDirection: "row",
        height: Metrics.HEIGHT * 0.08,
        alignItems: "center",
        justifyContent: "space-between",
        width: Metrics.WIDTH * 0.9,
        borderBottomColor: Colors.backgroundGrey,
    },
    TitleText: {
        color: Colors.black,
        fontFamily: Fonts.Exo2SemiBold,
        fontSize: Metrics.WIDTH * 0.04
    }
});

export default SettingsBar;