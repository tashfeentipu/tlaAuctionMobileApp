import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Metrics } from "../../Theme/Metrics";

interface IProps {
    title: string
}

const EditIcon = require("../../Assets/Pen.png")


const EditableInput = (props: IProps) => {
    return <View style={styles.MainContainer} >
        <Text style={styles.Title}>{props.title}</Text>
        <View style={styles.InputContainer} >
            <TextInput style={styles.TextInput} />
            <Image source={EditIcon} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    MainContainer: {
        width: Metrics.WIDTH * 0.9
    },
    Title: {
        color: Colors.white,
        fontSize: Metrics.WIDTH * 0.04,
        marginVertical: Metrics.HEIGHT * 0.02
    },
    InputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.backgroundGrey,
        borderRadius: Metrics.WIDTH * 0.1,
        paddingHorizontal: Metrics.WIDTH * 0.05
    },
    TextInput: {
        flex: 1
    }
});

export default EditableInput;