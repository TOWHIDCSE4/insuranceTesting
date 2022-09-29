import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  create,
  getAll,
  remove,
  importFile,
} from '../services/paymentManagement';

const initialState = { isReload: false, data: [], total: 0 };

export const retrieveData = createAsyncThunk(
  'paymentManagement/getAll',
  async (params, { rejectWithValue }) => {
    try {
      const res = await getAll(params);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createPayment = createAsyncThunk(
  'paymentManagement/create',
  async (params, { rejectWithValue }) => {
    try {
      const res = await create(params);
      return { data: res.data, message: res.statusText };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const uploadFile = createAsyncThunk(
  'paymentManagement/upload',
  async (params, { rejectWithValue }) => {
    try {
      const res = await importFile(params);
      console.log(res)
      return { data: res.data, message: res.statusText };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deletePayment = createAsyncThunk(
  'paymentManagement/delete',
  async (params, { rejectWithValue }) => {
    try {
      const res=await remove(params);
      return { id: params.transactionIds, message: res.statusText };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const paymentManagementSlice = createSlice({
  name: 'paymentManagement',
  initialState,
  reducers: {},
  extraReducers: {
    [createPayment.fulfilled]: (state, action) => {
      state.isReload = true;
      // state.data.push(action.payload);
    },
    [retrieveData.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.total = action.payload.total;
      state.isReload = false;
    },
    [uploadFile.fulfilled]: (state, action) => {
      state.isReload = true;
    },
    [deletePayment.fulfilled]: (state, action) => {
      // let index = state.data.findIndex(({ id }) =>
      //   action.payload.id.includes(id)
      // );
      // state.data.splice(index, 1);
      state.isReload = true;
      // state.data = state.data.filter(
      //   ({ id }) => !action.payload.id.includes(id)
      // );
    },
  },
});

const { reducer } = paymentManagementSlice;
export default reducer;
