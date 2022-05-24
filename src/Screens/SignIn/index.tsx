import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WALKTHROUGH1 } from "../../Navigation/Routes";
import { Formik } from "formik";
import ErrorText from "../../Components/ErrorText";
import { Fonts, Colors, Metrics } from "../../Theme";
import TextInputBox from "../../Components/TextInput";
import LogonToggle from "../../Containers/LogonToggle";
import { connect } from "react-redux";
import { SIGN_IN_SCHEMA } from "../../Validations/SignIn";
import { LoginController } from "../../Network/Controllers/LoginController";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import { Logo2 } from "../../Assets";
import { withTranslation } from "react-i18next";

interface IProps {
    navigation: any
    loginToken: string
    setLoginToken: Function
    t: any
}

interface IState {

}

const EMAIL = "email"
const PASSWORD = "password"

class SignIn extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { t } = this.props

        return (
            <View style={styles.MainContainer} >
                <LogonToggle toggle={true} navigation={this.props.navigation} />
                <View>
                    <Image source={Logo2} style={{ width: 210, height: 130 }} />
                </View>
                <Formik
                    initialValues={{ [EMAIL]: "placeholder", [PASSWORD]: "placeholder" }}
                    validationSchema={SIGN_IN_SCHEMA}
                    onSubmit={() => {
                        this.props.navigation.navigate(WALKTHROUGH1);
                        this.props.setLoginToken()
                    }}>
                    {formikProps => <>
                        <View>
                            <TextInputBox
                                inputLabel="Email"
                                value={formikProps.values[EMAIL]}
                                onBlur={formikProps.handleBlur(EMAIL)}
                                onChangeText={formikProps.handleChange(EMAIL)}
                            />
                            <ErrorText errorText={formikProps.errors[EMAIL]} enable={formikProps.touched[EMAIL]} />
                            <TextInputBox
                                inputLabel="Password"
                                secureTextEntry={true}
                                value={formikProps.values[PASSWORD]}
                                onBlur={formikProps.handleBlur(PASSWORD)}
                                onChangeText={formikProps.handleChange(PASSWORD)}
                            />
                            <ErrorText errorText={formikProps.errors[PASSWORD]} enable={formikProps.touched[PASSWORD]} />
                        </View>
                        <View style={styles.FPLabelContainer}>
                            <Text style={styles.FPLabel}>Forgot Password?</Text>
                            <TouchableOpacity style={styles.signInButtonContainer} onPress={formikProps.handleSubmit}>
                                <Text style={styles.signInButtonText}>
                                    Sign In
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>}
                </Formik>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: Colors.white,
        height: Metrics.HEIGHT,
        alignItems: "center",
        justifyContent: "space-between"
    },
    FPLabelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Metrics.WIDTH * 0.9,
        height: Metrics.HEIGHT * 0.1,
        marginBottom: Metrics.HEIGHT * 0.1
    },
    FPLabel: {
        fontSize: 14,
        fontFamily: Fonts.Regular,
        color: Colors.black
    },
    signInButtonContainer: {
        height: Metrics.HEIGHT * 0.06,
        width: Metrics.WIDTH * 0.3,
        borderRadius: Metrics.WIDTH * 0.2,
        backgroundColor: Colors.pink2,
        alignItems: "center",
        justifyContent: 'center'
    },
    signInButtonText: {
        color: Colors.white,
        fontFamily: Fonts.Regular,
        fontSize: Metrics.WIDTH * 0.04
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation("SignIn")(SignIn));
