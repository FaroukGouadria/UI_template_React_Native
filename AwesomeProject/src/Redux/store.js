import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import ApiSlice from './ApiReducer'


export const store = configureStore({
    reducer: {
        ApiReducer: ApiSlice,
        UserReducer:ApiSlice
    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})