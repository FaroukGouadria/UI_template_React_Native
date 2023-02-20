import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../outils/api';
import { DATA } from '../outils/Data';
import { PostSlice } from './PostsReducers';

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Mayank Kumar",
      email: "mayankkumar@gmail.com",
      phone: "+91767656526",
      status: "Active",
    },
    {
      id: 2,
      name: "Jitender Kumar",
      email: "jitenderskumar@gmail.com",
      phone: "+918878446746",
      status: "Inactive",
    },
    {
      id: 3,
      name: "James Gun",
      email: "jamesgun@gmail.com",
      phone: "+919768446746",
      status: "Active",
    },
    {
      id: 4,
      name: "James Bond",
      email: "jamesbind@gmail.com",
      phone: "+917768446746",
      status: "Inactive",
    },
  ],
  filter:'All',
  contact:{
    name:"",
    email:"",
    phone:"",
    status:""
  },
  loader: false,
  error: '',
};


// export const fetchProduct = createAsyncThunk('product/fetchProduct',async()=>{
//     try {
//         const response = await api.get("/posts");
//         console.log({response:response.data})
//         return response.data
        
//     } catch (error) {
//         console.log(error)
//     }
// });
// export const CreateProduct = createAsyncThunk('product/addProduct',async(product)=>{
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(product),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json))

// })

export const getPost = createAsyncThunk("post/getPost", async ({ id }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
});
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ id }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }
);
export const createPost = createAsyncThunk(
  "post/createPost",
  async ({ values }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: values.title,
        body: values.body,
      }),
    }).then((res) => res.json());
  }
);
export const apiUpdatePost = createAsyncThunk(
  "post/updatePost",
  async ({ id, title, body }) => {
    console.log({id})
    console.log({body})
    console.log({title})
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     title,
    //     body,
    //   }),
    // });
    const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}`,{id:id,title:title,body:body});
    console.log(response.data)
    const data = await response.json();
    console.log({data})
    return data;
  }
);
const PostsSlice = createSlice({
  name: "post",
  initialState: {
    post:[],
    loading: false,
    error: '',

  },
  reducers: {
    updatePosts:function(state,action){
        state.post.map(post=>{
          if(post.id==action.payload.id){
            post.title=action.payload.title;
            post.body = action.payload.body
          }
        })
    }
  },
  extraReducers:(builder)=> {
    builder
    .addCase(getPost.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    })
    .addCase(getPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(deletePost.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    })
    .addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(createPost.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    })
    .addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(apiUpdatePost.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(apiUpdatePost.fulfilled, (state, action) => {
      state.loading = false;
      state.post.map(item=>{
        console.log(item.id)
        console.log(action.payload.id)
        if(item.id==action.payload.id){
          item.title = action.payload.title;
          item.body=action.payload.body
        }
      })
    })
    .addCase(apiUpdatePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  },
});
export const{updatePosts}=PostsSlice.actions;
export default PostsSlice.reducer;
// export const ProductSlice = createSlice({
//     name: 'contact',
//     initialState,
//     reducers: {},
//     extraReducers: builder => {
//       builder 
//       .addCase(fetchProduct.pending,(state)=>{
//         state.loader=true
//       })
//       .addCase(fetchProduct.fulfilled,(state,action)=>{
//         state.loader=false,
//         state.product=action.payload
//       })
//       .addCase(fetchProduct.rejected,(state,action)=>{
//         state.loader=false,
//         state.error=action.payload
//       })
//       .addCase(CreateProduct.pending,(state)=>{
//         state.loader=true
//       })
//       .addCase(CreateProduct.fulfilled,(state,action)=>{
//         state.loader=false,
//         state.product=action.payload
//       })
//       .addCase(CreateProduct.rejected,(state,action)=>{
//         state.loader=false,
//         state.error=action.payload
//       })
//     },
//   });
  // export const {addContact}=ProductSlice.actions;
  // export default ProductSlice.reducer;