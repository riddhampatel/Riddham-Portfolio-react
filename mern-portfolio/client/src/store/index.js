import { configureStore } from '@reduxjs/toolkit';

// Import slices
import themeSlice from './slices/themeSlice';
import portfolioSlice from './slices/portfolioSlice';
import notificationSlice from './slices/notificationSlice';

/**
 * Redux Store Configuration
 * Centralized state management for the application
 */
const store = configureStore({
  reducer: {
    theme: themeSlice,
    portfolio: portfolioSlice,
    notification: notificationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
  devTools: import.meta.env.DEV,
});

export default store;
