import {createSlice, createAction, createAsyncThunk, isFulfilled} from '@reduxjs/toolkit';
import {getCustomerCare, addCustomerCare, patchCustomerCare, deleteCustomerCare} from '../services/customerCare';

const initialState = {
  data: [],
  customerData: {
    customerId: 0
  },
  payloadGet: {}
};

export const setCustomerData = createAction('customerCare/setCustomerData')
export const resetCustomerData = createAction('customerCare/resetCustomerData')

export const getData = createAsyncThunk('customerCare/get', async (payload, { rejectWithValue }) => {
  try {
    const res = await getCustomerCare(payload);
    return {
      data: res.data,
      payload: payload
    }
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
});

export const createData = createAsyncThunk(
  'customerCare/create',
  async (payload, { rejectWithValue, getState }) => {
    try {
      await addCustomerCare(payload);
      const res = await getCustomerCare(getState().customerCare.payloadGet);
      return {
        data: res.data,
        message: "Tạo thông tin thành công"
      };
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);
export const updateData = createAsyncThunk(
  'customerCare/update',
  async ({id, data}, { rejectWithValue }) => {
    try {
      const res = await patchCustomerCare(id, data);
      return {
        data: res.data,
        message: "Thay đổi thông tin thành công"
      };
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);
export const deleteData = createAsyncThunk(
  'customerCare/delete',
  async (id, { rejectWithValue }) => {
    try {
      await deleteCustomerCare(id);
      return {
        id: id,
        message: "Xóa thông tin thành công"
      };
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

const customerCareSlice = createSlice({
  name: 'customerCare',
  initialState,
  extraReducers: {
    [setCustomerData]: (state, action) => {
      state.customerData = action.payload
    },
    [resetCustomerData]: (state) => {
      state.data = []
      state.customerData = {customerId: 0}
      state.payloadGet = {}
    },
    [getData.fulfilled]: (state, action) => {
      state.payloadGet = action.payload.payload
      state.data = action.payload.data
    },
    [createData.fulfilled]: (state, action) => {
      state.data = action.payload.data
    }
  }
});

const {reducer} = customerCareSlice;

export default reducer;
