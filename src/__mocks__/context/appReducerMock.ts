import { Action, AppState } from "../../types/context";

export default (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        searchResults: action.payload,
        totalItems: action.payload.paging.total
      };
    case 'ADD_TO_LIST':
      const existingProduct = state.list.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        return {
          ...state,
          list: state.list.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          list: [{ ...action.payload, quantity: 1 }, ...state.list ],
        };
      };

    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        query: action.payload,
        currentPage: 1
      };

    case 'REMOVE_FROM_LIST':
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
      };


    case "MOVE_LIST_ITEM_DOWN":
      const index = state.list.findIndex(item => item.id === action.payload);
      if (index < state.list.length - 1) {
        const newList = [...state.list];
        [newList[index + 1], newList[index]] = [newList[index], newList[index + 1]];
        return {
          ...state,
          list: newList,
        };
      }

      return state;

    case "MOVE_LIST_ITEM_UP":
      const itemIndex = state.list.findIndex(item => item.id === action.payload);
      if (itemIndex > 0) {
        const newList = [...state.list];
        [newList[itemIndex - 1], newList[itemIndex]] = [newList[itemIndex], newList[itemIndex - 1]];
        return {
          ...state,
          list: newList,
        };
      }
      return state;

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
};
