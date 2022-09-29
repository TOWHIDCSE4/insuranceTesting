import {createSlice, createAsyncThunk, isFulfilled} from '@reduxjs/toolkit';
import {getEvents, addEvents, patchEvents, deleteEvents, sendEvents} from '../services/events';

const initialState = {
  data: []
};

export const sendEvent = createAsyncThunk('events/send', async (payload) => {
  const res = await sendEvents(payload);
  return {
    data: res.data,
    message: `Gửi ${payload.type} thành công`
  };
});

export const getData = createAsyncThunk('events/get', async (payload) => {
  const res = await getEvents(payload);
  return res;
});

export const createData = createAsyncThunk(
  'events/create',
  async (payload, {rejectWithValue}) => {
    try {
      await addEvents(payload);
      const resGet = await getEvents({isTemplate: 0});
      return {
        data: resGet.data,
        message: "Tạo sự kiện thành công"
      };
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);
export const updateData = createAsyncThunk(
  'events/update', 
  async (payload, {rejectWithValue}) => {
    try {
      await patchEvents(payload.id, payload);
      const resGet = await getEvents({isTemplate: 0});
      return {
        data: resGet.data,
        message: "Thay đổi sự kiện thành công"
      };
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);
export const deleteData = createAsyncThunk(
  'events/delete',
  async (id, {rejectWithValue}) => {
    try {
      await deleteEvents(id);
      const resGet = await getEvents({isTemplate: 0});
      return {
        data: resGet.data,
        message: "Xóa sự kiện thành công"
      };
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    resetEvents: (state) => {
      state.data = [];
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      isFulfilled(getData, createData, updateData, deleteData),
      (state, action) => {
        state.data = action.payload.data
      }
    )
  }
});

const {reducer} = eventsSlice;
export const {resetEvents} = eventsSlice.actions;
export default reducer;
