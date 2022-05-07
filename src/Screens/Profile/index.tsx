import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import EditableInput from "../../Components/EditableInput";
import GenderToggle from "../../Components/GenderToggle";
import ImagePickerModal from "../../Handlers/ImagePickerModal";
import { Colors, Metrics } from "../../Theme";

interface IProps {

}

interface IState {
    fileName: string
    modalVisible: boolean
}

const ProfileImage = require("../../Assets/Profile.png")

class Profile extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            modalVisible: false,
            fileName: "file:///data/user/0/com.tlawallet/cache/rn_image_picker_lib_temp_2aade65e-c830-4882-94ad-fb6399546154.jpg"
        };
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.MainContainer} >
                <View style={styles.ProfileWrapperContainer} >
                    <View style={styles.ProfileContainer2} >
                        <View style={styles.ProfileContainer1}>
                            <Image source={{ uri: this.state.fileName }} style={{ width: Metrics.WIDTH * 0.25, height: Metrics.WIDTH * 0.25 }} />
                        </View>
                    </View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[Colors.purple1, Colors.purple2]}
                        style={styles.AddImageContainer}>
                        <TouchableOpacity onPress={() => this.setState({ modalVisible: true })} >
                            <Image source={require("../../Assets/Plus.png")} />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <EditableInput title={"Name"} />
                <EditableInput title={"Email"} />
                <EditableInput title={"Date Of Birth"} />
                <GenderToggle />
                <EditableInput title={"Id"} />
                <EditableInput title={"Password"} />
                <ImagePickerModal
                    modalVisible={this.state.modalVisible}
                    setModalVisible={(modalVisible: boolean) => this.setState({ modalVisible })}
                    cameraHandler={(image: string): void => { this.setState({ fileName: image }) }}
                    ImageLibraryHandler={(image: string): void => { this.setState({ fileName: image }) }} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        alignItems: "center",
        backgroundColor: Colors.white,
        paddingVertical: Metrics.HEIGHT * 0.05
    },
    ProfileContainer1: {
        backgroundColor: Colors.skyBlue,
        width: Metrics.WIDTH * 0.4,
        height: Metrics.WIDTH * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Metrics.WIDTH * 0.2

    },
    ProfileContainer2: {
        backgroundColor: Colors.indigo1,
        width: Metrics.WIDTH * 0.44,
        height: Metrics.WIDTH * 0.44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Metrics.WIDTH * 0.22
    },
    ProfileWrapperContainer: {
    },
    AddImageContainer: {
        position: "absolute",
        top: Metrics.WIDTH * 0.33,
        left: Metrics.WIDTH * 0.3,
        width: Metrics.WIDTH * 0.1,
        height: Metrics.WIDTH * 0.1,
        borderRadius: Metrics.WIDTH * 0.05,
        alignItems: "center",
        justifyContent: "center"
    }

});

export default Profile;