import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMeApi, loginApi, resetPasswordApi } from '../services/auth';

const initialState = {
  accessToken: '',
  isAuth: false,
  status: '',
  me: {},
};

export const login = createAsyncThunk('auth/login', async (data) => {
  try {
    const res = await loginApi(data);
    return res.data;
  } catch (error) {
    return Promise.reject(error.data);
  }
});

export const ResetPassword = createAsyncThunk('auth/resetPassword', async (data) => {
  try {
    const res = await resetPasswordApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.data);
  }
});

export const getMe = createAsyncThunk('auth/user/Me', async (data) => {
  try {
    const res = await getMeApi(data);
    return res.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.accessToken = '';
      state.me = {};
    },
  },
  extraReducers: (builder) => {
    // LOGIN REDUCER
    builder.addCase(login.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'success';
      state.accessToken = action.payload.accessToken;
      state.me = action.payload.userInfo;
      state.isAuth = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'rejected';
      state.errorMessage = action.error.message;
    });
    // GET ME REDUCER
    builder.addCase(getMe.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.status = 'success';
      state.me = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.status = 'rejected';
      state.errorMessage = action.error.message;
    });
  },
});

const { reducer } = authSlice;
export const { logout } = authSlice.actions;
export default reducer;
