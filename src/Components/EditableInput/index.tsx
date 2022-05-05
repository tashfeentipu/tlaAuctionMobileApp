import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { Fonts, Colors, Metrics } from "../../Theme";

interface IProps {
    title: string
}

const EditIcon = require("../../Assets/Pen.png")


const EditableInput = (props: IProps) => {
    return <View style={styles.MainContainer} >
        <Text style={styles.Title}>{props.title}</Text>
        <View style={styles.InputContainer} >
            <TextInput style={styles.TextInput} placeholderTextColor={Colors.black} />
            <Image source={EditIcon} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    MainContainer: {
        width: Metrics.WIDTH * 0.9
    },
    Title: {
        color: Colors.black,
        fontSize: Metrics.WIDTH * 0.04,
        fontFamily: Fonts.Exo2Regular,
        marginVertical: Metrics.HEIGHT * 0.02
    },
    InputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.skyBlue,
        borderRadius: Metrics.WIDTH * 0.1,
        paddingHorizontal: Metrics.WIDTH * 0.05
    },
    TextInput: {
        flex: 1
    }
});

export default EditableInput;