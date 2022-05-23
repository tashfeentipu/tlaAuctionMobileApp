import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Fonts, Metrics } from "../../Theme";

interface IProps {

}

interface IState {

}

class Videos extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <Text style={styles.videosHeading} >Videos</Text>
                <YoutubePlayer
                    height={300}
                    play
                    videoId="mLI_QxszYrU"
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