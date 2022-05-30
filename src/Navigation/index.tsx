import React from "react";
import StackNavigator from './StackNavigator';
import ThemeContextProvider from "../Context/ThemeContext";
import { NavigationContainer } from '@react-navigation/native';

const HOCNavigationContainer = () => {
    return (
        <NavigationContainer>
            <ThemeContextProvider>
                <StackNavigator />
            </ThemeContextProvider>
        </NavigationContainer>
    );
}

export default HOCNavigationContainer;