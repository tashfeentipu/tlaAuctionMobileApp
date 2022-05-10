import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import VisibleEye from "../../Assets/Visible_Eye.png";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps extends TextInputProps {
    inputLabel: string
}

const TextInputBox = (props: IProps) => {

    const [secureEntry, setSecureEntry] = useState<boolean>()

    useEffect(() => {
        setSecureEntry(props.secureTextEntry)
    }, [])

    return (
        <View style={styles.MainContainer} >
            <Text style={styles.InputLabel}>{props.inputLabel}</Text>
            <View style={styles.TextInputContainer}>
                <TextInput
                    style={styles.TextInputStyle}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    onBlur={props.onBlur}
                    secureTextEntry={secureEntry}
                />
                {props.secureTextEntry && <TouchableOpacity onPress={() => { setSecureEntry(prevState => !prevState) }} >
                    <Image source={VisibleEye} style={{ width: Metrics.WIDTH * 0.05, height: Metrics.WIDTH * 0.05 }} />
                </TouchableOpacity>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        marginVertical: Metrics.HEIGHT * 0.03
    },
    TextInputStyle: {
    },
    TextInputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: Colors.black,
        width: Metrics.WIDTH * 0.85,
        borderBottomWidth: Metrics.WIDTH * 0.001,
    },
    InputLabel: {
        fontSize: Metrics.WIDTH * 0.04,
        fontFamily: Fonts.Exo2Regular,
        color: Colors.black
    },
});

export default TextInputBox;