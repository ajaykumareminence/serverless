"use client"
import { store } from "./store";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
const persistor = persistStore(store);
export default function ReduxProvider({ children }) {
    return (
        <PersistGate persistor={persistor} loading={null}>
            <Provider store={store}>
                {children}
            </Provider>
        </PersistGate>
    )
}