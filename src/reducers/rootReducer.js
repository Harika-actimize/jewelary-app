// import signUpReducer from './signUpReducer';
import loadFavImgReducer from './userReducer'
import userReducer from './sampleReducer';
// import googleSignInReducer from './googleSigninReducer';
import { combineReducers } from "redux";
const rootRducer = combineReducers({
    loadFavImgdata: loadFavImgReducer,
    userData: userReducer
    // signupdata:signUpReducer,
    // logindata:loginReducer,
    // googledata:googleSignInReducer,
});
export default rootRducer;