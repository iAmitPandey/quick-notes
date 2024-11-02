// CheckboxList.js
import React from "react";

const CheckboxList = ({ checkboxes, checkedState, handleCheckboxChange }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {checkboxes.map((checkbox, index) => (
        <li key={index}>
          <input
            type="checkbox"
            id={checkbox.label}
            checked={!!checkedState[checkbox.label]}
            onChange={(e) =>
              handleCheckboxChange(checkbox.label, e.target.checked)
            }
          />
          <label htmlFor={checkbox.label}>{checkbox.label}</label>
          {checkbox.children && (
            <CheckboxList
              checkboxes={checkbox.children}
              checkedState={checkedState}
              handleCheckboxChange={handleCheckboxChange}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
