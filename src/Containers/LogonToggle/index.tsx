import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Metrics, Colors, Fonts } from "../../Theme";
import * as RouteNames from "../../Navigation/Routes";
import { ActiveIcon, DisabledIcon } from "../../Assets";
import { Translate } from "../../Translations/localization";
import { IThemeContext } from "../../Types/Theme";
import { ThemeContext } from "../../Context/ThemeContext";

interface IProps {
    toggle: boolean,
    navigation: any
}

interface IState {

}

class LogonToggle extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;
    render() {
        const { theme }: IThemeContext = this.context as IThemeContext

        return (
            <View style={styles.MainContainer} >
                <TouchableOpacity style={this.props.toggle && styles.Container1 || styles.Container2}
                    onPress={() => { this.props.navigation.navigate(RouteNames.SIGN_IN) }}  >
                    <Text style={{ ...styles.Text, color: this.props.toggle && theme.buttonPrimary || theme.textPrimary }} >{Translate("SignIn.SignIn")}</Text>
                    <Image source={this.props.toggle && ActiveIcon || DisabledIcon} />
                </TouchableOpacity>
                <View style={styles.Spacer} />
                <TouchableOpacity style={!this.props.toggle && styles.Container1 || styles.Container2}
                    onPress={() => { this.props.navigation.navigate(RouteNames.SIGN_UP) }} >
                    <Image source={!this.props.toggle && ActiveIcon || DisabledIcon} />
                    <Text style={{ ...styles.Text, color: !this.props.toggle && theme.buttonPrimary || theme.textPrimary }}>{Translate("SignUp.SignUp")}</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        marginVertical: Metrics.HEIGHT * 0.05,
        flexDirection: "row",
        alignItems: "center",
        width: Metrics.WIDTH * 0.9,
        justifyContent: "space-between"
    },
    Spacer: {
        width: Metrics.WIDTH * 0.4,
        borderBottomColor: Colors.grey,
        borderBottomWidth: Metrics.HEIGHT * 0.002
    },
    Container1: {
        flexDirection: "row",
        alignItems: "center",
        width: Metrics.WIDTH * 0.28,
        justifyContent: "space-between"
    },
    Container2: {
        flexDirection: "row",
        alignItems: "center",
        width: Metrics.WIDTH * 0.20,
        justifyContent: "space-between"
    },
    Text: {
        fontSize: Metrics.WIDTH * 0.04,
        fontFamily: Fonts.Regular,
    },
});

export default LogonToggle;