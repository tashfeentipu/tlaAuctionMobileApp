import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import ListEmptyComponent from "../../Containers/History/ListEmptyComponent";
import { ThemeContext } from "../../Context/ThemeContext";
import { Colors, Fonts, Metrics } from "../../Theme";
import { IThemeContext } from "../../Types/Theme";

interface IProps {

}

interface IState {
    activeTab: number
}

class History extends Component<IProps, IState> {
    DEPOSIT: number;
    WITHDRAW: number;
    constructor(props: IProps) {
        super(props);
        this.DEPOSIT = 0
        this.WITHDRAW = 1
        this.state = { activeTab: this.DEPOSIT };
    }
    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;


    render() {
        const { theme }: IThemeContext = this.context as IThemeContext
        return (
            <View style={styles.MainContainer} >
                <View style={styles.TabViewContainer} >
                    <TouchableOpacity
                        style={{
                            ...styles.TabTextContainer,
                            backgroundColor: this.state.activeTab === this.DEPOSIT && Colors.pink || Colors.white
                        }}
                        onPress={() => {
                            this.setState({ activeTab: this.DEPOSIT })
                        }}
                    >
                        <Text style={styles.TabText} >DEPOSIT</Text>
                    </TouchableOpacity>
                    <Text style={styles.TabText}>|</Text>
                    <TouchableOpacity
                        style={{
                            ...styles.TabTextContainer,
                            backgroundColor: this.state.activeTab === this.WITHDRAW && Colors.pink || Colors.white
                        }}
                        onPress={() => {
                            this.setState({ activeTab: this.WITHDRAW })
                        }}
                    >
                        <Text style={styles.TabText}>WITHDRAW</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={[]}
                    style={{ flex: 1 }}
                    renderItem={() => { return <View></View> }}
                    ListEmptyComponent={<ListEmptyComponent />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    },
    TabViewContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: Metrics.HEIGHT * 0.05
    },
    TabTextContainer: {
        width: Metrics.WIDTH * 0.3,
        alignItems: "center",
        borderRadius: Metrics.WIDTH * 0.2,
    },
    TabText: {
        fontSize: Metrics.WIDTH * 0.04,
        fontFamily: Fonts.Bold
    }
});

export default History;