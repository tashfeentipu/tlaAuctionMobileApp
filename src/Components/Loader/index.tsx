import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Metrics } from "../../Theme";

interface IProps {

}


const Loader = (props: IProps) => {
    return <View style={styles.MainContainer} >
        <Text style={styles.Title}>Loader</Text>
    </View>
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        width: Metrics.WIDTH,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000AA"
    },
    Title: {

    },
});

export default Loader;