import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../../Theme";

interface IProps {
    errorText: string | undefined
    enable?: boolean
}


const ErrorText = (props: IProps) => {
    return (props.enable && <View style={styles.MainContainer} >
        <Text style={styles.Title}>{props.errorText}</Text>
    </View>) || null
}

const styles = StyleSheet.create({
    MainContainer: {

    },
    Title: {
        color: Colors.red,
        fontFamily: Fonts.Medium
    },
});

export default ErrorText;