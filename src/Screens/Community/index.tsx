import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Community_Discord, Community_Medium, Community_Telegram, Community_Twitter, Community_Website } from "../../Assets";
import CommunityItems from "../../Containers/Community/CommunityItems";
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
                    <View style={styles.HeadingContainer} >
                        <Text style={styles.HeadingText}>Connect with thousand of other PolkaStarterPad users to discuss and share anything about crypto knowledge.</Text>
                    </View>
                    <CommunityItems
                        onPress={() => { }}
                        imageSource={Community_Website}
                        maintext="WEBSITE"
                        subText="https://polkastarterpad.com/"
                    />
                    <CommunityItems
                        onPress={() => { }}
                        imageSource={Community_Discord}
                        maintext="DISCORD"
                        subText="https://polkastarterpad.com/"
                    />
                    <CommunityItems
                        onPress={() => { }}
                        imageSource={Community_Telegram}
                        maintext="TELEGRAM"
                        subText="https://polkastarterpad.com/"
                    />
                    <CommunityItems
                        onPress={() => { }}
                        imageSource={Community_Twitter}
                        maintext="TWITTER"
                        subText="https://polkastarterpad.com/"
                    />
                    <CommunityItems
                        onPress={() => { }}
                        imageSource={Community_Medium}
                        maintext="MEDIUM"
                        subText="https://polkastarterpad.com/"
                    />
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
    },
    HeadingContainer: {
        marginVertical: Metrics.HEIGHT * 0.005
    }
});

export default Community;