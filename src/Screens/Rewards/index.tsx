import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Rewards_Icon } from "../../Assets";
import LinearGradientComponent from "../../Components/LinearGradient";
import PSP_Button from "../../Containers/Rewards/PSP_Button";
import { ThemeContext } from "../../Context/ThemeContext";
import { Colors, Fonts, Metrics } from "../../Theme";
import { Translate } from "../../Translations/localization";
import { IThemeContext } from "../../Types/Theme";

interface IProps {

}

interface IState {

}

class Rewards extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;

    render() {
        const { theme }: IThemeContext = this.context as IThemeContext
        return (
            <ScrollView contentContainerStyle={styles.MainContentContainer} style={styles.MainContainer} >
                <View style={styles.ImageContainer} >
                    <Image source={Rewards_Icon} style={styles.Rewards_Icon} />
                </View>
                <View>
                    <Text style={styles.Heading1}>{Translate("Rewards.Heading1")}</Text>
                    <Text style={styles.Heading2}>{Translate("Rewards.Heading2")}</Text>
                    <Text style={styles.Heading3}>0</Text>
                    <Text style={styles.Heading4}>{Translate("Rewards.Heading3")}</Text>
                </View>
                <View style={styles.TasksMainContainer} >
                    <View style={styles.TasksContainer1} >
                        <LinearGradientComponent
                            gradientStyle={styles.TasksContainer}>
                            <Text style={styles.TasksText}>{Translate("Rewards.Tasks")}</Text>
                        </LinearGradientComponent>
                        <LinearGradientComponent
                            gradientStyle={styles.ClaimContainer}>
                            <Text style={styles.TasksText}>{Translate("Rewards.Claim")}</Text>
                        </LinearGradientComponent>
                    </View>
                    <View style={styles.TasksContainer2} >
                        <PSP_Button ButtonText={Translate("Rewards.Reward2")} Text={Translate("Rewards.Text1")} />
                        <PSP_Button ButtonText={Translate("Rewards.Reward1")} Text={Translate("Rewards.Text2")} />
                        <PSP_Button ButtonText={Translate("Rewards.Reward2")} Text={Translate("Rewards.Text3")} />
                        <PSP_Button ButtonText={Translate("Rewards.Reward1")} Text={Translate("Rewards.Text4")} />
                        <PSP_Button ButtonText={Translate("Rewards.Reward1")} Text={Translate("Rewards.Text5")} />
                        <PSP_Button ButtonText={Translate("Rewards.Reward1")} Text={Translate("Rewards.Text6")} />
                        <PSP_Button ButtonText={Translate("Rewards.Reward2")} Text={Translate("Rewards.Text7")} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: Colors.white
    },
    MainContentContainer: {
        alignItems: "center"
    },
    ImageContainer: {
    },
    Heading1: {
        fontSize: Metrics.WIDTH * 0.05,
        marginTop: Metrics.HEIGHT * 0.02,
        color: Colors.black,
        fontFamily: Fonts.Bold,
        textAlign: 'center'
    },
    Heading2: {
        fontSize: Metrics.WIDTH * 0.035,
        marginBottom: Metrics.HEIGHT * 0.03,
        color: Colors.black,
        fontFamily: Fonts.Medium,
        textAlign: 'center'
    },
    Heading3: {
        fontSize: Metrics.WIDTH * 0.05,
        lineHeight: Metrics.HEIGHT * 0.04,
        fontFamily: Fonts.Bold,
        fontWeight: "bold",
        color: Colors.black,
        textAlign: 'center'
    },
    Heading4: {
        fontSize: Metrics.WIDTH * 0.05,
        fontFamily: Fonts.Bold,
        fontWeight: "bold",
        color: Colors.black,
        textAlign: 'center'
    },
    TasksContainer: {
        paddingVertical: Metrics.HEIGHT * 0.01,
        borderRadius: Metrics.WIDTH * 0.1,
        alignItems: "center",
        flex: 0.3
    },
    ClaimContainer: {
        alignItems: "center",
        paddingVertical: Metrics.HEIGHT * 0.01,
        borderRadius: Metrics.WIDTH * 0.1,
        flex: 0.25
    },
    TasksMainContainer: {
        alignItems: "center",
    },
    TasksContainer1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Metrics.HEIGHT * 0.02,
        width: Metrics.WIDTH * 0.95,
    },
    TasksContainer2: {
        alignItems: "center",
        width: Metrics.WIDTH,
    },
    TasksText: {
        color: Colors.white,
        fontFamily: Fonts.Medium
    },
    Rewards_Icon:{
        width: Metrics.WIDTH * 0.493,
        height: Metrics.WIDTH * 0.371
    }
});

export default Rewards;