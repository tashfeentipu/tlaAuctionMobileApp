import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { Fonts, Colors, Metrics } from "../../Theme";

interface IProps {
    inputLabel: string
    value: string
    onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void
    onChangeText: (text: string) => void
}

interface IState {

}

const TextInputBox = (props: IProps) => {

    return (
        <View style={styles.MainContainer} >
            <Text style={styles.InputLabel}>{props.inputLabel}</Text>
            <TextInput
                style={styles.TextInputStyle}
                value={props.value}
                onChangeText={props.onChangeText}
                onBlur={props.onBlur}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        marginVertical: Metrics.HEIGHT * 0.03
    },
    TextInputStyle: {
        borderBottomColor: Colors.black,
        borderBottomWidth: Metrics.WIDTH * 0.001,
        width: Metrics.WIDTH * 0.9,
    },

    InputLabel: {
        fontSize: Metrics.WIDTH * 0.04,
        fontFamily: Fonts.Exo2Regular,
        color: Colors.black
    },
});

export default TextInputBox;