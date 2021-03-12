/* 
Se combinan los reducers para poder acceder a su estado dependiendo del 
componente o pantalla que lo utilice
Facil escalamiento de la aplicación
*/
import { combineReducers } from "redux";
import characters from "./characters_reducers";
export default combineReducers({
  characters,
});
