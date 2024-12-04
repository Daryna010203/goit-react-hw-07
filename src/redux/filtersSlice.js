import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'userFilters',
  initialState: { filter: '' },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = state => state.userFilters.filter;

export default filtersSlice.reducer;
