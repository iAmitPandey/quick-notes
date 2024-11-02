import React from "react";
import Pagination from "./Pagination";

const Table = ({ data, page, count, setCount }) => {
  //   console.log(data, page);
  return (
    <div>
      <div
        style={{ display: "flex", width: "840px", justifyContent: "center" }}
      >
        <button
          onClick={() => {
            count > 0 && setCount((prev) => prev - 1);
          }}
        >
          Previous
        </button>
        <p>Page {page} </p>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            rowGap: "10px",
            border: "1px solid black",
            height: "50px",
            width: "280px",
            textAlign: "center",
            backgroundColor: "yellow",
          }}
        >
          #
        </div>
        <div
          style={{
            rowGap: "10px",
            border: "1px solid black",
            height: "50px",
            width: "280px",
            textAlign: "center",
            backgroundColor: "yellow",
          }}
        >
          Food
        </div>
        <div
          style={{
            rowGap: "10px",
            border: "1px solid black",
            height: "50px",
            width: "280px",
            textAlign: "center",
            backgroundColor: "yellow",
          }}
        >
          Price
        </div>
      </div>
      {data.map((food) => (
        <div style={{ display: "flex" }} key={food.id}>
          <div
            style={{
              rowGap: "10px",
              border: "1px solid black",
              height: "50px",
              width: "280px",
              textAlign: "center",
            }}
          >
            {food.id}
          </div>
          <div
            style={{
              rowGap: "10px",
              border: "1px solid black",
              height: "50px",
              width: "280px",
              textAlign: "center",
            }}
          >
            {food.name}
          </div>
          <div
            style={{
              rowGap: "10px",
              border: "1px solid black",
              height: "50px",
              width: "280px",
              textAlign: "center",
            }}
          >
            {food.price}
          </div>
        </div>
      ))}
      {/* <Pagination 
      data={data}
      /> */}
    </div>
  );
};

export default Table;
