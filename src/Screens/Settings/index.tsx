import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Metrics } from "../../Theme/Metrics";

interface IProps {

}

interface IState {

}

class Settings extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ScrollView style={styles.MainContainer} contentContainerStyle={styles.MainContainer2} >
                <View style={styles.ImageContainer1}  >
                    <View style={styles.ImageContainer2} >
                        <Image source={require("../../Assets/Profile.png")} style={{ width: Metrics.WIDTH * 0.25, height: Metrics.WIDTH * 0.25 }} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: Colors.backgroundBlue
    },
    MainContainer2: {
        alignItems: "center"
    },
    ImageContainer1: {
        backgroundColor: Colors.indigo1,
        width: Metrics.WIDTH * 0.42,
        height: Metrics.WIDTH * 0.42,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Metrics.WIDTH * 0.21
    },
    ImageContainer2: {
        backgroundColor: Colors.backgroundGrey,
        width: Metrics.WIDTH * 0.4,
        height: Metrics.WIDTH * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Metrics.WIDTH * 0.2
    }
});

export default Settings;