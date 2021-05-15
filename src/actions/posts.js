import * as api from "../api/index";
import {
  FETCH_ALL,
  CREATE,
  DELETE,
  LIKE,
  UPDATE,
} from "../constants/actionTypes";
// Action creators , they are functions that return actions
// below is the code for action getPosts  for which actions creators are used

// as we need to fetch all data there must be some time taken to complete ie  we are working with async data
// hence to deal with we  have to use redux thunks it allows us to add additional function ,
// and when u use redux thunk u need to do "dispatch(action)" instead of "return action"
export const getPosts = () => async (dispatch) => {
  // action must have type and payload property
  // type property is the one on which basic we  are returning something in posts reducer file in our case.
  // payload is a data where we store all our data in this case Posts
  // const action = { type: "FETCH_ALL", payload: [] };
  // dispatch(action);

  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log("update", error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log("delete", error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log("like", id);
  }
};
