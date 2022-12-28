import React from "react";
import { useSelector } from "react-redux";
import OkSvg from "../../assets/OkSvg";
import { selectedData } from "../stepFormslice";

function Step4() {
  const formData = useSelector(selectedData);

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <p className="text-white text-sm mb-2">
        {" "}
        {JSON.stringify(formData, undefined, 4)}
      </p>
      <OkSvg />
    </div>
  );
}

export default Step4;
