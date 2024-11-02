import React, { useState } from "react";

const Stepper = ({ data }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  // Handles setting the current step when clicking on a specific step
  const handleStepClick = (index) => {
    setIsComplete(false); // Reset completion state
    setCurrentStep(index + 1);
  };

  // Handles advancing to the next step
  const handleNextClick = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === data.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  // Handles going back to the previous step
  const handlePrevClick = () => {
    setCurrentStep((prevStep) => {
      if (prevStep > 1) {
        setIsComplete(false); // Reset completion state if going back
        return prevStep - 1;
      }
      return prevStep;
    });
  };

  const ActiveComponent = data[currentStep - 1]?.Component;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2px",
        }}
      >
        {data.map((info, i) => (
          <div
            key={info.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button
              style={{
                height: "24px",
                width: "24px",
                borderRadius: "50%",
                backgroundColor:
                  currentStep > i + 1 || isComplete ? "#28a745" : "#ddd",
                color: currentStep > i + 1 || isComplete ? "#fff" : "#000",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => handleStepClick(i)}
            >
              {currentStep > i + 1 || isComplete ? (
                <span>&#10003;</span>
              ) : (
                i + 1
              )}
            </button>
            <div>{info.name}</div>
          </div>
        ))}
      </div>

      {ActiveComponent && <ActiveComponent />}

      {isComplete && <div>Order Delivered successfully! 🎉</div>}

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          style={{
            height: "40px",
            width: "80px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "5px",
            border: "none",
            cursor: currentStep === 1 ? "not-allowed" : "pointer",
          }}
          disabled={currentStep === 1}
          onClick={handlePrevClick}
        >
          Previous
        </button>

        <button
          style={{
            height: "40px",
            width: "80px",
            backgroundColor: isComplete ? "#28a745" : "#007bff",
            color: "#fff",
            borderRadius: "5px",
            border: "none",
            cursor: isComplete ? "not-allowed" : "pointer",
          }}
          disabled={isComplete}
          onClick={handleNextClick}
        >
          {currentStep === data.length ? "Finish" : "Next"}
        </button>
      </div>
    </>
  );
};

export default Stepper;
