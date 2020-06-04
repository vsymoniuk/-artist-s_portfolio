import {
  PICTURES_FETCH_START,
  PICTURES_FETCH_SUCCESS,
  PICTURE_FETCH_ERROR,
  PICTURE_FETCH_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  pictures: [],
  picture: null,
  loading: false,
};

export default function pictureReducer(state = initialState, action) {
  switch (action.type) {
    case PICTURES_FETCH_START:
      return { ...state, loading: true };
    case PICTURES_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        pictures: action.pictures,
      };
      case PICTURE_FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          picture: action.picture,
        };
    case PICTURE_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
