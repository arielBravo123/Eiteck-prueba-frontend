/* 
Acciones:
- Las acciones se conectan a la Api realizan el dispatch al reducer
- Los componentes o pantallas usan estas acciones para actualizar las peticiones y estados
*/

import {
  CHARACTER_DETAILS,
  CHARACTER_FETCH_PAGE,
  CHARACTER_FETCH_PAGE_ERROR,
  CHARACTER_SEARCH_ERROR,
  CHARACTER_SEARCH,
} from "../constants/characters_constants";
import api from "../api/rick_and_morty";

/* 
Accion para obtener los personajes por pagina de la API
*/
export const getPage = (page) => async (dispatch) => {
  /* 
Entradas:
page: Numero de pagina de la cual se obtendran los personajes
Salidas:
Realiza el dispach con el tipo y el payload
*/
  try {
    const { data } = await api.get(`character/?page=${page}`);
    dispatch({ type: CHARACTER_FETCH_PAGE, payload: data });
  } catch (error) {
    dispatch({ type: CHARACTER_FETCH_PAGE_ERROR, payload: error.message });
  }
};

/* 
Accion para obtener los personajes en base al nombre
*/
export const characterSearchList = (page, characterName) => async (
  dispatch
) => {
  /* 
Entradas:
page: Numero de pagina de la cual se obtendran los personajes
characterName: Nombre del personaje
Salidas:
Realiza el dispach con el tipo y el payload
*/
  try {
    const { data } = await api.get(
      `character/?page=${page}&name=${characterName}`
    );
    dispatch({ type: CHARACTER_SEARCH, payload: data });
  } catch (error) {
    dispatch({ type: CHARACTER_SEARCH_ERROR, payload: error.message });
  }
};

/* 
Accion para obtener un personaje en base al id
*/
export const characterDetails = (id) => async (dispatch) => {
  /* 
Entradas:
id: id del personaje del cual se obtendrá la información
Salidas:
Realiza el dispach con el tipo y el payload
*/
  try {
    const { data } = await api.get(`character/${id}`);
    dispatch({ type: CHARACTER_DETAILS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
