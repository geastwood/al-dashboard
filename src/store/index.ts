import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  blacklist: ['airport'],
  storage,
}

const isDevelopment = process.env.NODE_ENV === 'development'

export default function configureStore(saga: any) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]

  if (isDevelopment) {
    const { logger } = require('redux-logger')

    middlewares.push(logger)
  }

  const enhancer = compose(applyMiddleware(...middlewares))
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, enhancer)
  let persistor = persistStore(store)

  if (isDevelopment) {
    window.store = store
    window.persistor = persistor
  }

  sagaMiddleware.run(saga)

  return { store, persistor }
}
