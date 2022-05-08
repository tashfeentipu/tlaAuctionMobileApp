/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import HOCNavigationContainer from './src/Navigation';
import { Provider } from "react-redux";
import store from "./src/Redux/Store";

const App = () => {

  return (
    <Provider store={store}>
      <HOCNavigationContainer />
    </Provider>
  );
};

export default App;
