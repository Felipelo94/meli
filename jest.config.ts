/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  projects: [
    {
      setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
      displayName: "frontend",
      preset: "ts-jest",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/src/frontend/**/*.test.{ts,tsx}"],
      moduleNameMapper: {
        "\\.svg": "<rootDir>/__mocks__/svg.js",
      },
    },
    {
      displayName: "backend",
      preset: "ts-jest",
      testEnvironment: "node",
      testMatch: ["<rootDir>/src/backend/**/*.test.{ts,tsx,jsx}"],
    },
  ],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svg.js",
  },
};

export default config;
