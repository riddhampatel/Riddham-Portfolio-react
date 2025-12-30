import { createSlice } from '@reduxjs/toolkit';

/**
 * Theme Slice
 * Manages dark/light mode and theme preferences
 */
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDark: localStorage.getItem('theme') === 'dark' || true,
    primaryColor: 'secondary',
    accentColor: 'accent',
  },
  reducers: {
    // Toggle dark/light mode
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem('theme', state.isDark ? 'dark' : 'light');
      // Apply theme to document immediately
      if (typeof document !== 'undefined') {
        if (state.isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    },

    // Set specific theme
    setTheme: (state, action) => {
      state.isDark = action.payload;
      localStorage.setItem('theme', action.payload ? 'dark' : 'light');
      if (typeof document !== 'undefined') {
        if (action.payload) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    },

    // Set primary color
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },

    // Set accent color
    setAccentColor: (state, action) => {
      state.accentColor = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, setPrimaryColor, setAccentColor } =
  themeSlice.actions;

export default themeSlice.reducer;
