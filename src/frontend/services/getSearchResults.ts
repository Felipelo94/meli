import { get, HttpError } from "../../services/httpService";
import { GetAPIResponse } from "../../types/api";
import { SearchApiResponse } from "../../types/mercadolibre";

export const getSearchResults = async (
    q: string,
    limit: number,
    offset: number
): Promise<GetAPIResponse<SearchApiResponse>> => {
    const getSearchReaultsUrl = `/api/search?q=${q}&limit=${limit}&offset=${offset}`;
    try {
        const resp = await get<SearchApiResponse>(getSearchReaultsUrl);
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
