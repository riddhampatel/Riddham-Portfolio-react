import { createSlice } from '@reduxjs/toolkit';

/**
 * Notification Slice
 * Manages toast notifications and alerts
 */
const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications: [],
  },
  reducers: {
    // Add notification
    addNotification: (state, action) => {
      const notification = {
        id: Date.now(),
        ...action.payload,
      };
      state.notifications.push(notification);
    },

    // Remove notification
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload
      );
    },

    // Clear all notifications
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { addNotification, removeNotification, clearNotifications } =
  notificationSlice.actions;

export default notificationSlice.reducer;
