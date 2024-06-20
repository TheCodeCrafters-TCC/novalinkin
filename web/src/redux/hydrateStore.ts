// import { configureStore, ThunkAction, Action, combineReducers, A } from '@reduxjs/toolkit';
// import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
// import systemReducer from './systemSlice';

// // Define the state interface
// export interface State {
//   system: {
//     theme: string;
//   };
// }

// // Create the root reducer
// const rootReducer = combineReducers({
//   system: systemReducer,
// });

// // Create a master reducer to handle the HYDRATE action
// const masterReducer = (state: State | undefined, action: AnyAc) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       ...action.payload, // apply delta from hydration
//     };
//     return nextState;
//   } else {
//     return rootReducer(state, action);
//   }
// };

// // Create a makeStore function
// const makeStore = (context: Context) => {
//   return configureStore({
//     reducer: masterReducer,
//     devTools: process.env.NODE_ENV !== 'production',
//   });
// };

// // Export the wrapper
// export const wrapper = createWrapper(makeStore, { debug: true });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof makeStore>;
// export type AppDispatch = AppStore['dispatch'];
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
