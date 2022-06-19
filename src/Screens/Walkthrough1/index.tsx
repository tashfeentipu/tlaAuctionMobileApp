import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Metrics, Colors, Fonts } from "../../Theme";
import { WALKTHROUGH2, HOME_TAB_NAV_MAIN } from "../../Navigation/Routes";
import { Walkthrough1_Image } from "../../Assets";
import { IThemeContext } from "../../Types/Theme";
import { ThemeContext } from "../../Context/ThemeContext";
import { Translate } from "../../Translations/localization";

interface IProps {
    navigation: any
}

interface IState {

}

class Walkthrough1 extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;

    render() {
        const { theme }: IThemeContext = this.context as IThemeContext
        return (
            <View style={styles.MainContainer} >
                <Image source={Walkthrough1_Image} style={{ width: Metrics.WIDTH * 0.8, resizeMode: "contain" }} />
                <View style={styles.SubContainer1}>
                    <Text style={styles.Label1}>{Translate("WalkThrough.Heading1")}</Text>
                    <Text style={styles.Label2}>{Translate("WalkThrough.SubHeading1")}</Text>
                </View>
                <View style={styles.SubContainer2} >
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate(HOME_TAB_NAV_MAIN) }} >
                        <Text style={styles.SkipText} >
                            {Translate("WalkThrough.Skip")}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate(WALKTHROUGH2) }} >
                        <Text style={styles.NextText}>
                            {Translate("WalkThrough.Next")}
                        </Text>
                    </TouchableOpacity>
                </View>
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
    SkipText: {
        fontFamily: Fonts.Regular,
        color: Colors.grey
    },
    NextText: {
        fontFamily: Fonts.Regular,
        color: Colors.black
    }
});

export default Walkthrough1;