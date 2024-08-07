import { get, HttpError } from "../../services/httpService";
import { DetailedItem, GetAPIResponse } from "../../types/api";

export const getProductDetails = async (
    id: string,
): Promise<GetAPIResponse<DetailedItem>> => {
    const getSearchReaultsUrl = `/api/details/${id}`;
    try {
        const resp = await get<DetailedItem>(getSearchReaultsUrl);
        return {
            isOk: true,
            data: resp,
            error: null,
        };
    } catch (e) {
        return {
            isOk: false,
            data: null,
            error: (e as HttpError).message,
        };
    }
};
