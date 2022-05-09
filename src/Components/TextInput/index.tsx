import React from "react";
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputFocusEventData, TextInputProps, View } from "react-native";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps extends TextInputProps {
    inputLabel: string
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
                secureTextEntry={props.secureTextEntry}
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