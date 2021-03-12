import {
  CHARACTER_DETAILS,
  CHARACTER_FETCH_PAGE,
  CHARACTER_FETCH_PAGE_ERROR,
  CHARACTER_SEARCH,
  CHARACTER_SEARCH_ERROR,
} from "../constants/characters_constants";

const reducer = (state = [], action) => {
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
