import { Request, Response } from "express";
import { get, HttpError } from "../../services/httpService";
import { SearchApiResponse } from "../../types/mercadolibre";

const searchController = async (req: Request, res: Response): Promise<void> => {
    const { q, limit, offset } = req.query;

    if (!q || isNaN(Number(limit)) || isNaN(Number(offset))) {
        res.status(400).send("Invalid query parameters");
        return;
    }

    try {
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=${limit}&offset=${offset}`;
        const data = await get<SearchApiResponse>(url);
        res.json(data);
    } catch (err) {
        const error = err as HttpError
        res.status(error.statusCode).send(error.message);
    }
};

export default searchController;
