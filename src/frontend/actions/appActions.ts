import { AppContextProps } from "../../types/context";
import { getProductDetails } from "../services/getProductDetails";
import { getSearchResults } from "../services/getSearchResults";

type GetProductResultsType = {
    dispatch: AppContextProps["dispatch"],
    query: string,
    limit: number,
    currentPage: number
}

export const getProductResults = async (
    { currentPage, dispatch, limit, query }: GetProductResultsType
) => {
    const offset = (currentPage - 1) * limit;
    if (query) {
        const { isOk, data, error } = await getSearchResults(query, limit, offset);
        if (!isOk) {
            console.log("no data returned: ", error);
            return;
        }
        dispatch({
            type: "SET_PRODUCTS",
            payload: data,
        });
    }
};

export const getProduct = async (id: string) => {
    const { isOk, data, error } = await getProductDetails(id);
    if (!isOk) {
        console.log("no data returned: ", error);
        return;
    }
    return data;
}
