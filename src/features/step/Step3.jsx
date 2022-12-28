import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addData } from "../stepFormslice";
import Buttons from "../../Components/Buttons";

function Step3() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addData(data));
    navigate("/step3");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label htmlFor="number" className="text-left">
          Number
        </label>
        <input
          type="tel"
          className="bg-gray-200 pl-2 text-black h-10 outline-none"
          {...register("number", {
            required: "required!",
            pattern: {
              value: /^\d{3}\d{3}\d{4}$/g,
              message: "Phone number please!",
            },
          })}
          id="number"
        />
        <span className="text-left text-red-500 text-m text-bold">
          {errors?.number?.message}
        </span>
      </div>
      <Buttons step={"/step2"} />
    </form>
  );
}

export default Step3;
