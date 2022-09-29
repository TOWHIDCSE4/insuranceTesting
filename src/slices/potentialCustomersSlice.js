import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createPotentialCustomersApi,
  deletePotentialCustomerApi,
  getCompaniesApi,
  getPotentialCustomerApi,
  getPotentialCustomersApi,
  updatePotentialCustomerApi,
} from "../services/apis/potentialCustomers";

export const getPotentialCustomers = createAsyncThunk(
  "potentialCustomers/GET_POTENTIAL_CUSTOMERS",
  async (data) => {
    try {
      const response = await getPotentialCustomersApi(data);
      return response.data;
    } catch (error) {
      return Promise.reject(error.data);
    }
  },
);

export const createPotentialCustomers = createAsyncThunk(
  "potentialCustomers/CREATE_POTENTIAL_CUSTOMER",
  async (data, { dispatch }) => {
    try {
      const response = await createPotentialCustomersApi(data);
      dispatch(getPotentialCustomers());
      dispatch(getCompanies())
      return response.data;
    } catch (error) {
      return Promise.reject(error.data);
    }
  },
);

export const deletePotentialCustomers = createAsyncThunk(
  "potentialCustomers/CREATE_POTENTIAL_CUSTOMER",
  async (data, { dispatch }) => {
    try {
      const response = await deletePotentialCustomerApi(data);
      dispatch(getPotentialCustomers());
      dispatch(getCompanies())
      return response.data;
    } catch (error) {
      return Promise.reject(error.data);
    }
  },
);

export const getCompanies = createAsyncThunk(
  "potentialCustomers/GET_COMPANIES",
  async () => {
    try {
      const res = await getCompaniesApi();
      return res;
    } catch (error) {
      return Promise.reject(error.data);
    }
  },
);

export const getPotentialCustomer = createAsyncThunk(
  "potentialCustomers/GET_POTENTIAL_CUSTOMER",
  async (data) => {
    try {
      const res = await getPotentialCustomerApi(data);
      return res;
    } catch (error) {
      return Promise.reject(error.data);
    }
  },
);

export const updatePotentialCustomer = createAsyncThunk(
  "potentialCustomers/UPDATE_POTENTIAL_CUSTOMER",
  async (data, {dispatch}) => {
    try {
      const res = await updatePotentialCustomerApi(data);
      dispatch(getPotentialCustomers())
      return res;
    } catch (error) {
      return Promise.reject(error.data);
    }
  },
);

const initialState = {
  potentialCustomers: [],
  companies: [],
  potentialCustomer: {},
  loading: false,
  error: {},
};

const potentialCustomersSlice = createSlice({
  name: "potentialCustomers",
  initialState,
  reducers: {},
  extraReducers: {
    [getPotentialCustomers.fulfilled]: (state, action) => {
      state.loading = false;
      state.potentialCustomers = action.payload.data;
    },
    [getPotentialCustomers.pending]: (state) => {
      state.loading = true;
    },
    [getPotentialCustomers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [createPotentialCustomers.fulfilled]: (state) => {
      state.loading = false;
    },
    [createPotentialCustomers.pending]: (state) => {
      state.loading = true;
    },
    [createPotentialCustomers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [deletePotentialCustomers.fulfilled]: (state) => {
      state.loading = false;
    },
    [deletePotentialCustomers.pending]: (state) => {
      state.loading = true;
    },
    [deletePotentialCustomers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [getCompanies.fulfilled]: (state, action) => {
      state.loading = false;
      state.companies = action.payload.data;
    },
    [getCompanies.pending]: (state) => {
      state.loading = true;
    },
    [getCompanies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [getPotentialCustomer.fulfilled]: (state, action) => {
      state.loading = false;
      state.potentialCustomer = action.payload.data;
    },
    [getPotentialCustomer.pending]: (state) => {
      state.loading = true;
    },
    [getPotentialCustomer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [updatePotentialCustomer.fulfilled]: (state, action) => {
      state.loading = false;
      state.potentialCustomer = action.payload.data;
    },
    [updatePotentialCustomer.pending]: (state) => {
      state.loading = true;
    },
    [updatePotentialCustomer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default potentialCustomersSlice.reducer;
