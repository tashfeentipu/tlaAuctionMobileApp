import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Rewards_Icon } from "../../Assets";
import PSP_Button from "../../Containers/Rewards/PSP_Button";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {

}

interface IState {

}

class Rewards extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.MainContentContainer} style={styles.MainContainer} >
                {/* Tashfeen Is testing */}
                <View style={styles.ImageContainer} >
                    <Image source={Rewards_Icon} />
                </View>
                <View>
                    <Text style={styles.Heading1}>COMPLETE THE TASK TO EARN</Text>
                    <Text style={styles.Heading2}>CLAIM YOUR 50 PSPAD REWARD COINS</Text>
                    <Text style={styles.Heading3}>0 PSPad COINS</Text>
                </View>
                <View style={styles.TasksMainContainer} >
                    <View style={styles.TasksContainer1} >
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={[Colors.purple1, Colors.purple2]}
                            style={styles.TasksContainer}>
                            <Text style={styles.TasksText}>TASKS TO DO</Text>
                        </LinearGradient>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={[Colors.purple1, Colors.purple2]}
                            style={styles.ClaimContainer}>
                            <Text style={styles.TasksText}>CLAIM</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.TasksContainer2} >
                        <PSP_Button ButtonText="10" Text="Share the App with 5 Unique individuals by using your referrel link" />
                        <PSP_Button ButtonText="5" Text="Follow PSPad Facebook Page" />
                        <PSP_Button ButtonText="10" Text="Join our Telegram channel/group" />
                        <PSP_Button ButtonText="5" Text="Follow PSPad Twitter page " />
                        <PSP_Button ButtonText="5" Text="Follow PSPad Instagram page" />
                        <PSP_Button ButtonText="5" Text="Follow Polkadotlab YouTube channel" />
                        <PSP_Button ButtonText="10" Text="Join our Discord server" />
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
        borderTopLeftRadius: Metrics.WIDTH * 0.1,
        borderTopRightRadius: Metrics.WIDTH * 0.1,
        backgroundColor: Colors.skyBlue,
        alignItems: "center"
    },
    ImageContainer: {
        marginVertical: Metrics.HEIGHT * 0.02
    },
    Heading1: {
        fontSize: Metrics.WIDTH * 0.05,
        lineHeight: Metrics.HEIGHT * 0.08,
        color: Colors.black,
        fontFamily: Fonts.DubaiBold,
        textAlign: 'center'
    },
    Heading2: {
        fontSize: Metrics.WIDTH * 0.035,
        lineHeight: Metrics.HEIGHT * 0.08,
        color: Colors.black,
        fontFamily: Fonts.DubaiMedium,
        textAlign: 'center'
    },
    Heading3: {
        fontSize: Metrics.WIDTH * 0.05,
        lineHeight: Metrics.HEIGHT * 0.08,
        fontFamily: Fonts.DubaiBold,
        fontWeight: "bold",
        color: Colors.black,
        textAlign: 'center'
    },
    TasksContainer: {
        paddingVertical: Metrics.HEIGHT * 0.01,
        borderRadius: Metrics.WIDTH * 0.1,
        alignItems: "center",
        flex: 0.55
    },
    ClaimContainer: {
        alignItems: "center",
        paddingVertical: Metrics.HEIGHT * 0.01,
        borderRadius: Metrics.WIDTH * 0.1,
        flex: 0.35
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
        fontFamily: Fonts.DubaiMedium
    }
});

export default Rewards;