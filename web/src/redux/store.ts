import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "./systemSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import notificationReducer from "./notificationSlice";
import communityReducer from "./communitySlice";
import articleReducer from "./articleSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    article: articleReducer,
    user: userReducer,
    community: communityReducer,
    notifications: notificationReducer,
    system: systemReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
