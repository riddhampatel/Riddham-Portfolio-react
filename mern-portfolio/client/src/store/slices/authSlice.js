import { createSlice } from '@reduxjs/toolkit';

/**
 * Auth Slice
 * Manages user authentication state including login, logout, token management
 */
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    // Set user after login
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },

    // Set tokens
    setTokens: (state, action) => {
      const { accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      localStorage.setItem('accessToken', accessToken);
      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      }
    },

    // Clear auth on logout
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },

    // Set loading state
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    // Set error
    setError: (state, action) => {
      state.error = action.payload;
    },

    // Clear error
    clearError: (state) => {
      state.error = null;
    },

    // Restore session from localStorage
    restoreSession: (state) => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        state.accessToken = accessToken;
        // Validate token and fetch user data
      }
    },
  },
});

export const {
  setUser,
  setTokens,
  logout,
  setLoading,
  setError,
  clearError,
  restoreSession,
} = authSlice.actions;

export default authSlice.reducer;
