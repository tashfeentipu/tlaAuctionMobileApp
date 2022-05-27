import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {

}

interface IState {

}

class Community extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <View style={styles.MainContainer2}  >
                    <View>
                        <Text style={styles.HeadingText}>Connect with thousand of other PolkaStarterPad users to discuss and share anything about crypto knowledge.</Text>
                    </View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        alignItems: "center",
        flex: 1
    },
    MainContainer2: {
        width: Metrics.WIDTH * 0.9
    },
    HeadingText: {
        color: Colors.grey3,
        fontFamily: Fonts.Regular,
        fontSize: Metrics.WIDTH * 0.04
    }
});

export default Community;