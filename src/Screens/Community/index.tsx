import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
    Community_Discord, Community_Facebook, Community_Instagram, Community_Medium, Community_Telegram,
    Community_Twitter, Community_Website
} from "../../Assets";
import Settings from "../../Constants/Settings";
import CommunityItems from "../../Containers/Community/CommunityItems";
import { ThemeContext } from "../../Context/ThemeContext";
import { Colors, Fonts, Metrics } from "../../Theme";
import { IThemeContext } from "../../Types/Theme";

const { DISCORD, TELEGRAM, TWITTER, MEDIUM, WEBSITE, FACEBOOK, INSTAGRAM } = Settings

interface IProps {

}

interface IState {

}

class Community extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;


    render() {
        const { theme }: IThemeContext = this.context as IThemeContext
        return (
            <ScrollView contentContainerStyle={{ ...styles.MainContainer, backgroundColor: theme.background }} >
                <View style={styles.MainContainer2}  >
                    <View style={styles.HeadingContainer} >
                        <Text style={styles.HeadingText}>Connect with thousand of other PolkaStarterPad users to discuss and share anything about crypto knowledge.</Text>
                    </View>
                    <CommunityItems
                        onPress={() => { }}
                        imageSource={Community_Website}
                        maintext="WEBSITE"
                        subText={WEBSITE}
                    />
                    <CommunityItems
                        onPress={() => { }}
                        imageSource={Community_Discord}
                        maintext="DISCORD"
                        subText={DISCORD}
                    />
                    <CommunityItems
                        onPress={() => { }}
                        imageSource={Community_Telegram}
                        maintext="TELEGRAM"
                        subText={TELEGRAM}
                    />
                    <CommunityItems
                        onPress={() => { }}
                        imageSource={Community_Twitter}
                        maintext="TWITTER"
                        subText={TWITTER}
                    />
                    <CommunityItems
                        onPress={() => { }}
                        imageSource={Community_Medium}
                        maintext="MEDIUM"
                        subText={MEDIUM}
                    />
                    <CommunityItems
                        onPress={() => { }}
                        imageSource={Community_Facebook}
                        maintext="FACEBOOK"
                        subText={FACEBOOK}
                    />
                    <CommunityItems
                        onPress={() => { }}
                        imageSource={Community_Instagram}
                        maintext="INSTAGRAM"
                        subText={INSTAGRAM}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        alignItems: "center",
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