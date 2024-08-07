import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import ListItem from "../listItem/listItem";

export default function List() {
  const { state } = useContext(AppContext);

  return (
    <div className="flex flex-col p-4 w-full">
      <h2 className="font-bold text-xl"> List</h2>
      <div>
        {state.list.map((listItem) => (
          <ListItem
            key={listItem.id}
            id={listItem.id}
            title={listItem.name}
            quantity={listItem.quantity}
            description={listItem.description}
            thumbnail={listItem.thumbnail ?? ""}
          />
        ))}
      </div>
    </div>
  );
}
