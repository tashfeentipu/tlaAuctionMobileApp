import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Referrels_1, Referrels_2, Referrels_3, Referrels_4, Share } from "../../Assets";
import LinearGradientComponent from "../../Components/LinearGradient";
import { ThemeContext } from "../../Context/ThemeContext";
import { Colors, Fonts, Metrics } from "../../Theme";
import { Translate } from "../../Translations/localization";
import { IThemeContext } from "../../Types/Theme";

interface IProps {

}

interface IState {

}

class Referrels extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;
    render() {
        const { theme }: IThemeContext = this.context as IThemeContext

        return (
            <ScrollView style={styles.MainContainer} contentContainerStyle={styles.MainContainer2} >
                <View style={styles.SubContainer1}  >
                    <Image source={Referrels_1} style={{ width: Metrics.WIDTH * 0.161, resizeMode: "contain" }} />
                    <Text style={styles.SC1_Text1} >{Translate("Referrels.Heading1")}</Text>
                    <LinearGradientComponent gradientStyle={styles.GradientContainer}>
                        <View style={styles.GradientSubContainer} >
                            <View style={{ flex: 0.1 }} />
                            <View style={{ flex: 0.8 }} >
                                <Text style={styles.SC1_Text2}>0xcde4563fc</Text>
                            </View>
                            <View style={{ flex: 0.1 }} >
                                <Image source={Share} />
                            </View>
                        </View>
                    </LinearGradientComponent>
                    <Text style={styles.SC1_Text3}>{Translate("Referrels.Share")}</Text>
                </View>
                <View style={styles.SubContainer2}>
                    <View>
                        <Image source={Referrels_2} style={{ width: Metrics.WIDTH * 0.145, resizeMode: "contain" }} />
                    </View>
                    <View>
                        <Text style={styles.ShareText} >{Translate("Referrels.GetReferrels")}</Text>
                    </View>
                    <View style={styles.AccountIconContainer} >
                        <Image source={Referrels_3} style={{ width: Metrics.WIDTH * 0.88, height: Metrics.WIDTH * 0.182 }} />
                    </View>
                    <View style={styles.AccountIconContainer} >
                        <Image source={Referrels_4} style={{ width: Metrics.WIDTH * 0.44, height: Metrics.WIDTH * 0.5 }} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: Colors.white,
    },
    MainContainer2: {
        alignItems: "center",
        justifyContent: "space-between",
    },
    SubContainer1: {
        height: Metrics.HEIGHT * 0.3,
        width: Metrics.WIDTH * 0.883,
        borderRadius: Metrics.WIDTH * 0.08,
        alignItems: "center",
        justifyContent: "space-around"
    },
    GradientContainer: {
        width: Metrics.WIDTH * 0.8,
        height: Metrics.WIDTH * 0.1,
        borderRadius: Metrics.WIDTH * 0.07,
        alignItems: "center",
        justifyContent: "center"
    },
    GradientSubContainer: {
        width: Metrics.WIDTH * 0.78,
        height: Metrics.WIDTH * 0.08,
        borderRadius: Metrics.WIDTH * 0.07,
        backgroundColor: Colors.skyBlue,
        flexDirection: "row",
        alignItems: "center"
    },
    SC1_Text1: {
        color: Colors.black,
        fontSize: Metrics.WIDTH * 0.04,
        fontFamily: Fonts.Medium,
        textAlign: "center"
    },
    SC1_Text2: {
        color: Colors.black,
        fontFamily: Fonts.Medium,
        fontSize: Metrics.WIDTH * 0.035,
        textAlign: "center"
    },
    SC1_Text3: {
        color: Colors.black,
        fontFamily: Fonts.Medium,
        fontSize: Metrics.WIDTH * 0.035,
        textAlign: "center"
    },
    SubContainer2: {
        borderTopLeftRadius: Metrics.WIDTH * 0.07,
        borderTopRightRadius: Metrics.WIDTH * 0.07,
        borderColor: Colors.grey2,
        borderWidth: Metrics.WIDTH * 0.005,
        height: Metrics.HEIGHT * 0.7,
        width: Metrics.WIDTH * 0.95,
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: Metrics.HEIGHT * 0.1,
    },
    AccountIconContainer: {

    },
    ShareText: {
        color: Colors.black,
        fontFamily: Fonts.Medium,
        fontSize: Metrics.WIDTH * 0.04,
    }
});

export default Referrels;