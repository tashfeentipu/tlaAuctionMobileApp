import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Colors, Fonts, Metrics } from "../../Theme";
import LinearGradientComponent from "../LinearGradient";

interface IProps {
    modalVisible: boolean
    setModalVisible: (state: boolean) => void
    cameraHandler: (image: string) => void
    ImageLibraryHandler: (image: string) => void
}

interface ModalButtonProps {
    title: string
    onPress: () => void
}

const Button = (props: ModalButtonProps) => {
    return <TouchableOpacity onPress={() => { props.onPress() }} >
        <LinearGradientComponent gradientStyle={styles.ButtonContainer}>
            <Text style={styles.ButtonText} >
                {props.title}
            </Text>
        </LinearGradientComponent >
    </TouchableOpacity>
}

const ImagePicker = (props: IProps) => {

    const cameraHandler = async () => {
        try {
            const response: any = await launchCamera({ mediaType: "photo" })
            props.cameraHandler(response && (response?.assets[0].uri) || "")
        } catch (error) {
            console.log(error);
        }
        props.setModalVisible(false)
    }

    const ImageLibraryHandler = async () => {
        try {
            const response: any = await launchImageLibrary({ mediaType: "photo" })
            props.ImageLibraryHandler(response && (response?.assets[0].uri) || "")
        } catch (error) {
            console.log(error);
        }
        props.setModalVisible(false)
    }

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
                        <Text style={styles.ModalTitle} >Upload Photo</Text>
                        <Button title="Take Photo" onPress={cameraHandler} />
                        <Button title="Choose From Library" onPress={ImageLibraryHandler} />
                        <Button title="Cancel" onPress={() => {
                            props.setModalVisible(false)
                        }} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
        fontFamily: Fonts.Bold,
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
        fontFamily: Fonts.Regular,
        color: Colors.white
    },

});

export default ImagePicker;