import { Formik } from "formik";
import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DatePickerModal from "../../Components/DatePickerModal";
import EditableInput from "../../Components/EditableInput";
import GenderToggle from "../../Components/GenderToggle";
import ImagePickerModal from "../../Components/ImagePickerModal";
import LinearGradientComponent from "../../Components/LinearGradient";
import { Colors, Metrics } from "../../Theme";
import ProfileImage from "../../Assets/Profile.png";
import { PROFILE_SCHEMA } from "../../Validations/Profile";
import Header from "../../Components/Header";
import { BackArrow } from "../../Assets";

interface IProps {

}

interface IState {
    fileName: string
    imageModalVisible: boolean
    dateModalVisible: boolean
}

const NAME = "name"
const EMAIL = "email"
const PASSWORD = "password"

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
                <Formik
                    initialValues={{ [NAME]: "", [EMAIL]: "", [PASSWORD]: "" }}
                    validationSchema={PROFILE_SCHEMA}
                    onSubmit={() => {

                    }}>
                    {formikProps => <>
                        <View style={styles.ProfileWrapperContainer} >
                            <Header
                                leftIcon={
                                    <View style={styles.BackIconContainer}>
                                        <Image
                                            source={BackArrow}
                                            style={{ width: Metrics.WIDTH * 0.07, height: Metrics.WIDTH * 0.08 }}
                                        />
                                    </View>
                                }
                                {...this.props}
                                rightIcon={<TouchableOpacity style={styles.SaveTextContainer} onPress={() => { }}>
                                    <Text style={styles.SaveText}>Save</Text>
                                </TouchableOpacity>}
                            />
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
                            <LinearGradientComponent gradientStyle={styles.AddImageContainer} >
                                <TouchableOpacity onPress={() => this.setState({ imageModalVisible: true })} >
                                    <Image source={require("../../Assets/Plus.png")} />
                                </TouchableOpacity>
                            </LinearGradientComponent>
                        </View>
                        <EditableInput
                            title={"Name"}
                            value={formikProps.values[NAME]}
                            onBlur={formikProps.handleBlur(NAME)}
                            onChangeText={formikProps.handleChange(NAME)}
                        />
                        <EditableInput
                            title={"Email"}
                            value={formikProps.values[EMAIL]}
                            onBlur={formikProps.handleBlur(EMAIL)}
                            onChangeText={formikProps.handleChange(EMAIL)}
                        />
                        <DatePickerModal
                            modalVisible={this.state.dateModalVisible}
                            setModalVisible={(dateModalVisible: boolean) => this.setState({ dateModalVisible })}
                            title={"Date of Birth"}
                            dateValue={""}
                            onPressEdit={() => { this.setState({ dateModalVisible: true }) }}
                        />
                        <GenderToggle />
                        <EditableInput title={"Id"} />
                        <EditableInput
                            title={"Password"}
                            value={formikProps.values[PASSWORD]}
                            onBlur={formikProps.handleBlur(PASSWORD)}
                            onChangeText={formikProps.handleChange(PASSWORD)}
                        />
                        <ImagePickerModal
                            modalVisible={this.state.imageModalVisible}
                            setModalVisible={(imageModalVisible: boolean) => this.setState({ imageModalVisible })}
                            cameraHandler={(image: string): void => { this.setState({ fileName: image }) }}
                            ImageLibraryHandler={(image: string): void => { this.setState({ fileName: image }) }} />
                    </>
                    }
                </Formik>
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
    },
    BackIconContainer: {
        flex: 0.15,
        alignItems: "center"
    },
    SaveTextContainer: {
        flex: 0.15,
        alignItems: "center"
    },
    SaveText: {
        fontSize: Metrics.WIDTH * 0.05
    }

});

export default Profile;