import React from "react";
import { ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../Theme";

interface IProps {
    children: any
    gradientStyle: ViewStyle
}


const LinearGradientComponent = (props: IProps) => {
    return <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Colors.purple1, Colors.purple2]}
        style={props.gradientStyle}>
        {props.children}
    </LinearGradient>

}
export default LinearGradientComponent;