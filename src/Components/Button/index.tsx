import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Metrics } from "../../Theme";

interface IProps {
    title: string
    onPress: Function
    buttonContainerStyle?: any
}

const { colors: Colors } = useTheme()

const Button = (props: IProps) => {
    return (
        <TouchableOpacity style={{ ...styles.MainContainer, ...props.buttonContainerStyle }} onPress={() => props.onPress()} >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        height: Metrics.HEIGHT * 0.5,
        margin: Metrics.HEIGHT * 0.1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
    },
    title: {
        color: Colors.text,
        fontSize: 20
    }
});

export default Button;