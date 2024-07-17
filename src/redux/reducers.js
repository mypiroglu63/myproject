const initialState = {
  profile: {
    tarih: "",
    city: "",
    egitim: "",
    role: "",
    yazi: "",
    name: "",
  },
  theme: "light",
  language: "en",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE_DATA":
      return {
        ...state,
        profile: action.payload,
      };
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
