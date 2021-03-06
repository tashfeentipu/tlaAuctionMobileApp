import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity, Switch } from "react-native";
import { RightIcon } from "../../../Assets";
import { ThemeContext } from "../../../Context/ThemeContext";
import { Fonts, Colors, Metrics } from "../../../Theme";
import { IThemeContext } from "../../../Types/Theme";

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
    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;
    render() {
        const { theme, switchTheme }: IThemeContext = this.context as IThemeContext

        return (
            <TouchableOpacity
                style={{
                    ...styles.MainContainer,
                    borderBottomWidth: !this.props.noBorder && Metrics.HEIGHT * 0.002 || 0,
                }}
                onPress={this.props.onPress}
            >
                <View style={{ flex: 0.15 }}  >
                    <Image source={this.props.source} style={{ width: Metrics.WIDTH * 0.056, height: Metrics.WIDTH * 0.056, resizeMode: "contain" }} />
                </View>
                <View style={{ flex: 0.55 }}>
                    <Text style={{ ...styles.TitleText, color: theme.text }}>{this.props.title}</Text>
                </View>
                <View style={{ flex: 0.2, alignItems: "center" }} >
                    {!!this.props.content && <Text style={{ ...styles.ContentText, color: theme.text }} >{this.props.content}</Text>}
                </View>
                <View style={{ flex: 0.1, alignItems: "center" }} >
                    {this.props.rightArrow && <Image source={RightIcon} />}
                    {this.props.switch && <Switch
                        trackColor={{ false: Colors.black, true: Colors.pink2 }}
                        thumbColor={"#f4f3f4"}
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
        fontFamily: Fonts.Medium,
        fontSize: Metrics.WIDTH * 0.04
    },
    ContentText: {
        fontFamily: Fonts.Bold
    }
});

export default SettingsBar;