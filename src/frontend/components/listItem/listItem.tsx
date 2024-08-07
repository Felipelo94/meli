import React, { useContext, useState } from "react";
import Modal from "../modal/modal";
import { AppContext } from "../../context/appContext";
import Chevron from "../../icons/chevronLeft.svg";
import ProductDetails from "../productDetails/productDetails";

export default function ListItem({
  id,
  title,
  description,
  quantity,
  thumbnail,
}: {
  id: string;
  title: string;
  description?: string;
  quantity: number;
  thumbnail: string;
}) {
  const [open, setOpen] = useState(false);
  const { dispatch } = useContext(AppContext);

  const onRemoveHandler = (id: string) => {
    dispatch({
      type: "REMOVE_FROM_LIST",
      payload: id,
    });
  };

  const onMoveUpHandler = (id: string) => {
    dispatch({
      type: "MOVE_LIST_ITEM_UP",
      payload: id,
    });
  };

  const onMoveDownHandler = (id: string) => {
    dispatch({
      type: "MOVE_LIST_ITEM_DOWN",
      payload: id,
    });
  };

  const onAddQuantityHandler = (id: string) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };

  const onRemoveQuantityHandler = (id: string) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <div className="flex mb-2 border border-gray-300 shadow rounded-md overflow-hidden">
        <div className="flex flex-col">
          <div className="flex">
            <img src={thumbnail} alt={title} className="w-32 h-32" />
            <div className="flex flex-col">
              <p className="truncate p-2 flex-shrink w-80">{title}</p>
              <div className="flex items-center">
                <div className="py-2 px-3 bg-white rounded-lg">
                  <div className="flex items-center gap-x-1.5">
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      aria-label="Increase"
                      onClick={() => onAddQuantityHandler(id)}
                    >
                      +
                    </button>
                    <input
                      className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
                      type="number"
                      aria-roledescription="Number field"
                      value={quantity}
                    />
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      aria-label="Decrease"
                      onClick={() => onRemoveQuantityHandler(id)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 overflow-hidden py-3">
                <Modal.Button className="rounded-lg border-zinc-500 bg-orange-200 px-3 py-2 hover:bg-orange-400 text-sm w-full flex items-center justify-center">
                  Details
                </Modal.Button>
                <button
                  className="rounded p-2 hover:bg-gray-200 hover:border-gray-400 w-full flex items-center justify-center"
                  onClick={() => onRemoveHandler(id)}
                >
                  remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 justify-between min-w-2 h-full">
          <button
            className="flex justify-center items-center p-1 text-gray-700 rounded disabled:opacity-50 h-full"
            onClick={() => onMoveUpHandler(id)}
          >
            <span className="rotate-90">
              <Chevron />
            </span>
          </button>
          <button
            className="flex  justify-center items-center p-1  text-gray-700 rounded disabled:opacity-50 h-full "
            onClick={() => onMoveDownHandler(id)}
          >
            <span className="-rotate-90">
              <Chevron />
            </span>
          </button>
        </div>
      </div>

      <Modal.Content title="">
        <ProductDetails id={id} listItem />
      </Modal.Content>
    </Modal>
  );
}
