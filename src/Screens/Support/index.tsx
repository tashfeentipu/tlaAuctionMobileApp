import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ChatItem from "../../Containers/Support/ChatItem";

interface IProps {

}

interface IState {

}

class Support extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
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