import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
//

// Middleware :: Redux Persist Config
const persistConfig = {
  key: 'diamondLaundry',
  storage: AsyncStorage,
  whitelist: ['selectItems'],
  blacklist: ['navigation'],
};

const CombinedReducers = combineReducers({
  // user_details: rootReducer.AuthReducer,
});
//
const persistedReducer = persistReducer(persistConfig, CombinedReducers);
//
export const store = createStore(
  persistedReducer,
  applyMiddleware(createLogger()),
);
//
export const persistor = persistStore(store);
