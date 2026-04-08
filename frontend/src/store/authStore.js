import { create } from 'zustand';

// Simple Auth Store
export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem('token') || null,

  login: (userData, token) => {
    localStorage.setItem('token', token);
    set({ user: userData, isAuthenticated: true, token });
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, isAuthenticated: false, token: null });
  },

  setUser: (userData) => {
    set({ user: userData, isAuthenticated: true });
  }
}));
