import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API, { setAuthToken } from '../../services/axios';

export const signUpThunk = createAsyncThunk(
  'users/signup',
  async (formData, thunkApi) => {
    try {
      const { data } = await API.post('/users/signup', formData);
      localStorage.removeItem('signUp');
      setAuthToken(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  'users/signin',
  async (formData, thunkApi) => {
    try {
      const { data } = await API.post('/users/signin', formData);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signOutThunk = createAsyncThunk(
  'users/signout',
  async (_, thunkApi) => {
    try {
      const { data } = await API.post('/users/signout');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentThunk = createAsyncThunk(
  'users/current',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const accessToken = state.user.accessToken;
      setAuthToken(accessToken);
      const { data } = await API.get('/users/current');
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return thunkApi.rejectWithValue(error);
    }
  }
);
