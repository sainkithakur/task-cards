import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductList } from "../redux/action/productAction";

const Product = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isComment, setIsComment] = useState(false);

  const data = useSelector((state) => state.productReducer.products);
  const loading = useSelector((state) => state.productReducer.loading);

  const perPageItems = 6;
  const totalItems = data?.length;
  const trimStart = page - 1;
  const trimEnd = trimStart + perPageItems;
  const handlePrev = () => page !== 1 && setPage(page - 1);
  const handleForw = () => {
    trimEnd <= totalItems && setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getProductList());
  }, []);
  return (
    <div>
      <section class="text-gray-600 body-font">
        <h1 className="font-bold bg-pink-500 text-2xl">Cards</h1>
        <div class="container px-5 py-24 mx-auto">
          {loading ? (
            <span>loading..</span>
          ) : (
            <div class="flex flex-wrap -m-4">
              {data.slice(trimStart, trimEnd).map((item) => {
                return (
                  <div class="p-4 md:w-1/3">
                    <div
                      key={item.id}
                      class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {item.id}
                        </h2>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                          {item.title}
                        </h1>
                        <p class="leading-relaxed mb-3">{item.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className=" ">
          {/* Previous */}
          <button
            className="bg-red-800 text-white px-3 rounded-lg"
            type="button"
            onClick={handlePrev}>
            Back
          </button>
          &nbsp;&nbsp;
          {/* next */}
          <button
            disabled={trimEnd === totalItems}
            type="button"
            className="bg-green-800 text-white px-3 rounded-lg"
            onClick={handleForw}>
            Next
          </button>
        </div>
      </section>

      <button
        className="bg-gray-800 text-white px-3 rounded-lg mt-5"
        onClick={() => setIsComment(!isComment)}>
        Comment Now
      </button>
      {isComment && (
        <div className="mt-5">
          <input
            type="number"
            placeholder="Rate Now"
            className="py-1 round-lg border mr-10 mb-16"
          />
          &nbsp;&nbsp;
          <textarea
            placeholder="your comment"
            className="py-1 round-lg border "
          />
          <button className="bg-green-800 text-white px-3 rounded-lg">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
