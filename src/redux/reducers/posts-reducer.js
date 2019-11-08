import AppConstants from '../../app/app.constants';

const initialState = {
  posts: [],
};

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case AppConstants.ACTIONS.SET_POSTS_LIST:
      return {
        ...state,
        posts: action.payload.posts,
      };

    default:
      return state;
  }
}

export default postsReducer;
