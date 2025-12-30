import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme as toggleThemeAction } from '../store/slices/themeSlice';

/**
 * Custom Hook for Theme Management
 * Provides dark/light mode toggle and current theme state
 */
const useTheme = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };

  return {
    isDark,
    toggleTheme,
  };
};

export default useTheme;
