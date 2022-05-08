import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";
import SettingsBar from "../../Containers/Settings/SettingsBar";
import { Fonts, Metrics, Colors } from "../../Theme";

interface IProps {

}

interface IState {

}

class Settings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ScrollView style={styles.MainContainer} contentContainerStyle={styles.MainContainer2} >
                <View style={styles.ImageContainer1}  >
                    <View style={styles.ImageContainer2} >
                        <Image source={require("../../Assets/Profile.png")} style={{ width: Metrics.WIDTH * 0.25, height: Metrics.WIDTH * 0.25 }} />
                    </View>
                </View>
                <View style={styles.TitleTextContainer} >
                    <Text style={styles.TitleText} >Shayan Shahid</Text>
                    {/* <Image source={require("../../Assets/Pen.png")} /> */}
                </View>
                <View style={styles.SubContainer1} >
                    <SettingsBar source={require("../../Assets/Notifications.png")} title="Notifications" />
                    <SettingsBar source={require("../../Assets/Community.png")} title="Community" />
                    <SettingsBar source={require("../../Assets/Support.png")} title="Support" noBorder />
                </View>

                <View style={styles.LanguageTextContainer}>
                    <Text style={styles.LanguageText} >LANGUAGE & REGION</Text>
                </View>

                <View style={styles.SubContainer2} >
                    <SettingsBar source={require("../../Assets/Region.png")} title="Region" />
                    <SettingsBar source={require("../../Assets/Language.png")} title="Language" />
                    <SettingsBar source={require("../../Assets/AppVersion.png")} title="App Version" />
                    <SettingsBar source={require("../../Assets/SignOut.png")} title="Sign Out" noBorder />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: Colors.white,
    },
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
        fontFamily: Fonts.Exo2Regular,
        fontSize: Metrics.WIDTH * 0.04
    },
    LanguageTextContainer: {
        height: Metrics.HEIGHT * 0.08,
        width: Metrics.WIDTH * 0.9,
        justifyContent: "center"
    },
    LanguageText: {
        color: Colors.black,
        fontFamily: Fonts.Exo2Bold,
        fontSize: Metrics.WIDTH * 0.04
    },
    SubContainer1: {
        height: Metrics.HEIGHT * 0.27,
        width: Metrics.WIDTH,
        alignItems: 'center',
        justifyContent: "space-around",
        borderBottomColor: Colors.backgroundGrey,
        borderBottomWidth: Metrics.HEIGHT * 0.002,
        backgroundColor: Colors.skyBlue,
        borderTopColor: Colors.backgroundGrey,
        borderTopWidth: Metrics.HEIGHT * 0.002,
    },
    SubContainer2: {
        borderTopColor: Colors.backgroundGrey,
        borderTopWidth: Metrics.HEIGHT * 0.002,
        borderBottomColor: Colors.backgroundGrey,
        borderBottomWidth: Metrics.HEIGHT * 0.002,
        backgroundColor: Colors.skyBlue,
        marginBottom: Metrics.HEIGHT * 0.05,
        width: Metrics.WIDTH,
        alignItems: 'center',
    },
});

export default Settings;