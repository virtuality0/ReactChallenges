"use client";
import { useEffect, useState } from "react";

export const Pagination = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<{
    products: { id: number; title: string }[];
    total: number;
    limit: number;
    skip: number;
  }>();
  const [totalPage, setTotalPage] = useState(0);

  const fetchProducts = async () => {
    const products = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`,
    );
    const data: {
      products: { id: number; title: string }[];
      total: number;
      limit: number;
      skip: number;
    } = await products.json();

    setTotalPage(data.total / data.limit);
    setData(data);
    return data;
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div className="w-84">
      <div>
        {data?.products?.map((item) => {
          return <div key={item.id}> {item.title} </div>;
        })}
        <div className="flex-row justify-around gap-x-4 p-2">
          <button className="bg-gray-600 p-1" disabled={data?.skip === 0}>
            Previous
          </button>
          <div>
            {[...Array(Math.ceil((data?.total ?? 0) / 10))].map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>

          <button
            className="bg-gray-600 p-1"
            disabled={page === data?.total / 10}
          >
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
