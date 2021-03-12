/* 
Reducer para los personajes donde se obtiene la acción 
*/
import {
  CHARACTER_DETAILS,
  CHARACTER_FETCH_PAGE,
  CHARACTER_FETCH_PAGE_ERROR,
  CHARACTER_SEARCH,
  CHARACTER_SEARCH_ERROR,
} from "../constants/characters_constants";

/* 
Se maneja el estado general de los personajes en base a las diferentes acciones creadas 
*/
const reducer = (state = [], action) => {
  /* 
Entradas:
state: estado: inicialmente vacio
action: accion con el payload 
Salidas:
En base al tipo especificado en las acciones retorna los datos o errores dependiendo de la accion
*/
  switch (action.type) {
    case CHARACTER_FETCH_PAGE:
      /*  action.payload = characters*/
      return { characters: action.payload };
    case CHARACTER_FETCH_PAGE_ERROR:
      return { error: action.payload };
    case CHARACTER_DETAILS:
      return { singleCharacter: action.payload };
    case CHARACTER_SEARCH:
      return { characters: action.payload };
    case CHARACTER_SEARCH_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};

export default reducer;
