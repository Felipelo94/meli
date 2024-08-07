import { Request, Response } from "express";
import { mock, MockProxy } from "jest-mock-extended";
import searchController from "./searchController";
import * as httpService from "../../services/httpService";
import { SearchApiResponse } from "../../types/mercadolibre";

jest.mock("../../services/httpService");

describe("searchController", () => {
  let mockRequest: MockProxy<Request>;
  let mockResponse: MockProxy<Response>;

  beforeEach(() => {
    mockRequest = mock<Request>();
    mockResponse = mock<Response>();
  });

  it("should call MercadoLibre API and return data on success", async () => {
    const mockApiResponse: SearchApiResponse = {
      site_id: "MLA",
      country_default_time_zone: "GMT-03:00",
      query: "test",
      paging: {
        total: 0,
        offset: 0,
        limit: 10,
      },
      results: [],
      sort: {},
      available_sorts: [],
      filters: [],
      available_filters: [],
      pdp_tracking: {},
      user_context: null,
    };

    (httpService.get as jest.Mock).mockResolvedValue(mockApiResponse);

    mockRequest.query = { q: "test", limit: "10", offset: "0" };

    await searchController(mockRequest, mockResponse);

    expect(httpService.get).toHaveBeenCalledWith(
      "https://api.mercadolibre.com/sites/MLA/search?q=test&limit=10&offset=0"
    );
    expect(mockResponse.json).toHaveBeenCalledWith(mockApiResponse);
  });
});
