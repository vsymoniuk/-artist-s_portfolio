import {
  PICTURES_FETCH_START,
  PICTURES_FETCH_SUCCESS,
  PICTURE_FETCH_ERROR,
  PICTURE_FETCH_SUCCESS,
  PICTURES_SORT_UPDATE,
  PICTURES_FILTER_UPDATE,
} from "../actions/actionTypes";

const initialState = {
  pictures: [],
  visiblePictures: [],
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
        visiblePictures: action.pictures
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
      case PICTURES_SORT_UPDATE:
        return {
          ...state,
          pictures: action.pictures,
          visiblePictures: action.pictures,
        } 
      case PICTURES_FILTER_UPDATE:
        return {
          ...state,
          visiblePictures: action.pictures,
        }
    default:
      return state;
  }
}
