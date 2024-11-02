import { useState } from "react";

export default function TelephoneFormatter() {
  const [number, setNumber] = useState("");

  const getStringWithNumbersOnly = (str) =>
    [...str].filter((v) => Number.isInteger(+v) && v !== " ").join("");

  const formatString = (e) => {
    const numStr = getStringWithNumbersOnly(e.target.value);
    setNumber(
      numStr.length > 3
        ? "+(" + numStr.substring(0, 3) + ") - " + numStr.substring(3)
        : numStr
    );
  };

  return (
    <div>
      <input
        type="tel"
        id="phone"
        maxLength={16}
        placeholder="Mobile number"
        autoComplete="off"
        style={{ fontSize: "1rem", marginBottom: "1rem" }}
        value={number}
        onChange={formatString}
      />
    </div>
  );
}
