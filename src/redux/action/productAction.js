import axios from "axios";
import {
  GET_PRODUCT_List,
  GET_PRODUCT_List_FAIL,
  GET_PRODUCT_List_SUCCESS,
} from ".";

export const getProductList = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_List });
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: GET_PRODUCT_List_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_List_FAIL });
  }
};
