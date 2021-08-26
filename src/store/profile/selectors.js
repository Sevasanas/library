export const selectName = (state) => state.profile.name || "Me";
export const selectAuth = (state) => state.profile.authorized;
export const selectProfileError = (state) => state.profile.error;