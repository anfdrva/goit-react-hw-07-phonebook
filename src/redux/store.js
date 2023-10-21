import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { filterReducer, entities, error } from "./contacts/contactsReducer";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const rootReducer = {
    contacts: combineReducers({
        entities, 
        filter: filterReducer,
    }),
    error,
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);