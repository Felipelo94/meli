import { Router } from "express";
import type {
  SearchApiResponse,
} from "../../types/mercadolibre";
import { DetailedItem } from "../../types/api";
import detailsController from "../controllers/detailsController";
import searchController from "../controllers/searchController";

const router = Router();
router.get<{}, SearchApiResponse>("/search", searchController);
router.get<{}, DetailedItem>("/details/:id", detailsController);

export default router;
