import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from "react-native-linear-gradient";
import { Colors, Fonts, Metrics } from "../../Theme";

interface IProps {

}

interface ModalButtonProps {
    title: string
}


const Button = (props: ModalButtonProps) => {
    return <TouchableOpacity  >
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.purple1, Colors.purple2]} style={styles.ButtonContainer}>
            <Text style={styles.ButtonText} >
                {props.title}
            </Text>
        </LinearGradient >
    </TouchableOpacity>
}

const ImagePicker = (props: IProps) => {

    const cameraHandler = async () => {
        const response: any = await launchCamera({ mediaType: "photo" })

        // .setState({ fileName: response && (response?.assets[0].uri) || "" })

    }

    const [modalVisible, setModalVisible] = useState<boolean>(true)

    return <View  >
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { setModalVisible(!modalVisible) }}
        >
            <View style={styles.MainContainer}>
                <View style={styles.SubContainer} >
                    <Text style={styles.ModalTitle} >Upload Photo</Text>
                    <Button title="Take Photo" />
                    <Button title="Choose From Library" />
                    <Button title="Cancel" />
                </View>
            </View>
        </Modal>
    </View>
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#000000AA"
    },
    SubContainer: {
        flex: 0.5,
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        margin: Metrics.WIDTH * 0.04,
        padding: Metrics.WIDTH * 0.07,
        borderRadius: Metrics.WIDTH * 0.05,
    },
    ModalTitle: {
        fontSize: Metrics.WIDTH * 0.06,
        fontFamily: Fonts.DubaiBold,
        color: Colors.grey,
        textAlign: "center"
    },
    ButtonContainer: {
        height: Metrics.HEIGHT * 0.08,
        borderRadius: Metrics.WIDTH * 0.04,
        alignItems: "center",
        justifyContent: "center"
    },
    ButtonText: {
        fontSize: Metrics.WIDTH * 0.05,
        fontFamily: Fonts.DubaiRegular,
        color: Colors.white
    },

});

export default ImagePicker;