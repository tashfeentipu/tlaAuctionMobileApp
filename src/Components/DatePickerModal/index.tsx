import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {
    modalVisible: boolean
    setModalVisible: (state: boolean) => void
    title: string
    onPressEdit?: () => void
    dateValue: string
    setDateValue: (dateValue: string) => void
}

const DatePickerModal = (props: IProps) => {

    return <View  >
        <View style={styles.MainContainer} >
            <Text style={styles.Title}>{props.title}</Text>
            <TouchableOpacity
                style={styles.InputContainer}
                onPress={props.onPressEdit} >
                <Text>{props.dateValue}</Text>
            </TouchableOpacity>
        </View>
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => props.setModalVisible(false)}>
            <TouchableWithoutFeedback onPress={() => { props.setModalVisible(false) }} >
                <View style={styles.ModalMainContainer}>
                    <View style={styles.ModalSubContainer} >
                        <DatePicker
                            mode="calendar"
                            selectorStartingYear={1970}
                            onSelectedChange={(selectedDate: any) => {
                                props.setModalVisible(false)
                                props.setDateValue(selectedDate)
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
        width: Metrics.WIDTH * 0.9,
    },
    Title: {
        color: Colors.black,
        fontSize: Metrics.WIDTH * 0.04,
        fontFamily: Fonts.Regular,
        marginVertical: Metrics.HEIGHT * 0.02
    },
    InputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.skyBlue,
        borderRadius: Metrics.WIDTH * 0.1,
        paddingHorizontal: Metrics.WIDTH * 0.05,
        width: Metrics.WIDTH * 0.9,
        height: Metrics.HEIGHT * 0.06,
    },
    ModalMainContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#000000AA"
    },
    ModalSubContainer: {
        marginHorizontal: Metrics.WIDTH * 0.05,
        backgroundColor: Colors.white,
        overflow: "hidden",
        borderRadius: Metrics.WIDTH * 0.05,
    },
});

export default DatePickerModal;