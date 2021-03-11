import {
  CHARACTER_DETAILS,
  CHARACTER_FETCH_PAGE,
} from "../constants/characters_constants";
import api from "../api/rick_and_morty";

export const getPage = (page) => async (dispatch) => {
  try {
    const { data } = await api.get(`character/?page=${page}`);
    dispatch({ type: CHARACTER_FETCH_PAGE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
