import React from "react";
import { useSelector } from "react-redux";
import Step1 from "../features/step/Step1";
import Step2 from "../features/step/Step2";
import Step3 from "../features/step/Step3";
import Step4 from "../features/step/Step4";
import { selectedStep } from "../features/stepFormslice";

function StepList() {
  const step = useSelector(selectedStep);
  const arr = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <Step4 />,
  };
  const title = {
    1: "Email",
    2: "Name Surname",
    3: "Number",
    4: "Success",
  };
  return (
    <>
      <h1 className="text-center text-white text-2xl">{title[step]}</h1>
      {arr[step]}
    </>
  );
}

export default StepList;
