const initialState = { loading: true, categories: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_START":
      return { ...state, loading: action.payload };

    case "PRODUCTS_FETCHED":
      return {
        loading: false,
        categories: action.payload
      };

    default:
      return state;
  }
};
