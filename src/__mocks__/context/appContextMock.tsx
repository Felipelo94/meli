import React, { createContext, ReactNode, useReducer } from 'react';
import { AppContextProps, AppState } from '../../types/context';
import { SearchApiResponse } from '../../types/mercadolibre';
import appReducerMock from './appReducerMock';
import searchresult from '../../mocks/search.json'

export const mockDispatch = jest.fn();

export const initialState: AppState = {
  searchResults: searchresult as unknown as SearchApiResponse,
  list: [],
  totalItems: 15,
  currentPage: 1,
  offset: 0,
  limit: 10,
  query: 'Test',
};

export const mockAppcontext = {
  state: initialState,
  dispatch: mockDispatch,
}

export const AppContext = createContext<AppContextProps>(mockAppcontext);

export function AppProvider({ children }: {children: ReactNode}){
  const [state, dispatch] = useReducer(appReducerMock, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};