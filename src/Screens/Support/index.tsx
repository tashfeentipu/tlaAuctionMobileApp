import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ChatItem from "../../Containers/Support/ChatItem";
import { ThemeContext } from "../../Context/ThemeContext";
import { IThemeContext } from "../../Types/Theme";

interface IProps {

}

interface IState {

}

class Support extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;

    render() {
        const { theme }: IThemeContext = this.context as IThemeContext
        return (
            <View style={styles.MainContainer} >
                <FlatList
                    style={styles.FlatList}
                    data={[{ text: "Chat Chat Chat", user: true, time: "1:59 AM" },
                    { text: "Chat Chat Chat", user: false, time: "1:59 AM" },
                    { text: "Chat Chat Chat", user: true, time: "1:59 AM" },]}
                    renderItem={({ item, index }) => <ChatItem key={index} user={item.user} text={item.text} time={item.time} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: "center"
    },
    FlatList: {
        flex: 1,
    }
});

export default Support;