import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


// User settings: (Local storage)
const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};

// Theme settings: (Local storage)
const themes = {
    pastel: 'pastel',
    forest: 'forest',
  };

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.pastel;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

// initial State
const initialState = {
  user:  getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.success('Logged out successfully');
    },
    toggleTheme: (state) => {
      const { forest, pastel } = themes;
      state.theme = state.theme === forest ? pastel : forest;
      document.documentElement.setAttribute('data-theme', state.theme); // creating new attribute in index.html  (setting and passing the value from useState)
      localStorage.setItem('theme', state.theme); // creating new variable in localstorage
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
