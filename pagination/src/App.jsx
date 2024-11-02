import { useState } from "react";
import Table from "./components/Table";
import { FOODS } from "./data/data";

function App() {
  const [count, setCount] = useState(0);
  const itemsPerPage = 10;

  let startIndex = count * 10;
  let endIndex = count * 10 + itemsPerPage;
  const pageData = FOODS.slice(startIndex, endIndex);

  return (
    <>
      <Table
        data={pageData}
        count={count}
        setCount={setCount}
        page={Math.ceil(endIndex / 10)}
      />
    </>
  );
}

export default App;
