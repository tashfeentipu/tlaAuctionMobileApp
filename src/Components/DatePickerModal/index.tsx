import React from "react";
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {
    modalVisible: boolean
    setModalVisible: (state: boolean) => void
}

const DatePickerModal = (props: IProps) => {

    return <View  >
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => props.setModalVisible(false)}
        >
            <TouchableWithoutFeedback onPress={() => {
                props.setModalVisible(false)
            }} >

                <View style={styles.MainContainer}>
                    <View style={styles.SubContainer} >
                        <DatePicker
                            mode="calendar"
                            selectorStartingYear={1970}
                            onSelectedChange={(selectedDate: any) => {
                                console.log(selectedDate);
                                props.setModalVisible(false)

                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    </View>
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#000000AA"
    },
    SubContainer: {
        marginHorizontal: Metrics.WIDTH * 0.05,
        backgroundColor: Colors.white,
        overflow: "hidden",
        borderRadius: Metrics.WIDTH * 0.05,
    },
});

export default DatePickerModal;