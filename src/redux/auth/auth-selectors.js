export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

const selectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
};
export default selectors;
