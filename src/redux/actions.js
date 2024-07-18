export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_PROFILE_DATA = "SET_PROFILE_DATA";
export const SET_HIREME_DATA = "SET_HIREME_DATA";

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setProfileData = (data) => ({
  type: SET_PROFILE_DATA,
  payload: data,
});

export const setHireMeData = (data) => ({
  type: SET_HIREME_DATA,
  payload: data,
});
