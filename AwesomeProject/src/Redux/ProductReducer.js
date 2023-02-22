import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import uuid from 'react-native-uuid';
const BASE_URL='http://192.168.130.169:3006/posts'
//get Post By id 
export const getPost = createAsyncThunk('post/getPost', async ({id}) => {
  return fetch(`${BASE_URL}/${id}`).then(res =>
    res.json(),
  );
});
//get All Posts
export const getPosts = createAsyncThunk('post/getPosts', async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    console.log({data});
    return data;
  } catch (error) {
    console.log(error);
  }
});
//delete Posts
export const deletePost = createAsyncThunk(
  'post/deletePost',
  async ({id}, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    console.log(id);
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      });
      console.log({response});
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
// create new Post
export const createPost = createAsyncThunk(
  'post/createPost',
  async ({title, body}) => {
    return fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        description: body,
      }),
    }).then(res => res.json());
  },
);
//update Post
export const apiUpdatePost = createAsyncThunk(
  'post/updatePost',
  async ({id, title, body}, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
      const response = await fetch(
        `${BASE_URL}/${id}`,
        {
          method:'PUT',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            title: title,
            description: body,
          }),
        },
      );
      const data = await response.json()
      console.log({res:data})
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
//Slice Posts
const PostsSlice = createSlice({
  name: 'post',
  initialState: {
    post: [],
    loading: false,
    error: '',
  },
  reducers: {
    AddPosts: function (state, action) {
      const {title, body} = action.payload;
      state.post.push({title, body});
    },
    updatePosts: function (state, action) {
      state.post.map(post => {
        if (post.id == action.payload.id) {
          post.title = action.payload.title;
          post.body = action.payload.body;
        }
      });
    },
    deletePosts: (state, action) => {
      const postId = action.payload;
      console.log({postId});
      state.post = state.post.filter(post => post.id !== postId);
    },
    updatePostes: function (state, action) {
      state.post.map(item => {
        console.log(item.id);
        console.log(action.payload.id);
        if (item.id == action.payload.id) {
          item.title = action.payload.title;
          item.body = action.payload.body;
        }
      });
    },
  },
  extraReducers: builder => {
    builder
      //get Posts by id
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
      //get All Posts
      .addCase(getPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.post = [action.payload];
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //delete Posts
      .addCase(deletePost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        console.log({actions: action.payload});
        console.log({
          supper: state.post.filter(el => el.id !== action.payload),
        });
        state.post = state.post.filter(el => el.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //Create New Posts
      .addCase(createPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post[0].push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //Update Posts
      .addCase(apiUpdatePost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(apiUpdatePost.fulfilled, (state, action) => {
        state.loading = false;
        // console.log({payload:action.payload})
        // state.post = action.payload
        // console.log({action:state.post})
        state.post.map(item => {
          // console.log({id:item.id});
          if (item.id == action.payload.id) {
            item.title = action.payload.title;
            item.description = action.payload.body;
          }
        });
      })
      .addCase(apiUpdatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {updatePosts, AddPosts, deletePosts, updatePostes} =
  PostsSlice.actions;
export default PostsSlice.reducer;
