import axios from 'axios';
import { store } from '../redux/store';
import { setTokens } from '../redux/user/userReducer';

const instance = axios.create({
  baseURL: 'https://readjourney.b.goit.study/api',
});

export const setAuthToken = (token) => {
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      try {
        const { data } = await instance.get('/users/current/refresh');
        setAuthToken(data.token);
        setAuthToken(data.refreshToken);
        store.dispatch(setTokens(data));
        error.config.headers.authorization = `Bearer ${data.token}`;
        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const clearAuthToken = () => {
  instance.defaults.headers.common.authorization = '';
};

export default instance;