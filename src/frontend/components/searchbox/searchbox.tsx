import React, { ChangeEvent, KeyboardEvent, useContext, useState } from "react";
import { SearchBoxProps } from "./types";
import { AppContext } from "../../context/appContext";

export default function SearchBox({ Icon, placeholder }: SearchBoxProps) {
    const { dispatch } = useContext(AppContext);
    const [value, setValue] = useState("");
    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            dispatch({
                type: "SET_SEARCH_QUERY",
                payload: value,
            });
        }
    };

    const handleOnclick = () => {
        dispatch({
            type: "SET_SEARCH_QUERY",
            payload: value,
        });
    };

    return (
        <div className="flex items-center max-w-sm mx-auto">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                value={value}
                onChange={handleChangeValue}
                type="text"
                onKeyDown={handleKeyDown}
                placeholder={placeholder ?? "Search"}
                id="search"
                className="py-3 ps-2.5 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <button
                className="text-gray-200 bg-gray-50 p-3 mx-2 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-non"
                onClick={handleOnclick}
            >
                {Icon}
            </button>
        </div>
    );
}
