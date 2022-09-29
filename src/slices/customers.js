import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCustomers } from "../services/customers";

const initialState = {
  data: [],
  selectedCustomer: {},
};

export const getCustomerList = createAsyncThunk("customers/get", async () => {
  try {
    const res = await getCustomers();
    return res.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
});

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setSelectedCustomer: (state, action) => {
      state.selectedCustomer = state.data?.find((customaer) => customaer?.customerId === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCustomerList.fulfilled, (state, action) => {
      state.data = action.payload?.customers;
    });
  },
});
export const { setSelectedCustomer } = customerSlice.actions;

export default customerSlice.reducer;
