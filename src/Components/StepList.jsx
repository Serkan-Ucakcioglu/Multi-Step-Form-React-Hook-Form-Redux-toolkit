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
  return <>{arr[step]}</>;
}

export default StepList;
