import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { create, getAll, remove, update } from '../services/manageContent';

const initialState = { isReload: false, data: [], totalItem: 0 };

export const retrieveData = createAsyncThunk(
  'manageContent/getAll',
  async ({ type = 'articles', params }, { rejectWithValue }) => {
    try {
      const res = await getAll(type, params);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createContent = createAsyncThunk(
  'manageContent/create',
  async ({ type, payload }, { rejectWithValue }) => {
    try {
      const res = await create(type, payload);

      return { data: res.data, message: res.statusText };
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateContent = createAsyncThunk(
  'manageContent/update',
  async ({ type, id, payload }, { rejectWithValue }) => {
    try {
      const res = await update(type, id, payload);
      return { data: { ...res.data }, message: res.statusText };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteContent = createAsyncThunk(
  'manageContent/delete',
  async ({ type, id }, { rejectWithValue }) => {
    try {
      const res = await remove(type, id);
      return { id, message: res.statusText };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const manageContentSlice = createSlice({
  name: 'manageContent',
  initialState,
  reducers: {},
  extraReducers: {
    [createContent.fulfilled]: (state, action) => {
      state.isReload = true;
      // state.data.push(action.payload.article);
    },
    [retrieveData.fulfilled]: (state, action) => {
      state.data = action.payload.articles;
      state.totalItem = action.payload.articlesCount;
      state.isReload = false;
    },
    [updateContent.fulfilled]: (state, action) => {
      /* const index = state.findIndex(
        (data) => data.id === action.payload.data.article.id
      );
      state[index] = {
        ...state[index],
        ...action.payload.article,
      }; */
      state.isReload = true;
    },
    [deleteContent.fulfilled]: (state, action) => {
      // let index = state.findIndex(({ id }) => id == action.payload.id);
      // state.splice(index, 1);
      state.isReload = true;
    },
  },
});

const { reducer } = manageContentSlice;
export default reducer;
