import {
  GET_PRODUCT_List,
  GET_PRODUCT_List_FAIL,
  GET_PRODUCT_List_SUCCESS,
} from "../action";

const inititalState = {
  products: [],
  loading: false,
};
const productReducer = (state = inititalState, action) => {
  switch (action.type) {
    case GET_PRODUCT_List:
      return { ...state, loading: true };
    case GET_PRODUCT_List_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case GET_PRODUCT_List_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};
export default productReducer;
