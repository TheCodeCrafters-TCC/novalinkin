import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "./systemSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import notificationReducer from "./notificationSlice";
import communityReducer from "./communitySlice";

export const store = configureStore({
  reducer: {
    system: systemReducer,
    auth: authReducer,
    user: userReducer,
    notifications: notificationReducer,
    community: communityReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
