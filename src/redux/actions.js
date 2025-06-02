import { SET_FILTER } from "./types";

export const filterAction = (text) => ({
  type: SET_FILTER,
  payload: text,
});
