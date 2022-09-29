import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { create, getUser, getAll, updateRole, getSearch, remove, removeUsers, uploadFile, resetUser } from '../services/userManagement';

const initialState = {
  data: [],
  totalItem: null,
  messageError: null,
  refreshList: false,
};

export const searchUser = createAsyncThunk('userManagement/getSearch', async (payload) => {
  const res = await getSearch(payload);
  return res.data;
});

export const createUser = createAsyncThunk(
  'userManagement/createUser',
  async (payload,{rejectWithValue}) => {
    try {
      const res = await create(payload);
      return {
        data: res.data,
        message: "Tạo user thành công"
      };
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);
export const getUserProfile = createAsyncThunk('userManagement/getUser', async () => {
  const res = await getUser();
  return res.data;
});
export const updateUser = createAsyncThunk(
  'userManagement/updateUser',
  async ({id, data}) => {
    const res = await updateRole({id, data});
    return res.data;
  }
);
export const resetUserId = createAsyncThunk(
  'userManagement/resetUser',
  async (data) => {
    const res = await resetUser(data);
    return res.data;
  }
);
export const uploadFiles = createAsyncThunk(
  'userManagement/uploadFile',
  async (data) => {
    const res = await uploadFile(data);
    return res.data;
  }
);
export const retrieveData = createAsyncThunk(
  'userManagement/retrieve',
  async ({ page, limit }) => {
    const res = await getAll(page, limit);
    return res.data;
  }
);
export const removeUser = createAsyncThunk(
  'userManagement/removeUser',
  async (id) => {
    await remove(id);
    return { id };
  }
);
export const removeUserIds = createAsyncThunk(
  'userManagement/removeUser',
  async (data) => {
    const res = await removeUsers(data);
    return res.data;
  }
);

const useManagement = createSlice({
  name: 'userManagement',
  initialState,
  extraReducers: {
    [searchUser.fulfilled]: (state, action) => {
      state.data = [...action.payload?.data];
      state.totalItem = action.payload.total;
      state.refreshList=false
    },
    [createUser.fulfilled]: (state) => {
      state.refreshList=true
    },
    [retrieveData.fulfilled]: (state, action) => {
      state.totalItem = action.payload.total;
      state.data = action.payload.data;
      state.refreshList=false
    },
    [resetUserId.fulfilled]: (state, action) => {
      state.refreshList=true
    },
    [updateUser.fulfilled]: (state, action) => {
      // state.refreshList=true
    },
    [removeUser.fulfilled]: (state, action) => {
      state.refreshList=true
    },
    [removeUserIds.fulfilled]: (state, action) => {
      state.refreshList=true
    },
  },
});

const { reducer } = useManagement;

export default reducer;
