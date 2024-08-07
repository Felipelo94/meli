import React, { ChangeEvent, FC, SyntheticEvent, useContext } from "react";
import SearchIcon from "../icons/search.svg";
import SearchBox from "./searchbox/searchbox";
import ProductResults from "./productResults/productResults";
import List from "./list/list";

export type AppProps = {};

export const App: FC<AppProps> = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <nav className="bg-gray-800 p-4 w-full">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-xl">MyApp</div>
          <div className="w-full">
            <SearchBox Icon={<SearchIcon className="text-gray-200" />} />
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-12">
        <div className="col-span-8 border-r-2 border-gray-200">
          <ProductResults />
        </div>
        <div className="col-span-4">
          <List />
        </div>
      </div>

    </div>
  );
};
