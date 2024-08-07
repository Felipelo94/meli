import { SearchApiResponse } from "./mercadolibre";

export type Action =
  | { type: "SET_PRODUCTS"; payload: SearchApiResponse }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "ADD_TO_LIST"; payload: Product }
  | { type: "REMOVE_FROM_LIST"; payload: string }
  | { type: "MOVE_LIST_ITEM_UP"; payload: string }
  | { type: "MOVE_LIST_ITEM_DOWN"; payload: string }
  | { type: "INCREASE_QUANTITY"; payload: string }
  | { type: "DECREASE_QUANTITY"; payload: string };

export type Product = {
  id: string;
  name: string;
  description?: string;
  thumbnail?: string;
};

export type ListItem = Product & {
  quantity: number;
};

export type AppState = {
  searchResults: SearchApiResponse;
  list: ListItem[];
  totalItems: number;
  offset: number;
  currentPage: number;
  limit: number;
  query: string;
};

export type AppContextProps = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};
