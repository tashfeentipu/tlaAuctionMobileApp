import React from "react";
import { LoginController } from "../../Network/Controllers/LoginController";
import { tokenAction } from "../Actions/auth";

// import { useNavigation } from '@react-navigation/native';
// import { WALKTHROUGH1 } from "../../Navigation/Routes";

// const navigation = useNavigation()

export const setToken = () => {
    return async (dispatch: Function) => {
        try {
            // const response = await LoginController("tashfeen", "tipu")

            dispatch(tokenAction("response.token"))

            // navigation.navigate({ key: WALKTHROUGH1 });

        } catch (error) {
            console.log(error);

        }
    };
};