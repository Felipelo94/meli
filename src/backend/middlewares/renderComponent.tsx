import { RequestHandler } from "express";
import React from "react";
import { ComponentType } from "react";
import { renderToString } from "react-dom/server";
import fs from "fs/promises";
import path from "path";

declare global {
  namespace Express {
    export interface Response {
      renderComponent: (component: ComponentType<any>, props: any) => void;
    }
  }
}

export const renderComponent: RequestHandler = (req, res, next) => {
  res.renderComponent = async (Component, props) => {
    const template = await fs.readFile(
      path.resolve("dist/index.html"),
      "utf-8"
    );
    const html = renderToString(<Component {...props} />);

    res.send(
      template.replace("$APP", html).replace("$PROPS", JSON.stringify(props))
    );
  };

  next();
};
