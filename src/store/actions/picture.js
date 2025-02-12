import axios from "../../axios/axios";
import { Toast } from "../../shared/toast";
import {
  PICTURES_FETCH_START,
  PICTURES_FETCH_SUCCESS,
  PICTURE_FETCH_ERROR,
  PICTURE_FETCH_SUCCESS,
  PICTURES_SORT_UPDATE,
  PICTURES_FILTER_UPDATE
} from "./actionTypes";

//=========FILTER_SORTING============\\
export function sortByYear(type) {
  return (dispatch, getState) => {
    const { pictures } = getState().picture;

    const newPictures = pictures.sort((a, b) => {
      if (type === "asc") return a.year - b.year;
      return b.year - a.year;
    });

    dispatch(updateSortPictures([...newPictures]));
  };
}

export function filterByTechnics(filter) {
  return (dispatch, getState) => {
    const { pictures } = getState().picture;

    const newPictures = pictures.filter(pic => pic.technics.includes(filter))

    dispatch(updateFilterPictures([...newPictures]));
  };
}

export function updateFilterPictures(pictures) {
  return {
    type: PICTURES_FILTER_UPDATE,
    pictures,
  };
}

export function updateSortPictures(pictures) {
  return {
    type: PICTURES_SORT_UPDATE,
    pictures,
  };
}

//=========DB_INTERACTION============\\
export function createPicture(picture) {
  return async (dispatch) => {
    try {
      await axios.post("pictures.json", picture);
      Toast("The picture was succesfully added");
    } catch (e) {
      dispatch(fetchPicturesError(e));
    }
  };
}

export function fetchPictures() {
  return async (dispatch) => {
    dispatch(fetchPicturesStart());

    try {
      const res = await axios.get(`pictures.json`);
      const pictures = Object.keys(res.data).map((key) => ({
        ...res.data[key],
        id: key,
      }));

      setTimeout(() => {
        dispatch(fetchPicturesSucces(pictures));
      }, 3000);
    } catch (e) {
      dispatch(fetchPicturesError(e));
    }
  };
}

export function fetchPictureById(id) {
  return async (dispatch) => {
    dispatch(fetchPicturesStart());

    try {
      const res = await axios.get(`pictures/${id}.json`);
      const quiz = res.data;
      setTimeout(() => {
        dispatch(fetchPictureSucces(quiz));
      }, 3000);
    } catch (e) {
      dispatch(fetchPicturesError(e));
    }
  };
}

export function deletePictureById(id) {
  return async (dispatch, getState) => {
    const { pictures } = getState().picture;
    const newPictures = pictures.filter((pic) => pic.id !== id);

    try {
      await axios.put(`pictures.json`, newPictures);
      Toast("Picture was successfully deleted");
    } catch (e) {
      dispatch(fetchPicturesError(e));
    }
  };
}

export function fetchPicturesStart() {
  return {
    type: PICTURES_FETCH_START,
  };
}

export function fetchPictureSucces(picture) {
  return {
    type: PICTURE_FETCH_SUCCESS,
    picture,
  };
}

export function fetchPicturesSucces(pictures) {
  return {
    type: PICTURES_FETCH_SUCCESS,
    pictures,
  };
}

export function fetchPicturesError(error) {
  return {
    type: PICTURE_FETCH_ERROR,
    error,
  };
}
