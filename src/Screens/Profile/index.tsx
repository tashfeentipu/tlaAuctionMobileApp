import React, { Component } from "react";
import { TouchableOpacity, Image, ScrollView, StyleSheet, View, ImageSourcePropType } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from "react-native-linear-gradient";
import EditableInput from "../../Components/EditableInput";
import GenderToggle from "../../Components/GenderToggle";
import ImagePickerModal from "../../Handlers/ImagePickerModal";
import { Metrics, Colors } from "../../Theme";

interface IProps {

}

interface IState {
    fileName: string
}

const ProfileImage = require("../../Assets/Profile.png")

class Profile extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            fileName: "file:///data/user/0/com.tlawallet/cache/rn_image_picker_lib_temp_2aade65e-c830-4882-94ad-fb6399546154.jpg"
        };
    }

    cameraHandler = async () => {
        const response: any = await launchImageLibrary({ mediaType: "photo" })
        console.log((response?.assets[0].uri));

        this.setState({ fileName: response && (response?.assets[0].uri) || "" })
        // this.setState({ fileName: "file:///data/user/0/com.tlawallet/cache/rn_image_picker_lib_temp_2aade65e-c830-4882-94ad-fb6399546154.jpg" })

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
                        <TouchableOpacity onPress={this.cameraHandler} >
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
                <ImagePickerModal />
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