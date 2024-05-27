import { createAsyncThunk } from '@reduxjs/toolkit';
import API, { setAuthToken } from '../../services/axios';
import { toastError } from '../../helpers/toast';

export const signUpThunk = createAsyncThunk(
  'users/signup',
  async (formData, thunkApi) => {
    try {
      const { data } = await API.post('/users/signup', formData);
      localStorage.removeItem('signUp');
      setAuthToken(data.token);
      return data;
    } catch (error) {
      toastError(error.message);
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
      toastError(error.message);
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
      toastError(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentThunk = createAsyncThunk(
  'users/current',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const accessToken = state.user.accessToken;
      if (accessToken === null) {
        return rejectWithValue('Unable to fetch user');
      }
      setAuthToken(accessToken);
      const { data } = await API.get('/users/current');
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      toastError(error.message);
      return rejectWithValue(error);
    }
  }
);
