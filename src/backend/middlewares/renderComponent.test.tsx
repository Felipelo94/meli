import supertest from "supertest";
import express from "express";
import { renderComponent } from "./renderComponent";
import React, { FC } from "react";

const app = express();
const TestComponent: FC<{ text: string }> = ({ text }) => <h1>{text}</h1>;

app.use(renderComponent);
app.get("/", (req, res) =>
  res.renderComponent(TestComponent, { text: "Hello World!" })
);

describe("renderComponent", () => {
  it("should render the component as html", async () => {
    const response = await supertest(app).get("/");

    expect(response.text).toMatch('<div id="app"><h1>Hello World!</h1></div>');
  });

  it("should serialize initial props", async () => {
    const response = await supertest(app).get("/");

    expect(response.text).toMatch(`window.APP_PROPS = {"text":"Hello World!"}`);
  });
});
