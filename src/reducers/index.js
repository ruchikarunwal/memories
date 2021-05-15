import { combineReducers } from "redux";
import posts from "./posts";

// here actual code is like below but as key and value is same we are passing its just once.
// the values of posts is posts which we are exporting from reducer folder posts file function.
// export default combineReducers({ posts: posts });
export default combineReducers({ posts });
