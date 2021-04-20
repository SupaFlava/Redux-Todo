import { createStore } from "redux";
import Todoreducer from "../reducer";

export default createStore(
  Todoreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
