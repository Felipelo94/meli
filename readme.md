# Technical challenge

Welcome to the technical challenge for front-end applicants at Mercado Libre.

This exercise involves completing an application to the best of your ability, utilizing the Mercado Libre API to search for products and create a shopping list with them.

This project has a functional base upon which you need to build, and broadly speaking, it is composed of the following stack:

- `Node`
- `Typescript`
- `Webpack`
- `Express`
- `React`
- `Sass`
- `Jest`

## Requirements

- Node 20 (we recommend using [`nvm`](https://github.com/nvm-sh/nvm)).

## Usage

- Install dependencies: `npm install`.
- Run the app in development mode with `npm run dev` and open http://localhost:3000/.
- Run tests with `npm run test` or `npm run test:watch`.

## Problems to solve

The provided code offers a semi-functional base, with some mocks and actions that work partially or don't work at all.

![screenshot](https://http2.mlstatic.com/D_NQ_NP_608887-MLA77574103839_072024-OO.jpg)

Below is a non-exhaustive list of problems for you to tackle (feel free to apply any improvements you deem necessary). Good luck and don't worry if you can't solve all problems, there is always something new to learn. ✌️

### Guidelines

- We prefer you solve problems with your own code. However, you can install external dependencies if it helps unblock progress or improve the solution.
- If something is ambiguous, make the best assumption and leave a note explaining your decision.

### General problems

- Apply all good practices you know in code organization, usability, performance, etc. Feel free to reorganize the initial code if necessary.
- Use strict types in TypeScript instead of `any` for existing and new code.

### API

- The API endpoints currently use mocks. Use the references in the source code comments to implement real Mercado Libre API calls.

### Frontend

- Fix the modal that opens when clicking on a title so that it can be closed.
- Implement missing state management:
  - Results pagination.
  - Ensure you can add products to the list. If the product is already present, increase its quantity by one. If not, add it to the beginning of the list with a quantity of `1`.
  - You should be able to remove products from the list, adjust their quantity and reorder them.
- Surprise us with a design proposal :) As long as functionality is not lost, you can create any UI you like.

### Testing

- Write automated tests for use cases in both backend and frontend.

### Tooling

- Implement `build` and `start` scripts in `package.json` to bundle and start the app in production mode.

### Extras

Here are some extra challenges if you feel adventurous:

- Implement some form of persistence so that your product list is retained when the page is refreshed.
- Implement drag and drop in the list to reorder products.
