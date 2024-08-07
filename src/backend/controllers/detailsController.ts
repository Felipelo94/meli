import { Request, Response } from 'express';
import { get, HttpError } from '../../services/httpService';
import { ItemApiResponse, ItemDescriptionApiResponse, SearchApiResponse } from '../../types/mercadolibre';


const detailsController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const detailsURL = "https://api.mercadolibre.com/items/"

    if (!id) {
        res.status(400).send('Invalid ID');
        return;
    }

    try {
        const item = await get<ItemApiResponse>(`${detailsURL}${id}`); 
        const description = await get<ItemDescriptionApiResponse>(`${detailsURL}${id}/description`);

        const data = {
            id: item.id,
            title: item.title,
            picture: item.pictures[0].url,
            description: description.plain_text,
        }

        res.json(data);
    } catch (error) {
        const errorCode = (error as HttpError).statusCode;
        if (errorCode && errorCode !== 500) {
            res.status(errorCode).send((error as HttpError).message);
        }
    }
};

export default detailsController;
