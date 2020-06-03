const initialState = {
  //artworks.all => [];
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ARTWORKS":
      return { ...state, all: [...action.payload] };
    default:
      return state;
  }
};
