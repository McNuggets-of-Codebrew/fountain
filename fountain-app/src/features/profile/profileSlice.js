import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
    authenticateCredentials
} from '../common/api'; 

export const login = createAsyncThunk(
    'user/login',
    authenticateCredentials
);

const user = createSlice({
    name: 'user',
    initialState: {  },
    reducers: {}
    }); 
      
  export default user.reducer;
  