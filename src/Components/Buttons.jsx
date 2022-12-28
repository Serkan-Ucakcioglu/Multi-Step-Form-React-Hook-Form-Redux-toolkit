import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStep } from "../features/stepFormslice";

function Buttons({ step }) {
  const dispatch = useDispatch();

  const prev = () => {
    dispatch(addStep(step - 1));
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={prev}
        className="inline-flex w-[70px] mt-auto mb-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
      >
        Prev
      </button>
      <button
        type="submit"
        className="inline-flex w-[70px] mt-auto mb-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
      >
        Next
      </button>
    </div>
  );
}

export default Buttons;
