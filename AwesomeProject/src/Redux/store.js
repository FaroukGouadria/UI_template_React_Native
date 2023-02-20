import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import ApiSlice from './ApiReducer'
import PostsReducers from './PostsReducers'
import  PostSlice  from './PostsReducers'
import UserSliceExtra  from './UserReducer'
import PostsSlice from './ProductReducer'

export const store = configureStore({
    reducer: {
        ApiReducer: ApiSlice,
        UserReducer:UserSliceExtra,
        PostReducer:PostSlice,
        PostsReducer:PostsSlice
    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})