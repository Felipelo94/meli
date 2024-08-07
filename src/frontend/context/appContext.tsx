import React, { createContext, ReactNode, useReducer } from 'react';
import { AppContextProps, AppState } from '../../types/context';
import appReducer from './appReducer';
import { SearchApiResponse } from '../../types/mercadolibre';


const initialState: AppState = {
  searchResults: {} as SearchApiResponse,
  list: [],
  totalItems: 0,
  currentPage: 1,
  offset: 0,
  limit: 10,
  query: 'celular',
};

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => null,
});

export function AppProvider({ children }: {children: ReactNode}){
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
