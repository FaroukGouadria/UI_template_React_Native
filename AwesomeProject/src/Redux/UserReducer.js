import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  user: {},
  loader: false,
  error: '',
};

/*********************
*Reducers
**********************/

export const UserCallApi = () => {
  return dispatch => {
    dispatch(UserApiStart());
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(response => dispatch(UserApiSuccess(response)))
      .catch(error => dispatch(UserApiFailure(error)));
  };
};

/**************
 *extraReducers
 ********************/

export const fetchApi = createAsyncThunk( "userApi/getData",async (rejectWithValue) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        console.log({user:response.data})
        return response.data;     
    } catch (error) {
            rejectWithValue(error.response.data)   
    }
});
/**RTK 2.0 deprecated */ 
// export const UserSliceExtra = createSlice({
//   name: 'userApi',
//   initialState,
//   reducers: {
//   },
//   extraReducers: {
//     [fetchApi.pending]:(state)=>{
//         state.loader=true;
//     },
//     [fetchApi.fulfilled]:(state,action)=>{
//         state.loader=false,
//         state.user= action.payload
//     },
//     [fetchApi.rejected]:(state,action)=>{
//         state.loader=false,
//         state.error=action.payload
//     }
//   },
// });

/*********************
 * Extra Reducer
 *********************/

export const UserSliceExtra = createSlice({
    name: 'userApi',
    initialState,
    reducers: {
    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchApi.pending,(state)=>{
            state.loader=true;
        })
        .addCase(fetchApi.fulfilled,(state,action)=>{
            state.loader=false,
            state.user=action.payload
        })
        .addCase(fetchApi.rejected,(state,action)=>{
            state.loader=false,
            state.error=action.payload
        })
    },
  });

/*********************
*Reducers
**********************/

export const UserSlice = createSlice({
  name: 'userApi',
  initialState,
  reducers: {
    UserApiStart: state => {
      state.loader = true;
    },
    UserApiSuccess: (state, action) => {
      state.loader = false;
      state.user = action.payload;
    },
    UserApiFailure: (state, action) => {
      (state.loader = false), (state.error = action.payload);
    },
  },
});

export const {UserApiFailure, UserApiStart, UserApiSuccess} = UserSlice.actions;
// export default UserSlice.reducer;
export default UserSliceExtra.reducer;
