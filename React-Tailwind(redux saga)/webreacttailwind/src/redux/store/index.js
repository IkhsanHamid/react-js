import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import rootSaga from '../saga'
import userReducers from '../action/reducer/userReducer'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core'
import productReducers from '../action/reducer/productReducer'


const logger = createLogger()
const saga = createSagaMiddleware()
const reducer = combineReducers({
    userReducer : userReducers,
    productReducer : productReducers
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        }).concat(logger).concat(saga)
})

saga.run(rootSaga)
export default store;