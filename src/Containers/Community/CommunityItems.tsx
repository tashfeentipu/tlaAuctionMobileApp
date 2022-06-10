import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {
    onPress: () => void
    imageSource: React.FC<SvgProps>
    maintext: string
    subText?: string
}

interface IState {

}

class CommunityItems extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        const ImageSource = this.props.imageSource
        return (
            <TouchableOpacity style={styles.MainContainer} onPress={() => this.props.onPress()} >
                <View style={styles.SubContainer} >
                    <View style={styles.ImageContainer} >
                        <ImageSource width={Metrics.WIDTH * 0.132}/>
                    </View>
                    <View style={styles.TextContainer} >
                        <Text style={styles.MainText}>{this.props.maintext}</Text>
                        <Text style={styles.SubText}>{this.props.subText}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        height: Metrics.HEIGHT * 0.104,
        backgroundColor: Colors.skyBlue,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Metrics.WIDTH * 0.1,
        marginVertical: Metrics.HEIGHT * 0.008
    },
    SubContainer: {
        flex: 0.9,
        flexDirection: "row"
    },
    ImageContainer: {
        justifyContent: "center",
        flex: 0.2
    },
    TextContainer: {
        flex: 0.6,
        justifyContent: "center",
    },
    MainText: {
        fontFamily: Fonts.Bold,
        color: Colors.black
    },
    SubText: {}
});

export default CommunityItems;