import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./stores/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import App from "./routers/App";

//import { Sentry } from "react-native-sentry";

// Sentry.config(
//   "https://616e92e95244441a9567efc91df37423@sentry.io/1366578"
// ).install();

export default class Root extends Component {
    constructor(props) {
        super(props);
        const { persistor, store } = configureStore();
        this.persistor = persistor;
        this.store = store;
    }

    componentDidMount() {
        // Sentry.setUserContext({
        //   userID: "Saif Kamaal"
        // });

        // Sentry.setExtraContext({
        //   appVersion: "1.0.0"
        // });

        // Sentry.setTagsContext({
        //   environment: "UAT",
        //   react: true
        // });
    }
    render() {
        return (
            <Provider store={this.store}>
                <PersistGate persistor={this.persistor}>
                    <App />
                </PersistGate>
            </Provider>
        );
    }
}

global.XMLHttpRequest = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest;
global.FormData = global.originalFormData
    ? global.originalFormData
    : global.FormData;

fetch; // Ensure to get the lazy property

if (window.__FETCH_SUPPORT__) {
    // it's RNDebugger only to have
    window.__FETCH_SUPPORT__.blob = false;
} else {
    global.Blob = global.originalBlob ? global.originalBlob : global.Blob;
    global.FileReader = global.originalFileReader
        ? global.originalFileReader
        : global.FileReader;
}