import { createSlice } from '@reduxjs/toolkit';

const initialState={
    data:{},
    loader:false,
    error:''
}


export const  UserCallApi = () =>{
    return dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res=>res.json())
        .then(response => console.log(response))
        .catch(error=>console.log(error))
    }
}



export const UserSlice = createSlice({
    name:'userApi',
    initialState,
    reducers:{
        apiStart:state=>{
            state.loader = true
        },
        apiSuccess:(state,action)=>{
            state.loader=false;
            state.data = action.payload
        },
        apiFailure:(state,action)=>{
            state.loader=false,
            state.error=action.payload
        }
    }
});



export const {apiFailure,apiStart,apiSuccess}=UserSlice.actions;
export default UserSlice.reducer;