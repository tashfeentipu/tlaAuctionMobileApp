import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Tick } from "../../Assets";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {

}


const TickLinearGradient = () => {
    return <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.purple1, Colors.purple2]} style={styles.TickContainer} >
        <Image source={Tick} style={{ width: Metrics.WIDTH * 0.06, height: Metrics.WIDTH * 0.06 }} />
    </LinearGradient>
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
        fontFamily: Fonts.Exo2Regular,
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
        fontFamily: Fonts.Exo2Regular,
        marginLeft: Metrics.WIDTH * 0.03
    }
});

export default GenderToggle;