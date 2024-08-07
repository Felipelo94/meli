import React, { useContext, useEffect } from "react";
import ProductCard from "../productCard/productCard";
import Pagination from "../pagination/pagination";
import { AppContext } from "../../context/appContext";
import { getProductResults } from "../../actions/appActions";

function ProductResults() {
  const { state, dispatch } = useContext(AppContext);
  const { searchResults, limit, totalItems, currentPage, query } = state;

  const handlePageChange = (page: number) => {
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: page,
    });
  };

  useEffect(() => {
    getProductResults({
      currentPage,
      dispatch,
      limit,
      query,
    });
  }, [currentPage, query, limit]);

  return (
    <div className="p-4">
      {query && <h2 className="font-bold text-xl"> Results for {query}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
        {searchResults.results?.map((item) => (
          <ProductCard
            name={item.title}
            price={item.price}
            key={item.id}
            id={item.id}
            thumbnail={item.thumbnail}
            currency_id={item.currency_id}
          />
        ))}
      </div>
      {totalItems > limit && (
        <Pagination
          currentPage={currentPage}
          itemsPerPage={limit}
          totalItems={totalItems}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default ProductResults;
