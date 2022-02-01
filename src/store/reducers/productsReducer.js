import {
  ALL_PRODUCTS_REQ,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAILURE,
} from "../constants";

export const allProductReducer = (
  state = {
    isLoading: false,
    error: null,
    product: [],
    phoneProducts: [],
    trendyProducts: [],
    relatedProducts: [],
  },
  action
) => {
  console.log("Data in my reducer from action -->> ", action);
  switch (action.type) {
    case ALL_PRODUCTS_REQ:
      state = {
        ...state,
        product: action.data,
        isLoading: true,
      };
    case ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        product: action.data,
        isLoading: false,
      };
    case ALL_PRODUCTS_FAILURE:
      state = {
        ...state,
        product: action.data,
        isLoading: false,
        error: action.error,
      };
    // case RELATED_PRODUCT_REQ:
    //   state = {
    //     ...state,
    //     relatedProducts: action.data,
    //     isLoading: true,
    //   };
    // case RELATED_PRODUCT_SUCCESS:
    //   state = {
    //     ...state,
    //     relatedProducts: action.data,
    //     isLoading: false,
    //   };
    // case RELATED_PRODUCT_FAILURE:
    //   state = {
    //     ...state,
    //     relatedProducts: action.data,
    //     isLoading: false,
    //     error: action.error,
    //   };
    default:
      return state;
  }
};
