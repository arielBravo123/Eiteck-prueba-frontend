import {
  CHARACTER_DETAILS,
  CHARACTER_FETCH_PAGE,
  CHARACTER_FETCH_PAGE_ERROR,
  CHARACTER_SEARCH_ERROR,
  CHARACTER_SEARCH,
} from "../constants/characters_constants";
import api from "../api/rick_and_morty";

export const getPage = (page) => async (dispatch) => {
  try {
    const { data } = await api.get(`character/?page=${page}`);
    dispatch({ type: CHARACTER_FETCH_PAGE, payload: data });
  } catch (error) {
    dispatch({ type: CHARACTER_FETCH_PAGE_ERROR, payload: error.message });
  }
};

export const characterSearchList = (page, characterName) => async (
  dispatch
) => {
  try {
    const { data } = await api.get(
      `character/?page=${page}&name=${characterName}`
    );
    dispatch({ type: CHARACTER_SEARCH, payload: data });
  } catch (error) {
    dispatch({ type: CHARACTER_SEARCH_ERROR, payload: error.message });
  }
};

export const characterDetails = (id) => async (dispatch) => {
  try {
    const { data } = await api.get(`character/${id}`);
    dispatch({ type: CHARACTER_DETAILS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
