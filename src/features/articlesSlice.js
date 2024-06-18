// features/articlesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newsApi from '../services/newsApi';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (params) => {
    const response = await newsApi.getArticles(params);
    return response;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    category: 'general',
    page: 1,
    totalResults: 0,
    searchQuery: '',
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearchQueryy: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles || [];
        state.totalResults = action.payload.totalResults || 0;
        state.error = null;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage, setSearchQueryy } = articlesSlice.actions;
export default articlesSlice.reducer;