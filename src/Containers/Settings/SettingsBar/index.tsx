import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity, Switch } from "react-native";
import { RightIcon } from "../../../Assets";
import { Fonts, Colors, Metrics } from "../../../Theme";

interface IProps {
    source: ImageSourcePropType
    title: string
    noBorder?: boolean
    content?: string
    onPress?: () => void
    rightArrow?: boolean
    switch?: boolean
    swichValue?: boolean
    switchToggle?: () => void
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
            <TouchableOpacity
                style={{
                    ...styles.MainContainer,
                    borderBottomWidth: !this.props.noBorder && Metrics.HEIGHT * 0.002 || 0,
                }}
                onPress={this.props.onPress}
            >
                <View style={{ flex: 0.15 }}  >
                    <Image source={this.props.source} style={{ width: Metrics.WIDTH * 0.056, height: Metrics.WIDTH * 0.056, }} />
                </View>
                <View style={{ flex: 0.55 }}>
                    <Text style={styles.TitleText}>{this.props.title}</Text>
                </View>
                <View style={{ flex: 0.2, alignItems: "center" }} >
                    {!!this.props.content && <Text style={styles.ContentText} >{this.props.content}</Text>}
                </View>
                <View style={{ flex: 0.1, alignItems: "center" }} >
                    {this.props.rightArrow && <Image source={RightIcon} />}
                    {this.props.switch && <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.props.swichValue ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={this.props.switchToggle}
                        value={this.props.swichValue}
                    />}
                </View>
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
        fontFamily: Fonts.Medium,
        fontSize: Metrics.WIDTH * 0.04
    },
    ContentText: {
        color: Colors.black,
        fontFamily: Fonts.Bold
    }
});

export default SettingsBar;