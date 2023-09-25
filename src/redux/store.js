import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";

const Store = createStore(Reducer, applyMiddleware(thunk));
export default Store;
