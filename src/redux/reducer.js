import { SET_FILTER } from "./types";

const initialState = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eva" },
    { id: 6, name: "Frank" },
    { id: 7, name: "Grace" },
    { id: 8, name: "Hannah" },
    { id: 9, name: "Ian" },
    { id: 10, name: "Julia" },
    { id: 11, name: "Kevin" },
    { id: 12, name: "Laura" },
    { id: 13, name: "Mike" },
    { id: 14, name: "Mia" },
    { id: 15, name: "Nina" },
    { id: 16, name: "Oliver" },
    { id: 17, name: "Pamela" },
    { id: 18, name: "Paul" },
    { id: 19, name: "Quinn" },
    { id: 20, name: "June" },
  ],
  filter: "",
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
