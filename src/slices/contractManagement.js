import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContracts,
  getAll,
  update,
  getCustom,
  getById,
} from '../services/contractManagement';

const initialState = {
  data: [],
  totalItem: 0,
  custom: [],
  contractById: null,
  refreshData: false,
};

export const createContract = createAsyncThunk(
  'contractManagement/createContract',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await createContracts(payload);
      return { data: res.data, message: res.statusText };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCustoms = createAsyncThunk(
  'contractManagement/getCustoms',
  async (payload) => {
    const res = await getCustom(payload);
    return res.data;
  }
);

// export const getByIds = createAsyncThunk(
//   'contractManagement/getContractId',
//   async (payload) => {
//     const res = await getById(payload);
//     return res.data;
//   }
// );

export const updateContract = createAsyncThunk(
  'contractManagement/updateContract',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await update({ id, data });
      return { data: res.data, message: res.statusText };
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const retrieveData = createAsyncThunk(
  'contractManagement/retrieveData',
  async (payload) => {
    const res = await getAll(payload);
    return res.data;
  }
);

const contractManagement = createSlice({
  name: 'contractManagement',
  initialState,
  extraReducers: {
    [createContract.fulfilled]: (state) => {
      state.refreshData = true;
      state.refreshData = false;
    },
    [retrieveData.fulfilled]: (state, action) => {
      state.data = [...action.payload.contracts];
      state.totalItem = action.payload.count;
      state.refreshData = true;
      state.refreshData=false
    },
    [getCustoms.fulfilled]: (state, action) => {
      state.custom = [...action.payload.data];
    },
    [updateContract.fulfilled]: (state) => {
      state.refreshData = true;
      state.refreshData = false;

    },
  },
});

export const { setRefresh } = contractManagement.actions;

const { reducer } = contractManagement;

export default reducer;
