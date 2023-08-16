import { configureStore , combineReducers} from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from "redux-thunk";
import tripReducer from "./slice/tripSlice"
import bookingReducer from "./slice/bookingSlice"
const rootReducer = combineReducers({
    user: userReducer,
    trip: tripReducer,
    booking: bookingReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: [thunk]
})