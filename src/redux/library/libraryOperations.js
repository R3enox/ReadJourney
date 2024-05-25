import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API from '../../services/axios';

export const addLibrary = createAsyncThunk(
  'books/add',
  async (id, thunkApi) => {
    try {
      const { data } = await API.post(`books/add/${id}`);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getLibrary = createAsyncThunk('books/own', async (_, thunkAPI) => {
  try {
    const { data } = await API.get('books/own');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const removeLibraryBook = createAsyncThunk(
  'books/remove',
  async (id, thunkApi) => {
    try {
      const { data } = await API.delete(`books/remove/${id}`);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
