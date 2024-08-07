import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../modal/modal";
import ProductDetails from "../productDetails/productDetails";
import { AppContext } from "../../context/appContext";
import { SearchApiResponse } from "../../../types/mercadolibre";
import ProductCard from "./productCard";

jest.mock("../modal/modal", () => {
  const MockModal = ({ children }: any) => <div>{children}</div>;
  MockModal.Button = ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  );
  MockModal.Content = ({ title, children }: any) => (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
  return MockModal;
});

jest.mock("../productDetails/productDetails", () => () => (
  <div>Product Details</div>
));

describe("ProductCard", () => {
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

  const mockProduct = {
    id: "1",
    thumbnail: "image.jpg",
    name: "Test Product",
    price: 1000,
    currency_id: "USD",
  };

  beforeEach(() => {
    mockDispatch.mockClear();
  });

  const renderComponent = () =>
    render(
      <AppContext.Provider value={mockContextValue}>
        <ProductCard {...mockProduct} />
      </AppContext.Provider>
    );

  it("should render product details correctly", () => {
    renderComponent();

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$ 1,000 USD")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product")).toHaveAttribute(
      "src",
      "image.jpg"
    );
  });

  it("should call dispatch with correct action when add to list button is clicked", () => {
    renderComponent();

    fireEvent.click(screen.getByText("Add to list"));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_TO_LIST",
      payload: {
        id: "1",
        name: "Test Product",
        thumbnail: "image.jpg",
      },
    });
  });
});
