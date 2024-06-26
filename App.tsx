/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import MainView from "./MainView";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { Provider } from "react-redux";

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      {/* Added Redux Store */}
      <Provider store={store}>
        {/* Added Redux Persist to hold state while application is background mode or offline */}
        <PersistGate loading={null} persistor={persistor}>
          <MainView />
        </PersistGate>
      </Provider>
      {/* ================ */}
    </SafeAreaView>
  );
}

export default App;
