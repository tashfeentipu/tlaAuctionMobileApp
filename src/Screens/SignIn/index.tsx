import { Formik } from "formik";
import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { Logo } from "../../Assets";
import ErrorText from "../../Components/ErrorText";
import TextInputBox from "../../Components/TextInput";
import LogonToggle from "../../Containers/LogonToggle";
import { ThemeContext } from "../../Context/ThemeContext";
import { WALKTHROUGH1 } from "../../Navigation/Routes";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import { Colors, Fonts, Metrics } from "../../Theme";
import { Translate } from "../../Translations/localization";
import { IThemeContext } from "../../Types/Theme";
import { SIGN_IN_SCHEMA } from "../../Validations/SignIn";

interface IProps {
    navigation: any
    loginToken: string
    setLoginToken: Function
}

interface IState {

}

const EMAIL = "email"
const PASSWORD = "password"

class SignIn extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    static contextType?: React.Context<IThemeContext> | undefined = ThemeContext;
    render() {
        const { theme }: IThemeContext = this.context as IThemeContext

        return (
            <View style={styles.MainContainer} >
                <LogonToggle toggle={true} navigation={this.props.navigation} />
                <View>
                    <Logo width={Metrics.WIDTH * 0.451} height={Metrics.WIDTH * 0.407} />
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
                        </View>
                        <View style={styles.FPLabelContainer}>
                            <Text style={styles.FPLabel}>{Translate("SignIn.ForgetPassword")}</Text>
                            <TouchableOpacity style={styles.signInButtonContainer} onPress={formikProps.handleSubmit}>
                                <Text style={styles.signInButtonText}>
                                    {Translate("SignIn.SignIn")}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
