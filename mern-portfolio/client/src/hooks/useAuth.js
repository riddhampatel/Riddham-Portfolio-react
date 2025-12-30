import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  setUser,
  setTokens,
  logout as logoutAction,
  setLoading,
  setError,
  clearError,
} from '../store/slices/authSlice';

/**
 * Custom Hook for Authentication
 * Provides user state and auth methods
 */
export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const login = useCallback(async (email, password) => {
    dispatch(setLoading(true));
    try {
      // API call would go here
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  const updateUser = useCallback((user) => {
    dispatch(setUser(user));
  }, [dispatch]);

  const updateTokens = useCallback((tokens) => {
    dispatch(setTokens(tokens));
  }, [dispatch]);

  return {
    ...auth,
    login,
    logout,
    updateUser,
    updateTokens,
  };
};

export default useAuth;
