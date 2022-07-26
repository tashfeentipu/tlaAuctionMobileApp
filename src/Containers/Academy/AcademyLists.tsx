import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Metrics } from "../../Theme";
import { ThemeContext } from "../../Context/ThemeContext";
import { IThemeContext } from "../../Types/Theme";
import { Academy_Content_1 } from "../../Assets";
import Button from "../../Components/Button";


interface IProps {

}

interface IState {

}

class AcademyList extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;
    render() {
        const { theme }: IThemeContext = this.context as IThemeContext
        return (
            <View style={{ ...styles.MainContainer, backgroundColor: theme.cardsBackground }} >
                <View>
                    <Academy_Content_1 width={Metrics.WIDTH * 0.14} />
                </View>
                <View>
                    <Text>BLOCKCHAIN & MONEY</Text>
                    <Text>This course is for students wishing to explore blockchain technology’s potential use—by entrepreneurs and incumbents—to change the world of money and finance.</Text>
                </View>
                <View>
                    <Button title={"GET ACCESS"} onPress={() => { }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        height: Metrics.WIDTH * 0.244,
        marginHorizontal: Metrics.WIDTH * 0.05,
        borderRadius: Metrics.WIDTH * 0.08,
        alignItems: "center"
    }
});

export default AcademyList;