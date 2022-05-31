import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Metrics, Colors, Fonts } from "../../Theme";
import { HOME_TAB_NAV_MAIN } from "../../Navigation/Routes";
import { Walkthrough3_Image } from "../../Assets";
import { IThemeContext } from "../../Types/Theme";
import { ThemeContext } from "../../Context/ThemeContext";

interface IProps {
    navigation: any
}

interface IState {

}

class Walkthrough3 extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;

    render() {
        const { theme }: IThemeContext = this.context as IThemeContext
        return (
            <View style={styles.MainContainer} >
                <Image source={Walkthrough3_Image} style={styles.Image} />
                <View style={styles.SubContainer1}>
                    <Text style={styles.Label1}>PSPad Wallet</Text>
                    <Text style={styles.Label2}>PSPad will provide reliable wallet</Text>
                </View>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate(HOME_TAB_NAV_MAIN) }} style={styles.GotItButton} >
                    <Text style={styles.GotItText}>
                        GOT IT
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: Colors.white,
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    Image: {
        width: Metrics.WIDTH * 0.8,
        resizeMode: "contain"
    },
    SubContainer1: {
        height: Metrics.HEIGHT * 0.2,
        alignItems: "center",
        justifyContent: "space-around"
    },
    Label1: {
        fontSize: 20,
        fontFamily: Fonts.Regular,
        color: Colors.indigo1
    },
    Label2: {
        fontSize: 14,
        fontFamily: Fonts.Regular,
        color: Colors.black
    },
    SubContainer2: {
        flexDirection: "row",
        width: Metrics.WIDTH * 0.9,
        justifyContent: "space-between"
    },
    GotItButton: {
        backgroundColor: Colors.indigo1,
        width: Metrics.WIDTH * 0.4,
        height: Metrics.HEIGHT * 0.07,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Metrics.HEIGHT * 0.05
    },
    GotItText: {
        fontFamily: Fonts.Regular,
        color: Colors.white
    },

});

export default Walkthrough3;