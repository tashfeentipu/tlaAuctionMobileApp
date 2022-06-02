import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {
    AppVersion, Community, Language, Notifications,
    ProfileImage, Region, SignOut, Support
} from "../../Assets";
import LanguagesModal from "../../Containers/Settings/LanguagesModal";
import RegionModal from "../../Containers/Settings/RegionModal";
import SettingsBar from "../../Containers/Settings/SettingsBar";
import { ThemeContext } from "../../Context/ThemeContext";
import { COMMUNITY, SUPPORT } from "../../Navigation/Routes";
import { Colors, Fonts, Metrics } from "../../Theme";
import { Translate } from "../../Translations/localization";
import { IThemeContext } from "../../Types/Theme";

interface IProps {
    navigation: any
}

interface IState {
    languageModalVisible: boolean
    regionModalVisible: boolean
    languageValue: string
    regionValue: string
    notificationsEnabled: boolean
    darkModeEnabled: boolean
}

class Settings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            languageModalVisible: false,
            languageValue: "",
            regionValue: "",
            regionModalVisible: false,
            darkModeEnabled: false,
            notificationsEnabled: false
        };
    }

    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;

    render() {

        const { theme, switchTheme }: IThemeContext = this.context as IThemeContext

        return (
            <ScrollView style={{ backgroundColor: theme.background }} contentContainerStyle={styles.MainContainer2} >
                <View style={styles.ImageContainer1}  >
                    <View style={styles.ImageContainer2} >
                        <Image source={ProfileImage} style={{ width: Metrics.WIDTH * 0.25, height: Metrics.WIDTH * 0.25 }} />
                    </View>
                </View>
                <View style={styles.TitleTextContainer} >
                    <Text style={styles.TitleText} >{Translate("Settings.User")}</Text>
                </View>
                <View style={styles.SubContainer1} >
                    <SettingsBar source={Notifications} title={Translate("Settings.Notifications")}
                        switch
                        swichValue={this.state.notificationsEnabled}
                        switchToggle={() => this.setState(prevState => ({
                            notificationsEnabled: !prevState.notificationsEnabled
                        }))} />
                    <SettingsBar source={Notifications} title={Translate("Settings.DarkMode")}
                        switch
                        swichValue={this.state.darkModeEnabled}
                        switchToggle={() => {
                            this.setState(prevState => ({ darkModeEnabled: !prevState.darkModeEnabled }))
                            switchTheme()
                        }} />
                    <SettingsBar
                        source={Community}
                        title={Translate("Settings.Community")}
                        rightArrow
                        onPress={() => { this.props.navigation.navigate(COMMUNITY) }}
                    />
                    <SettingsBar
                        source={Support}
                        title={Translate("Settings.Support")}
                        noBorder
                        rightArrow
                        onPress={() => { this.props.navigation.navigate(SUPPORT) }}
                    />
                </View>

                <View style={styles.LanguageTextContainer}>
                    <Text style={styles.LanguageText} >{Translate("Settings.LnR")}</Text>
                </View>

                <View style={styles.SubContainer2} >
                    <SettingsBar source={Region} rightArrow title={Translate("Settings.Region")} onPress={() => this.setState({ regionModalVisible: true })} content={this.state.regionValue} />
                    <SettingsBar source={Language} rightArrow title={Translate("Settings.Language")} onPress={() => this.setState({ languageModalVisible: true })} content={this.state.languageValue} />
                    <SettingsBar source={AppVersion} rightArrow title={Translate("Settings.AppVersion")} />
                    <SettingsBar source={SignOut} rightArrow title={Translate("Settings.SignOut")} noBorder />
                </View>
                <RegionModal
                    modalVisible={this.state.regionModalVisible}
                    setContent={(regionValue) => this.setState({ regionValue })}
                    setModalVisible={(modalState: boolean) => this.setState({ regionModalVisible: modalState })} />
                <LanguagesModal
                    modalVisible={this.state.languageModalVisible}
                    setContent={(languageValue) => this.setState({ languageValue })}
                    setModalVisible={(modalState: boolean) => this.setState({ languageModalVisible: modalState })} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer2: {
        alignItems: "center"
    },
    ImageContainer1: {
        backgroundColor: Colors.indigo1,
        width: Metrics.WIDTH * 0.42,
        height: Metrics.WIDTH * 0.42,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Metrics.HEIGHT * 0.02,
        borderRadius: Metrics.WIDTH * 0.21
    },
    ImageContainer2: {
        backgroundColor: Colors.skyBlue,
        width: Metrics.WIDTH * 0.4,
        height: Metrics.WIDTH * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Metrics.WIDTH * 0.2
    },
    TitleTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: Metrics.WIDTH * 0.35,
        height: Metrics.HEIGHT * 0.05,
        justifyContent: "center",
    },
    TitleText: {
        color: Colors.indigo1,
        fontFamily: Fonts.Regular,
        fontSize: Metrics.WIDTH * 0.04
    },
    LanguageTextContainer: {
        height: Metrics.HEIGHT * 0.08,
        width: Metrics.WIDTH * 0.9,
        justifyContent: "center"
    },
    LanguageText: {
        color: Colors.black,
        fontFamily: Fonts.Bold,
        fontSize: Metrics.WIDTH * 0.04
    },
    SubContainer1: {
        width: Metrics.WIDTH,
        alignItems: 'center',
        justifyContent: "space-around",
        borderBottomColor: Colors.backgroundGrey,
        borderBottomWidth: Metrics.HEIGHT * 0.002,
        borderTopColor: Colors.backgroundGrey,
        borderTopWidth: Metrics.HEIGHT * 0.002,
    },
    SubContainer2: {
        borderTopColor: Colors.backgroundGrey,
        borderTopWidth: Metrics.HEIGHT * 0.002,
        borderBottomColor: Colors.backgroundGrey,
        borderBottomWidth: Metrics.HEIGHT * 0.002,
        marginBottom: Metrics.HEIGHT * 0.05,
        width: Metrics.WIDTH,
        alignItems: 'center',
    },
});

export default Settings;