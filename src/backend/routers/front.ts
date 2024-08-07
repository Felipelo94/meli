import { Router } from "express";
import { App } from "../../frontend/components/App";
import { renderComponent } from "../middlewares/renderComponent";

const router = Router();

router.use(renderComponent);

router.get("/", async (req, res) => {
  res.renderComponent(App, {});
});

export default router;
