let isAuthenticated = false;

export const login = () => {
  isAuthenticated = true;
};

export const logout = () => {
  isAuthenticated = false;
};

export const isLoggedIn = () => {
    return !!localStorage.getItem('token');
};