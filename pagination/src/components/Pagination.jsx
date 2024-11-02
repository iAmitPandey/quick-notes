import React from "react";

const Pagination = () => {
  return (
    <div>
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
    </div>
  );
};

export default Pagination;
