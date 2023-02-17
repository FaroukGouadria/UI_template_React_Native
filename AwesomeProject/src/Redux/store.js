import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import ApiSlice from './ApiReducer'
import  PostSlice  from './PostsReducers'
import UserSliceExtra  from './UserReducer'


export const store = configureStore({
    reducer: {
        ApiReducer: ApiSlice,
        UserReducer:UserSliceExtra,
        PostReducer:PostSlice
    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})