import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addData, selectedData } from "../stepFormslice";

function Step1() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "all" });
  const navigate = useNavigate();
  const formData = useSelector(selectedData);

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (!formData[0]?.email) dispatch(addData(data));
    navigate("/step2");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col  h-full justify-center"
    >
      <div className="flex flex-col justify-center">
        <label htmlFor="email" className="text-left text-black">
          Email
        </label>
        <input
          defaultValue={formData[0]?.email}
          className="bg-gray-200 pl-2 text-black h-10 outline-none"
          {...register("email", {
            required: "required",
            minLength: {
              value: 10,
              message: "minimum length 10",
            },
            maxLength: {
              value: 60,
              message: "maximum length 60",
            },
            pattern: {
              value: /([a-zA-Z0-9])+\@([a-zA-Z0-9])+\.[a-zA-Z]{2,}/g,
              message: "Email please !",
            },
          })}
          id="email"
          type="text"
        />
        <span className="text-red-500 text-left text-m font-bold">
          {errors?.email?.message}
        </span>
      </div>

      <button
        type="submit"
        className="inline-flex w-[70px] mt-4 mb-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
      >
        Next
      </button>
    </form>
  );
}

export default Step1;
