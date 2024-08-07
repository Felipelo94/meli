import { Request, Response } from "express";

import { get } from "../../services/httpService";
import {
  ItemApiResponse,
  ItemDescriptionApiResponse,
} from "../../types/mercadolibre";
import detailsController from "./detailsController";

jest.mock("../../services/httpService");

describe("detailsController", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseJson: jest.Mock;
  let responseStatus: jest.Mock;
  let responseSend: jest.Mock;

  beforeEach(() => {
    responseJson = jest.fn();
    responseStatus = jest.fn().mockReturnValue({ send: responseSend });
    responseSend = jest.fn();
    mockRequest = {
      params: {
        id: "test-id",
      },
    };
    mockResponse = {
      status: responseStatus,
      json: responseJson,
      send: responseSend,
    };
  });

  it("should return item details if ID is provided", async () => {
    const mockItemResponse: ItemApiResponse = {
      id: "test-id",
      title: "Test Item",
      pictures: [{ url: "http://example.com/test.jpg" }],
      // other properties...
    };
    const mockDescriptionResponse: ItemDescriptionApiResponse = {
      plain_text: "Test description",
      // other properties...
    };

    (get as jest.Mock)
      .mockResolvedValueOnce(mockItemResponse)
      .mockResolvedValueOnce(mockDescriptionResponse);

    await detailsController(mockRequest as Request, mockResponse as Response);

    expect(responseJson).toHaveBeenCalledWith({
      id: "test-id",
      title: "Test Item",
      picture: "http://example.com/test.jpg",
      description: "Test description",
    });
  });
});
