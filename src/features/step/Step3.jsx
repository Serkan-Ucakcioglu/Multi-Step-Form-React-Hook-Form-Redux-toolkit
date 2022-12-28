import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addData, selectedData } from "../stepFormslice";
import Buttons from "../../Components/Buttons";

function Step3() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "all" });
  const navigate = useNavigate();
  const formData = useSelector(selectedData);

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (!formData[2]?.number) dispatch(addData(data));
    navigate("/step4");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center h-full"
    >
      <div className="flex flex-col">
        <label htmlFor="number" className="text-left text-white">
          Number
        </label>
        <input
          type="tel"
          defaultValue={formData[2]?.number}
          className="bg-gray-200 pl-2 text-black h-10 outline-none"
          {...register("number", {
            required: "required!",
            pattern: {
              value: /[0-9]/g,
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
