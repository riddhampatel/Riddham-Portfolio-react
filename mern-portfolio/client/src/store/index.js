import { configureStore } from '@reduxjs/toolkit';

// Import slices
import authSlice from './slices/authSlice';
import themeSlice from './slices/themeSlice';
import portfolioSlice from './slices/portfolioSlice';
import notificationSlice from './slices/notificationSlice';

/**
 * Redux Store Configuration
 * Centralized state management for the application
 */
const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSlice,
    portfolio: portfolioSlice,
    notification: notificationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these actions/paths for serialization checks
        ignoredActions: ['auth/setUser'],
        ignoredPaths: ['auth.user.loginTime'],
      },
    }),
  devTools: import.meta.env.DEV,
});

export default store;
