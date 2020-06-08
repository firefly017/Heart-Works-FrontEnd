const initialState = {
  //artworks.all => [];
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ARTWORKS":
      return { ...state, all: [...action.payload] };
    case "ADD_BID":
      const updateTheBids =  state.all.map(artwork => {
        if(action.payload.artworkId === artwork.id){
          const currentArwork =  artwork
          currentArwork.bids = [...artwork.bids, action.payload]
          return currentArwork
        }
        return artwork
      })
      return { ...state , all: updateTheBids} 
    default:
      return state;
  }
};
