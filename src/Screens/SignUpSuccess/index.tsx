import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Metrics, Colors, Fonts } from "../../Theme";
import { SIGN_IN } from "../../Navigation/Routes";
import { Tick } from "../../Assets";
import { IThemeContext } from "../../Types/Theme";
import { ThemeContext } from "../../Context/ThemeContext";
import { Translate } from "../../Translations/localization";

interface IProps {
    navigation: any
}

interface IState {

}

class SignUpSuccess extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;

    render() {
        const { theme }: IThemeContext = this.context as IThemeContext
        return (
            <View style={styles.MainContainer} >
                <View style={styles.TickContainer3} >
                    <View style={styles.TickContainer2} >
                        <View style={styles.TickContainer1} >
                            <Image source={Tick} />
                        </View>
                    </View>
                </View>
                <View style={styles.LabelsContainer} >
                    <Text style={styles.Label1}>{Translate("SignUpSuccess.Heading1")}</Text>
                    <Text style={styles.Label2}>{Translate("SignUpSuccess.Heading2")}</Text>
                </View>
                <TouchableOpacity style={styles.signInButtonContainer} onPress={() => { this.props.navigation.navigate(SIGN_IN) }} >
                    <Text style={styles.signInButtonText}>
                        {Translate("SignUpSuccess.Back")}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: "center",
        flex: 1
    },
    TickContainer1: {
        width: Metrics.WIDTH * 0.24,
        height: Metrics.WIDTH * 0.24,
        borderRadius: Metrics.WIDTH * 0.12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.indigo1
    },
    TickContainer2: {
        width: Metrics.WIDTH * 0.32,
        height: Metrics.WIDTH * 0.32,
        borderRadius: Metrics.WIDTH * 0.16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.indigo2
    },
    TickContainer3: {
        width: Metrics.WIDTH * 0.4,
        height: Metrics.WIDTH * 0.4,
        borderRadius: Metrics.WIDTH * 0.2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.indigo3
    },
    Label1: {
        color: Colors.indigo1,
        fontSize: Metrics.WIDTH * 0.07,
        fontFamily: Fonts.Regular
    },
    Label2: {
        color: Colors.black,
        fontFamily: Fonts.Regular,
        fontSize: Metrics.WIDTH * 0.04
    },
    signInButtonContainer: {
        backgroundColor: Colors.pink2,
        marginVertical: Metrics.HEIGHT * 0.1,
        paddingHorizontal: Metrics.WIDTH * 0.08,
        height: Metrics.HEIGHT * 0.06,
        borderRadius: Metrics.HEIGHT * 0.05,
        justifyContent: "center",
        alignItems: "center"
    },
    signInButtonText: {
        color: Colors.white,
        fontFamily: Fonts.Regular,
        fontSize: Metrics.WIDTH * 0.04
    },
    LabelsContainer: {
        height: Metrics.HEIGHT * 0.2,
        justifyContent: "space-around",
        alignItems: "center"
    }
});

export default SignUpSuccess;