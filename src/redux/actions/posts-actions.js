import AppConstants from '../../app/app.constants';

export function getPosts() {
  return {
    type: AppConstants.ACTIONS.FETCH_POSTS,
  }
}

export function getPostById(id) {
  return {
    type: AppConstants.ACTIONS.FETCH_POST,
    id,
  }
}
