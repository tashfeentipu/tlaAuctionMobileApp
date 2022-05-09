import React from "react";
import { Image, StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps extends TextInputProps {
    title: string
    onPressEdit?: () => void
}

const EditIcon = require("../../Assets/Pen.png")

const EditableInput = (props: IProps) => {
    return <View style={styles.MainContainer} >
        <Text style={styles.Title}>{props.title}</Text>
        <View style={styles.InputContainer} >
            <TextInput
                style={styles.TextInput}
                placeholderTextColor={Colors.black}
                value={props.value}
                onChangeText={props.onChangeText}
            />
            <TouchableOpacity onPress={props.onPressEdit} >
                <Image source={EditIcon} />
            </TouchableOpacity>
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