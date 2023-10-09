import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      return [];
    },
    addAccount(state, action) {
      const prevAccounts = state[0].accounts;
      state[0].accounts = [];
      prevAccounts.forEach((item) => state[0].accounts.push(item));
      state[0].accounts.push(action.payload);
    },
    editAccount(state, action) {
      const accountIndex = state[0]?.accounts?.indexOf(
        (item) => item.id === action.payload
      );

      const arr = state[0].accounts;
      arr.splice(accountIndex, 1, action.payload);
      state[0].accounts = [];
      arr.forEach((item) => state[0].accounts.push(item));
    },
    addToWatchlist(state, action) {
      const prevWatchList = state[0].watchList;
      state[0].watchList = [];
      prevWatchList.forEach((item) => state[0].watchList.push(item));
      state[0].watchList.push(action.payload);
    },
    removeFromWatchList(state, action) {
      const index = state[0].watchList.indexOf(action.payload);
      if (index > -1) {
        state[0].watchList.splice(index, 1);
      }
    },
    addUserPreferences(state, action) {
      state[0].userPreferences.push(action.payload);
    },
    removeUserPreference(state, action) {
      const arr = state[0]?.userPreferences.filter(
        (item) => item.id !== action.payload
      );
      state[0].userPreferences = [];
      arr.forEach((item) => state[0]?.userPreferences.push(item));
    },
  },
});

export const {
  addUser,
  removeUser,
  addAccount,
  editAccount,
  addToWatchlist,
  removeFromWatchList,
  addUserPreferences,
  removeUserPreference,
} = userSlice.actions;
