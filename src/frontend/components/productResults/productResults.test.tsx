import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductResults from "./productResults";
import {
  AppProvider,
  mockDispatch,
} from "../../../__mocks__/context/appContextMock";
import { SearchApiResponse } from "../../../types/mercadolibre";

jest.mock("../../context/appContext", () => ({
  AppContext: React.createContext({
    state: {
      searchResults: {} as SearchApiResponse,
      list: [],
      totalItems: 0,
      currentPage: 1,
      offset: 0,
      limit: 10,
      query: "Test",
    },
    dispatch: jest.fn(),
  }),
}));

jest.mock("../../actions/appActions", () => ({
  getProductResults: jest.fn(),
}));

describe(" Product Results", () => {
  it("renders search results and pagination", () => {
    render(
      <AppProvider>
        <ProductResults />
      </AppProvider>
    );

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
