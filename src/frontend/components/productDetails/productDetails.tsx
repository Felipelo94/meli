import React, { useContext, useEffect, useState } from "react";
import { DetailedItem } from "../../../types/api";
import { getProduct } from "../../actions/appActions";
import Modal from "../modal/modal";
import { Product } from "../../../types/context";
import { AppContext } from "../../context/appContext";

export default function ProductDetails({
  id,
  listItem = false,
}: {
  id: string;
  listItem: boolean;
}) {
  const [product, setProduct] = useState<DetailedItem>({} as DetailedItem);

  const getProdDetails = async (id: string) => {
    const details = await getProduct(id);
    if (details) setProduct(details);
  };

  useEffect(() => {
    getProdDetails(id);
  }, []);
  const { dispatch } = useContext(AppContext);

  const addToListHandler = () => {
    const productToSend = {
      id: product.id,
      name: product.title,
      description: product.description,
      thumbnail: product.picture,
    };

    dispatch({
      type: "ADD_TO_LIST",
      payload: productToSend,
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <img src={product.picture} className="w-96 h-96" />
      </div>
      <h2 className="font-bold text-lg mb-2 mt-2">{product.title}</h2>
      <div className="scroll-auto ">
        <p className="scroll-auto">{product.description}</p>
      </div>

      <div className="flex justify-evenly mt-5">
        {!listItem && (
          <Modal.Close
            onClick={addToListHandler}
            className="rounded-lg border-zinc-500 bg-orange-200 px-3 py-2 hover:bg-orange-400"
          >
            Add to list
          </Modal.Close>
        )}
        <Modal.Close
          className="rounded-lg border-zinc-500 bg-slate-300 px-3 py-2 hover:bg-slate-400
        "
        >
          {!listItem ? "Cancel" : "Close"}
        </Modal.Close>
      </div>
    </div>
  );
}
