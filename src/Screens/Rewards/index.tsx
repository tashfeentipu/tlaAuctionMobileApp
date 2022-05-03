import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Button from "../../Components/Button";
import { Metrics, Colors } from "../../Theme";

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
                <View>
                    <Image source={require("../../Assets/Rewards_Icon.png")} />
                </View>
                <View>
                    <Text style={styles.Heading1}>COMPLETE THE TASK TO EARN</Text>
                    <Text style={styles.Heading2}>CLAIM YOUR 50 PSPAD REWARD COINS</Text>
                    <Text style={styles.Heading3}>0 PSPAD COINS</Text>
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

                    </View>
                    <View style={styles.TasksContainer2} >
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={[Colors.purple1, Colors.purple2]}
                            style={styles.ClaimContainer}>
                            <Text style={styles.TasksText}>CLAIM</Text>
                        </LinearGradient>
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
    Heading1: {
        fontSize: Metrics.WIDTH * 0.05,
        lineHeight: Metrics.WIDTH * 0.08,
        fontWeight: "bold",
        color: Colors.black,
        textAlign: 'center'
    },
    Heading2: {
        fontSize: Metrics.WIDTH * 0.05,
        lineHeight: Metrics.WIDTH * 0.08,
        color: Colors.black,
        textAlign: 'center'
    },
    Heading3: {
        fontSize: Metrics.WIDTH * 0.05,
        lineHeight: Metrics.WIDTH * 0.08,
        fontWeight: "bold",
        color: Colors.black,
        textAlign: 'center'
    },
    TasksContainer: {
        paddingHorizontal: Metrics.WIDTH * 0.1,
        paddingVertical: Metrics.HEIGHT * 0.01,
        borderRadius: Metrics.WIDTH * 0.1
    },
    ClaimContainer: {
        paddingHorizontal: Metrics.WIDTH * 0.1,
        paddingVertical: Metrics.HEIGHT * 0.01,
        borderRadius: Metrics.WIDTH * 0.1
    },
    TasksContainer1: {
        flex: 0.6,
        backgroundColor: "pink"
    },
    TasksContainer2: {
        flex: 0.4,
        backgroundColor: "purple"
    },
    TasksMainContainer: {
        flexDirection: "row",
    },
    TasksText: {
        color: Colors.white
    }
});

export default Rewards;