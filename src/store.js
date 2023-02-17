import rootRducer from "./reducers/rootReducer";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
    rootRducer,
    composeWithDevTools(),
);
export default store;