import { createSelector, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

const contactsSlice = createSlice({
  name: 'userContacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        state => {
          state.loading = false;
          state.error = true;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        state => {
          state.loading = false;
          state.error = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        state => {
          state.loading = false;
        }
      );
  },
});

export const selectIstError = state => state.userContacts.error;
export const selectIsLoading = state => state.userContacts.loading;
export const selectContacts = state => state.userContacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    if (!nameFilter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

export default contactsSlice.reducer;
