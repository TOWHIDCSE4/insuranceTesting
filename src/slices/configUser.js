import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  updateUser,
  changePasswordApi,
  sendAvatar,
  loginApi,
  resetPasswordApi
} from '../services/configUser';

const initialState = {
  data: [],
  totalItem: 0,
  custom: [],
  contractById: null,
  refreshData: false,
  resetCode: ''
};



export const resetPassword = createAsyncThunk(
  'configUser/resetPassword',
  async (payload) => {
    const res = await resetPasswordApi(payload);
    return res
  }
);

export const login = createAsyncThunk(
  'configUser/changePassword',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await loginApi(payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  'configUser/changePassword',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await changePasswordApi(payload);
      return { data: res.data, message: 'Thay đổi mật khẩu thành công' };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const sendAvatars = createAsyncThunk(
  'configUser/sendAvatar',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await sendAvatar(payload);
      return { data: res.data, message: 'Update user thành công!' };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateUsers = createAsyncThunk(
  'configUser/updateUser',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await updateUser(payload);
      return { data: res.data, message: 'Update user thành công!' };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const configUser = createSlice({
  name: 'configUser',
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      console.log(action.payload.userInfo.resetCode);
      state.resetCode = action.payload.userInfo.resetCode
    },
  },
});


const { reducer } = configUser;

export default reducer;
