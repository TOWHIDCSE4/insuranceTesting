import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll, getMostView, view } from '../services/financeKnowledge';

const initialState = {
  articlesData: {},
  mostViewData: [],
};

export const getArticlesData = createAsyncThunk(
  'financeKnowledge/getArticles',
  async (params, { rejectWithValue }) => {
    try {
      const res = await getAll(params);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const mostViewArticles = createAsyncThunk(
  'financeKnowledge/most-view',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getMostView();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getView = createAsyncThunk(
  'financeKnowledge/view',
  async (id, { rejectWithValue }) => {
    try {
      await view(id);
      return { message: '' };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const financeKnowledgeSlice = createSlice({
  name: 'financeKnowledge',
  initialState,
  reducers: {},
  extraReducers: {
    [getArticlesData.fulfilled]: (state, action) => {
      state.articlesData = { ...action.payload };
    },
    [mostViewArticles.fulfilled]: (state, action) => {
      state.mostViewData = action.payload.articles;
    },
    // [getView.fulfilled]: (state, action) => {
    //   const index = state.mostViewData.findIndex(
    //     (data) => data.id === action.payload.article.id
    //   );
    //   state.mostViewData[index] = {
    //     ...state.mostViewData[index],
    //     ...action.payload.article,
    //   };
    //   const indexArticle = state.articlesData.articles.findIndex(
    //     (data) => data.id === action.payload.article.id
    //   );
    //   state.articlesData.articles[indexArticle] = {
    //     ...state.articlesData.articles[indexArticle],
    //     ...action.payload.article,
    //   };
    // },
  },
});

const { reducer } = financeKnowledgeSlice;
export default reducer;
