import React from "react";
import { useSelector } from "react-redux";
import OkSvg from "../../assets/OkSvg";
import { selectedData } from "../stepFormslice";

function Step4() {
  const formData = useSelector(selectedData);
  console.log(formData);

  return (
    <div className="flex flex-col justify-center items-center">
      <p> {JSON.stringify(formData, undefined, 4)}</p>
      <OkSvg />
    </div>
  );
}

export default Step4;
