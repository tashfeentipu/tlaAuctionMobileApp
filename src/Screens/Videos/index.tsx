import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { ThemeContext } from "../../Context/ThemeContext";
import { Fonts, Metrics } from "../../Theme";
import { IThemeContext } from "../../Types/Theme";

interface IProps {

}

interface IState {

}

class Videos extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;

    render() {
        const { theme }: IThemeContext = this.context as IThemeContext
        return (
            <View style={styles.MainContainer} >
                <Text style={styles.videosHeading} >Videos</Text>
                <YoutubePlayer
                    height={300}
                    play
                    videoId="vkii9bPl_iw"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {},
    videosHeading: {
        fontFamily: Fonts.Bold,
        fontSize: Metrics.WIDTH * 0.06
    }
});

export default Videos;