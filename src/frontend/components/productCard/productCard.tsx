import React, { useContext, useState } from "react";
import Modal from "../modal/modal";
import { AppContext } from "../../context/appContext";
import { Product } from "../../../types/context";
import ProductDetails from "../productDetails/productDetails";

export default function ProductCard({
  id,
  thumbnail,
  name,
  price,
  currency_id,
}: {
  id: string;
  thumbnail: string;
  name: string;
  price: number;
  currency_id: string;
}) {
  let [open, setOpen] = useState(false);

  const { dispatch } = useContext(AppContext);

  function formatNumberWithCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const addToListHandler = () => {
    const product: Product = {
      id,
      name,
      thumbnail,
    };

    dispatch({
      type: "ADD_TO_LIST",
      payload: product,
    });
  };
  return (
    <div
      className="flex flex-col justify-between rounded-lg bg-white px-4 py-4 text-gray-900 shadow border border-gray-200"
      key={id}
    >
      <div className="flex justify-center items-center w-full h-full">
        <img src={thumbnail} alt={name} className="h-full w-full " />
      </div>
      <div>
        <p className="truncate py-1 font-bold text-slate-800">{name}</p>
        <p className="text-sm text-gray-500 font-semibold">
          $ {formatNumberWithCommas(price)} {currency_id}
        </p>
      </div>

      <div className="flex items-center justify-between gap-2 py-2 flex-col">
        <Modal open={open} onOpenChange={setOpen}>
          <button
            onClick={addToListHandler}
            className="rounded-lg border-zinc-500 bg-orange-200 px-3 py-2 hover:bg-orange-400 text-sm w-full"
          >
            Add to list
          </button>
          <Modal.Button className="rounded p-2 hover:bg-gray-200 hover:border-gray-400 w-full flex items-center justify-center">
            Details
          </Modal.Button>
          <Modal.Content title={""}>
            <ProductDetails id={id} listItem={false} />
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
}
