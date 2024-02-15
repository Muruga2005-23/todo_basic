import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    task: undefined,
    error: null,
    loading: false,
  },
  reducers: {
    loader(state) {
      state.loading = true;
    },
    addTask(state, action) {
      state.task = action.payload;
      state.loading = false;
    },
  },
});

export const addTask = tasksSlice.actions;
export default tasksSlice.reducer;
