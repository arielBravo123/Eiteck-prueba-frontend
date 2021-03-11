import {
  CHARACTER_DETAILS,
  CHARACTER_FETCH_PAGE,
} from "../constants/characters_constants";

export default (state = [], action) => {
  switch (action.type) {
    case CHARACTER_FETCH_PAGE:
      /*  action.payload = characters*/
      return action.payload;
    case CHARACTER_DETAILS:
      return state;
    default:
      return state;
  }
};
