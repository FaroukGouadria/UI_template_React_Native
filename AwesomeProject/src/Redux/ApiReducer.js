import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {},
    loader: false,
    error: ''
}

export const ApiCall = () => {
    return dispatch => {
        dispatch(apiStart())
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(response => dispatch(apiSuccess(response)))
            .catch(err => dispatch(apiFailure(err)))
    }
}



export const ApiSlice = createSlice({
    name: 'apireducer',
    initialState,
    reducers: {
        apiStart: state => {
            state.loader = true
        },
        apiSuccess: (state, action) => {
            // console.log(action)
            state.data = action.payload
            state.loader = false
        },
        apiFailure: (state, action) => {
            state.loader = false,
                state.error = action.payload
        },
    },
});

export const { apiSuccess, apiStart, apiFailure } = ApiSlice.actions;
export default ApiSlice.reducer;