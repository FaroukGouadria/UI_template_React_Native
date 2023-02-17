import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import ApiSlice from './ApiReducer'
import UserSliceExtra  from './UserReducer'


export const store = configureStore({
    reducer: {
        ApiReducer: ApiSlice,
        UserReducer:UserSliceExtra,
    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})