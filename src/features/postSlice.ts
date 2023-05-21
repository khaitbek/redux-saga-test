import { createSlice } from "@reduxjs/toolkit";
import { put, takeEvery } from "redux-saga/effects";
import { getPosts } from "../lib/api";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "../types";


export interface PostState {
  posts: Post[],
  isLoading: boolean,
  isError: unknown
}

const initialState: PostState = {
  posts: [],
  isLoading: true,
  isError: false
}

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = [...action.payload];
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading
    },
    setError: (state, action: PayloadAction<unknown>) => {
      state.isError = action.payload
    }
  }
});

function* getPostsAction() {
  yield put(setLoading());
  try {
    const posts: Post[] = yield getPosts();
    yield put(setPosts(posts));
  } catch (error) {
    yield put(setError);
  } finally {
    yield put(setLoading());
  }
}

export function* rootSaga() {
  yield takeEvery("POSTS_FETCH", getPostsAction);
}

export const { setPosts, setLoading, setError } = postSlice.actions;
export default postSlice.reducer