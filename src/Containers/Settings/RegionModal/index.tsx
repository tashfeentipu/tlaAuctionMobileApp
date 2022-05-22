import React, { Component } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity, FlatList } from "react-native";
import { Colors, Fonts, Metrics } from "../../../Theme";

interface IProps {
    modalVisible: boolean
    setModalVisible: (modalState: boolean) => void
    setContent: (content: string) => void
}

interface IState {

}

class RegionModal extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    regionListItem = ({ item, index }: { item: string, index: number }) => <TouchableOpacity
        key={index}
        onPress={() => {
            this.props.setModalVisible(false)
            this.props.setContent(item)
        }}
        style={styles.RegionItemContainer}>
        <Text style={styles.RegionItemText}>{item}</Text>
    </TouchableOpacity>

    regionListHeader = () => <View style={styles.HeadingContainer}>
        <Text style={styles.HeadingText}>Choose Region </Text>
    </View>


    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => this.props.setModalVisible(false)}
            >
                <TouchableOpacity style={styles.MainContainer} onPress={() => this.props.setModalVisible(false)} >
                    <View style={styles.SubContainer}>
                        <FlatList
                            data={["UK", "US", "Canada", "Australia"]}
                            renderItem={this.regionListItem}
                            ListHeaderComponent={this.regionListHeader}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: "#000000AA",
        justifyContent: 'center',
        padding: Metrics.WIDTH * 0.05
    },
    SubContainer: {
        flex: 0.9,
        backgroundColor: Colors.white,
        borderRadius: Metrics.WIDTH * 0.08,
        paddingVertical: Metrics.WIDTH * 0.05,
        paddingHorizontal: Metrics.WIDTH * 0.03,
    },
    HeadingContainer: {
        alignItems: "center",
        marginVertical: Metrics.HEIGHT * 0.02
    },
    HeadingText: {
        fontFamily: Fonts.Exo2Bold,
        fontSize: Metrics.WIDTH * 0.06,
        color: Colors.black
    },
    RegionItemContainer: {
        height: Metrics.HEIGHT * 0.08,
        marginVertical: Metrics.HEIGHT * 0.01,
        paddingHorizontal: Metrics.WIDTH * 0.05,
        justifyContent: "center",
        borderWidth: Metrics.WIDTH * 0.005,
        borderRadius: Metrics.WIDTH * 0.03,
    },
    RegionItemText: {
        color: Colors.black,
        fontSize: Metrics.WIDTH * 0.05,
        fontFamily: Fonts.Exo2Regular
    },
});

export default RegionModal;