import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import EditableInput from "../../Components/EditableInput";
import { Colors } from "../../Theme/Colors";
import { Metrics } from "../../Theme/Metrics";

interface IProps {

}

interface IState {

}

const ProfileImage = require("../../Assets/Profile.png")

class Profile extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.MainContainer} >
                <View style={styles.ProfileContainer2} >
                    <View style={styles.ProfileContainer1}>
                        <Image source={ProfileImage} style={{ width: Metrics.WIDTH * 0.25, height: Metrics.WIDTH * 0.25 }} />
                    </View>
                </View>
                <EditableInput title={"Name"} />
                <EditableInput title={"Email"} />
                <EditableInput title={"Date Of Birth"} />
                <EditableInput title={"Gender"} />
                <EditableInput title={"Id"} />
                <EditableInput title={"Password"} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.backgroundBlue
    },
    ProfileContainer1: {
        backgroundColor: Colors.backgroundGrey,
        width: Metrics.WIDTH * 0.4,
        height: Metrics.WIDTH * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Metrics.WIDTH * 0.2

    },
    ProfileContainer2: {
        backgroundColor: Colors.indigo1,
        width: Metrics.WIDTH * 0.46,
        height: Metrics.WIDTH * 0.46,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Metrics.WIDTH * 0.23

    }
});

export default Profile;