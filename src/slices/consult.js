import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll } from '../services/consult';

const initialState = { isReload: false, data: [],total:0 };

export const getConsult = createAsyncThunk('consult/getall', async (params , { rejectWithValue }) => {
  try {
    const res = await getAll(params);
    // console.log(params);
    return { data: res.data, message: '' };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const ConsultSlice = createSlice({
  name: 'consult',
  initialState,
  extraReducers: {
    [getConsult.fulfilled]: (state, action) => {
      // console.log(action.payload.data)
      state.data = action.payload.data.data;
      state.total=action.payload.data.count
      state.isReload = false;
    },
  },
});

const { reducer } = ConsultSlice;

export default reducer;
