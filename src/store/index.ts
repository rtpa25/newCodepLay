/** @format */

import { configureStore } from '@reduxjs/toolkit';
import CellSliceActions from './slice/cells-slice';
import CodeBundleActions from './slice/code-bundle-slice';
import UserSliceActions from './slice/user-slice';

const store = configureStore({
  reducer: {
    cell: CellSliceActions,
    bundle: CodeBundleActions,
    user: UserSliceActions,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
