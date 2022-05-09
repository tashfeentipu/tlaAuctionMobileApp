import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import EditableInput from "../../Components/EditableInput";
import GenderToggle from "../../Components/GenderToggle";
import ImagePickerModal from "../../Components/ImagePickerModal";
import DatePickerModal from "../../Components/DatePickerModal";
import { Colors, Metrics } from "../../Theme";

interface IProps {

}

interface IState {
    fileName: string
    imageModalVisible: boolean
    dateModalVisible: boolean
}

const ProfileImage = require("../../Assets/Profile.png")

class Profile extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            imageModalVisible: false,
            dateModalVisible: false,
            fileName: ""
        };
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.MainContainer} >
                <View style={styles.ProfileWrapperContainer} >
                    <View style={styles.ProfileContainer2} >
                        <View style={styles.ProfileContainer1}>
                            {
                                this.state.fileName !== "" &&
                                <Image source={{ uri: this.state.fileName }} style={{ width: Metrics.WIDTH * 0.45, height: Metrics.WIDTH * 0.45 }} />
                                ||
                                <Image source={ProfileImage} style={{ width: Metrics.WIDTH * 0.25, height: Metrics.WIDTH * 0.25 }} />
                            }
                        </View>
                    </View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[Colors.purple1, Colors.purple2]}
                        style={styles.AddImageContainer}>
                        <TouchableOpacity onPress={() => this.setState({ imageModalVisible: true })} >
                            <Image source={require("../../Assets/Plus.png")} />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <EditableInput title={"Name"} />
                <EditableInput title={"Email"} />
                <DatePickerModal
                    modalVisible={this.state.dateModalVisible}
                    setModalVisible={(dateModalVisible: boolean) => this.setState({ dateModalVisible })}
                    title={"Date of Birth"}
                    dateValue={""}
                    onPressEdit={() => { this.setState({ dateModalVisible: true }) }}
                />
                <GenderToggle />
                <EditableInput title={"Id"} />
                <EditableInput title={"Password"} />
                <ImagePickerModal
                    modalVisible={this.state.imageModalVisible}
                    setModalVisible={(imageModalVisible: boolean) => this.setState({ imageModalVisible })}
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
        borderRadius: Metrics.WIDTH * 0.2,
        overflow: "hidden"
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