import React, { Component } from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {

}

interface IState {

}

class Referrels extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <View style={styles.SubContainer1}  >
                    <Image source={require("../../Assets/Referrels_1.png")} style={{ width: Metrics.WIDTH * 0.161, height: Metrics.WIDTH * 0.161 }} />
                    <Text style={styles.SC1_Text1} >5% bonus coins on your referral purchases.</Text>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.purple1, Colors.purple2]} style={styles.GradientContainer}>
                        <View style={styles.GradientSubContainer} >
                            <View style={{ flex: 0.1 }} />
                            <View style={{ flex: 0.8 }} >
                                <Text style={styles.SC1_Text2}>0xcde4563fc</Text>
                            </View>
                            <View style={{ flex: 0.1 }} >
                                <Image source={require("../../Assets/Share.png")} />
                            </View>
                        </View>
                    </LinearGradient>
                    <Text style={styles.SC1_Text3}>Share it with your friends</Text>
                </View>
                <View style={styles.SubContainer2}>
                    <View>
                        <Image source={require("../../Assets/Referrels_2.png")} style={{ width: Metrics.WIDTH * 0.145, height: Metrics.WIDTH * 0.145 }} />
                    </View>
                    <View>
                        <Text style={styles.ShareText} >Share and Get referrals using these</Text>
                    </View>
                    <View style={styles.ImageContainer} >
                        <TouchableOpacity>
                            <Image source={require("../../Assets/GooglePlus_Icon.png")} style={{ width: Metrics.WIDTH * 0.11, height: Metrics.WIDTH * 0.11 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../Assets/Facebook_Icon.png")} style={{ width: Metrics.WIDTH * 0.11, height: Metrics.WIDTH * 0.11 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../Assets/Twitter_Icon.png")} style={{ width: Metrics.WIDTH * 0.11, height: Metrics.WIDTH * 0.11 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ImageContainer} >
                        <TouchableOpacity>
                            <Image source={require("../../Assets/WhatsApp_Icon.png")} style={{ width: Metrics.WIDTH * 0.11, height: Metrics.WIDTH * 0.11 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../Assets/SnapChat_Icon.png")} style={{ width: Metrics.WIDTH * 0.11, height: Metrics.WIDTH * 0.11 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../Assets/Message_Icon.png")} style={{ width: Metrics.WIDTH * 0.11, height: Metrics.WIDTH * 0.11 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.white,
    },
    SubContainer1: {
        height: Metrics.HEIGHT * 0.3,
        width: Metrics.WIDTH * 0.883,
        borderRadius: Metrics.WIDTH * 0.08,
        backgroundColor: Colors.skyBlue,
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
        fontFamily: Fonts.DubaiMedium,
        textAlign: "center"
    },
    SC1_Text2: {
        color: Colors.black,
        fontFamily: Fonts.DubaiMedium,
        fontSize: Metrics.WIDTH * 0.035,
        textAlign: "center"
    },
    SC1_Text3: {
        color: Colors.black,
        fontFamily: Fonts.DubaiMedium,
        fontSize: Metrics.WIDTH * 0.035,
        textAlign: "center"
    },
    SubContainer2: {
        borderTopLeftRadius: Metrics.WIDTH * 0.07,
        borderTopRightRadius: Metrics.WIDTH * 0.07,
        backgroundColor: Colors.skyBlue,
        height: Metrics.HEIGHT * 0.45,
        width: Metrics.WIDTH,
        alignItems: "center",
        justifyContent: "space-around"
    },
    ImageContainer: {
        flexDirection: "row",
        width: Metrics.WIDTH * 0.8,
        justifyContent: "space-between"
    },
    ShareText: {
        color: Colors.black,
        fontFamily: Fonts.DubaiMedium,
        fontSize: Metrics.WIDTH * 0.04,
    }
});

export default Referrels;