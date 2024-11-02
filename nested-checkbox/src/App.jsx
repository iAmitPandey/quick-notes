import { useState } from "react";
import "./App.css";
import { checkboxList } from "./constants";

function App() {
  const [checkedState, setCheckedState] = useState(checkboxList);

  const handleCheckboxChange = (checkboxLabel, isChecked) => {};

  const renderChildren = (children) => {
    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          {children.map((checkbox, index) => (
            <li key={index}>
              <input
                type="checkbox"
                name=""
                id={checkbox.label}
                onChange={(e) =>
                  handleCheckboxChange(checkbox.label, e.target.checked)
                }
              />
              <label htmlFor={checkbox.label}>{checkbox.label}</label>
              {checkbox.children && renderChildren(checkbox.children)}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <>
      <div>
        <ul style={{ listStyle: "none" }}>
          {checkboxList.map((checkbox, index) => (
            <li key={index}>
              <input
                type="checkbox"
                name=""
                id={checkbox.label}
                onChange={(e) =>
                  handleCheckboxChange(checkbox.label, e.target.checked)
                }
              />
              <label htmlFor={checkbox.label}>{checkbox.label}</label>
              {checkbox.children && renderChildren(checkbox.children)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

////////////////////////////////////////
// import { useState } from "react";
// import { checkboxList } from "./constants";
// import CheckboxList from "./CheckboxList";

// function App() {
//   const [checkedState, setCheckedState] = useState({});

//   const handleCheckboxChange = (checkboxLabel, isChecked) => {
//     setCheckedState((prevState) => {
//       const updatedState = { ...prevState, [checkboxLabel]: isChecked };

//       // Recursively update child checkboxes if they exist
//       const updateChildrenState = (children) => {
//         children.forEach((child) => {
//           updatedState[child.label] = isChecked;
//           if (child.children) {
//             updateChildrenState(child.children);
//           }
//         });
//       };

//       // Find the clicked checkbox and update its children
//       const checkbox = checkboxList.find((cb) => cb.label === checkboxLabel);
//       if (checkbox && checkbox.children) {
//         updateChildrenState(checkbox.children);
//       }

//       return updatedState;
//     });
//   };

//   return (
//     <div>
//       <CheckboxList
//         checkboxes={checkboxList}
//         checkedState={checkedState}
//         handleCheckboxChange={handleCheckboxChange}
//       />
//     </div>
//   );
// }

// export default App;
