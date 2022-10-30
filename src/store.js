import { configureStore, createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
  vaibhav: 100,
};

const store = configureStore({
  reducer: {
    counterReducers: createReducer(initialState, {
      increment: (state, action) => {
        state.c += 1;
      },
      incrementbyVal: (state, action) => {
        state.c += action.payload;
      },
    }),
  },
});

export default store;
