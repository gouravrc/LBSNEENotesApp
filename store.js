import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer/index'
import rootSaga from './saga/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // to persist storage when the device or application is offline
  version: 1,
  whitelist: [ // note that i am only persisting this keys
    'notes',
  ],
  stateReconciler: hardSet,
}
const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware() // setting up saga middleware to handle redux actions
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
)
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga) // running saga in backgorund...

