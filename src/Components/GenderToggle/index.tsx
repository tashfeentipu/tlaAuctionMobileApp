import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Metrics } from "../../Theme/Metrics";

interface IProps {

}

const TickIcon = require("../../Assets/Tick.png")

const GenderToggle = (props: IProps) => {
    return <View style={styles.MainContainer} >
        <Text style={styles.Title}>Gender</Text>
        <View style={styles.GenderBox} >
            <View style={styles.GenderContainer}  >
                <View style={styles.TickContainer} >
                    <Image source={TickIcon} style={{ width: Metrics.WIDTH * 0.06, height: Metrics.WIDTH * 0.06 }} />
                </View>
                <Text style={styles.GenderText} >
                    Female
                </Text>
            </View>
            <View style={styles.GenderContainer}  >
                <View style={styles.TickContainer} >
                    <Image source={TickIcon} style={{ width: Metrics.WIDTH * 0.06, height: Metrics.WIDTH * 0.06 }} />
                </View>
                <Text style={styles.GenderText}>
                    Male
                </Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    MainContainer: {
        width: Metrics.WIDTH * 0.9,
    },
    Title: {
        color: Colors.white,
        fontSize: Metrics.WIDTH * 0.04,
        marginTop: Metrics.HEIGHT * 0.02
    },
    GenderContainer: {
        width: Metrics.WIDTH * 0.4,
        height: Metrics.HEIGHT * 0.08,
        alignItems: "center",
        borderRadius: Metrics.WIDTH * 0.1,
        paddingHorizontal: Metrics.WIDTH * 0.02,
        marginVertical: Metrics.HEIGHT * 0.02,
        flexDirection: "row",
        backgroundColor: Colors.backgroundGrey
    },
    TickContainer: {
        width: Metrics.WIDTH * 0.08,
        height: Metrics.WIDTH * 0.08,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Metrics.WIDTH * 0.04,
        backgroundColor: Colors.indigo1
    },
    GenderBox: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    GenderText: {
        color: Colors.white,
        marginLeft: Metrics.WIDTH * 0.03
    }
});

export default GenderToggle;