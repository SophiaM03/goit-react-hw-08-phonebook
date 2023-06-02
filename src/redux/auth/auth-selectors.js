export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const isTokenExists = state => state.auth.token;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

const selectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
};
export default selectors;
