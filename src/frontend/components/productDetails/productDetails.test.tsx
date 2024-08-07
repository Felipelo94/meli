import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductDetails from "./productDetails";
import { AppContext } from "../../context/appContext";
import { getProduct } from "../../actions/appActions";
import { DetailedItem } from "../../../types/api";
import { SearchApiResponse } from "../../../types/mercadolibre";

jest.mock("../../actions/appActions");
jest.mock("../modal/modal"); // Asegúrate de que jest use el mock del Modal

const mockDispatch = jest.fn();
const mockContextValue = {
  state: {
    searchResults: {} as SearchApiResponse,
    list: [],
    totalItems: 0,
    currentPage: 1,
    offset: 0,
    limit: 10,
    query: "Test",
  },
  dispatch: mockDispatch,
};

const mockProduct: DetailedItem = {
  id: "1",
  title: "Test Product",
  description: "Test Description",
  picture: "test.jpg",
};

describe("ProductDetails Component", () => {
  beforeEach(() => {
    (getProduct as jest.Mock).mockResolvedValue(mockProduct);
  });

  it("renders product details", async () => {
    render(
      <AppContext.Provider value={mockContextValue}>
        <ProductDetails id="1" listItem={false} />
      </AppContext.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Test Product")).toBeInTheDocument();
      expect(screen.getByText("Test Description")).toBeInTheDocument();
      expect(screen.getByRole("img")).toHaveAttribute("src", "test.jpg");
    });
  });
});
