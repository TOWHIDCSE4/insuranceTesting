import {createSlice, isPending, isRejected, isFulfilled} from '@reduxjs/toolkit';
import {LOADING_STATUS} from '../ultis/constant'

const initialState = {
  loading: LOADING_STATUS.idle,
  message: "",
  errors: []
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      isPending(),
      (state) => {
        return ({...state, ...{ loading: LOADING_STATUS.pending}})
      }
    ).addMatcher(
      isFulfilled(),
      (state, action) => {
        return ({...state, ...{ loading: LOADING_STATUS.succeeded, message: action.payload?.message}})
      }
    ).addMatcher(
      isRejected(),
      (state, action) => {
        if (!!action.payload?.errors) {
          return ({...state, ...{ loading: LOADING_STATUS.failed, errors: action.payload?.errors}})
        } else {
          return ({...state, ...{ loading: LOADING_STATUS.failed, message: action.payload?.message}})
        }
      }
    )
  },
});

const {reducer} = loadingSlice;

export default reducer;
