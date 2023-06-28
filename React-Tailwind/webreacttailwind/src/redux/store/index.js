import {configureStore} from '@reduxjs/toolkit'
import userReducers from '../action/reducer/userReducer'
import { combineReducers } from '@reduxjs/toolkit'
import productReducers from '../action/reducer/productReducer'

const reducer = combineReducers({
    userReducer : userReducers,
    productReducer : productReducers
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        })
})
export default store;