import { Formik } from "formik";
import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Logo } from "../../Assets";
import ErrorText from "../../Components/ErrorText";
import TextInputBox from "../../Components/TextInput";
import LogonToggle from "../../Containers/LogonToggle";
import { ThemeContext } from "../../Context/ThemeContext";
import { SIGN_UP_SUCCESS } from "../../Navigation/Routes";
import { Colors, Fonts, Metrics } from "../../Theme";
import { Translate } from "../../Translations/localization";
import { IThemeContext } from "../../Types/Theme";
import { SIGN_UP_SCHEMA } from "../../Validations/SignUp";

interface IProps {
    navigation: any
}

interface IState {

}

const NAME = "name"
const EMAIL = "email"
const PASSWORD = "password"

class SignUp extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;

    render() {
        const { theme }: IThemeContext = this.context as IThemeContext
        return (
            <ScrollView contentContainerStyle={styles.MainContainer} >
                <LogonToggle toggle={false} navigation={this.props.navigation} />
                <View>
                    <Logo width={Metrics.WIDTH * 0.55} height={ Metrics.HEIGHT * 0.185} />
                </View>
                <Formik
                    initialValues={{ [NAME]: "", [EMAIL]: "", [PASSWORD]: "" }}
                    validationSchema={SIGN_UP_SCHEMA}
                    onSubmit={() => {
                        this.props.navigation.navigate(SIGN_UP_SUCCESS)
                    }}>
                    {formikProps => <>
                        <TextInputBox
                            inputLabel={Translate("Common.Name")}
                            value={formikProps.values[NAME]}
                            onBlur={formikProps.handleBlur(NAME)}
                            onChangeText={formikProps.handleChange(NAME)}
                        />
                        <ErrorText errorText={formikProps.errors[NAME]} enable={formikProps.touched[NAME]} />
                        <TextInputBox
                            inputLabel={Translate("Common.Email")}
                            value={formikProps.values[EMAIL]}
                            onBlur={formikProps.handleBlur(EMAIL)}
                            onChangeText={formikProps.handleChange(EMAIL)}
                        />
                        <ErrorText errorText={formikProps.errors[EMAIL]} enable={formikProps.touched[EMAIL]} />
                        <TextInputBox
                            inputLabel={Translate("Common.Password")}
                            secureTextEntry={true}
                            value={formikProps.values[PASSWORD]}
                            onBlur={formikProps.handleBlur(PASSWORD)}
                            onChangeText={formikProps.handleChange(PASSWORD)}
                        />
                        <ErrorText errorText={formikProps.errors[PASSWORD]} enable={formikProps.touched[PASSWORD]} />
                        <View style={styles.PPLabelContainer} >
                            <Text style={styles.PPLabel} >{Translate("SignUp.PrivacyPolicy")}</Text>
                            <TouchableOpacity style={styles.SignUpButtonContainer} onPress={formikProps.handleSubmit} >
                                <Text style={styles.SignUpButtonText}>
                                    {Translate("SignUp.SignUp")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>}
                </Formik>
            </ScrollView >
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
    PPLabelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Metrics.WIDTH * 0.9,
        height: Metrics.HEIGHT * 0.1,
    },
    PPLabel: {
        fontSize: 14,
        fontFamily: Fonts.Regular,
        color: Colors.black
    },
    SignUpButtonContainer: {
        height: Metrics.HEIGHT * 0.06,
        width: Metrics.WIDTH * 0.3,
        borderRadius: Metrics.WIDTH * 0.2,
        backgroundColor: Colors.indigo1,
        alignItems: "center",
        justifyContent: 'center'
    },
    SignUpButtonText: {
        fontFamily: Fonts.Regular,
        color: Colors.white
    }
});

export default SignUp;