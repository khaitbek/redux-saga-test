import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import postReducer, { rootSaga } from "../features/postSlice";

const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  reducer: {
    post: postReducer
  },
  middleware(getDefaultMiddleware) {
    return [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
  },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch