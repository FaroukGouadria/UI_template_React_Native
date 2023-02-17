import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  post: {},
  loader: false,
  error: '',
};

export const fetchPostsApi = createAsyncThunk(
  'postApi/getData',
  async rejectWithValue => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      console.log({user: response.data});
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

export const DeleteApi = createAsyncThunk(
  'postApi/deleteData',
  async ({id}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method: 'DELETE',
    }).then(res => res.json())
    .then(response=>console.log(response))
    .catch((err)=>console.log(err))
  },
);

export const PostSlice = createSlice({
  name: 'postApi',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPostsApi.pending, state => {
        state.loader = true;
      })
      .addCase(fetchPostsApi.fulfilled, (state, action) => {
        (state.loader = false), (state.post = action.payload);
      })
      .addCase(fetchPostsApi.rejected, (state, action) => {
        (state.loader = false), (state.error = action.payload);
      })
      .addCase(DeleteApi.pending, state => {
        state.loader = true;
      })
      .addCase(DeleteApi.fulfilled, (state, action) => {
        (state.loader = false), 
        (state.newPost = action.payload);
      })
      .addCase(DeleteApi.rejected, (state, action) => {
        (state.loader = false), (state.error = action.payload);
      });
  },
});

export default PostSlice.reducer;
