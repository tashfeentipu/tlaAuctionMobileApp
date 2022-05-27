import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Tick } from "../../Assets";
import { Colors, Fonts, Metrics } from "../../Theme";
import LinearGradientComponent from "../LinearGradient";

interface IProps {

}


const TickLinearGradient = () => {
    return <LinearGradientComponent gradientStyle={styles.TickContainer} >
        <Image source={Tick} style={{ width: Metrics.WIDTH * 0.06, height: Metrics.WIDTH * 0.06 }} />
    </LinearGradientComponent>
}

const GenderToggle = (props: IProps) => {

    const [isMale, setIsMale] = useState<boolean>(false)

    return <View style={styles.MainContainer} >
        <Text style={styles.Title}>Gender</Text>
        <View style={styles.GenderBox} >
            <TouchableOpacity style={styles.GenderContainer} onPress={() => { setIsMale(false) }} >
                {!isMale && TickLinearGradient() || <View style={{ ...styles.TickContainer, backgroundColor: Colors.white }} />}
                <Text style={styles.GenderText}>
                    Female
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.GenderContainer} onPress={() => { setIsMale(true) }} >
                {isMale && TickLinearGradient() || <View style={{ ...styles.TickContainer, backgroundColor: Colors.white }} />}
                <Text style={styles.GenderText}>
                    Male
                </Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    MainContainer: {
        width: Metrics.WIDTH * 0.9,
    },
    Title: {
        color: Colors.black,
        fontSize: Metrics.WIDTH * 0.04,
        fontFamily: Fonts.Regular,
        marginTop: Metrics.HEIGHT * 0.02
    },
    GenderContainer: {
        width: Metrics.WIDTH * 0.4,
        height: Metrics.HEIGHT * 0.06,
        alignItems: "center",
        borderRadius: Metrics.WIDTH * 0.1,
        paddingHorizontal: Metrics.WIDTH * 0.02,
        marginVertical: Metrics.HEIGHT * 0.02,
        flexDirection: "row",
        backgroundColor: Colors.skyBlue
    },
    TickContainer: {
        width: Metrics.WIDTH * 0.08,
        height: Metrics.WIDTH * 0.08,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Metrics.WIDTH * 0.04,
    },
    GenderBox: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    GenderText: {
        color: Colors.black,
        fontFamily: Fonts.Regular,
        marginLeft: Metrics.WIDTH * 0.03
    }
});

export default GenderToggle;