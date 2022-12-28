import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addData } from "../stepFormslice";

function Step1() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addData(data));
    navigate("/step2");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center h-full"
    >
      <>
        <label htmlFor="email" className="text-left text-black">
          Email
        </label>
        <input
          className="bg-gray-200 text-black h-10 outline-none"
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
      </>

      <button
        type="submit"
        className="inline-flex w-[70px] mt-auto mb-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
      >
        Next
      </button>
    </form>
  );
}

export default Step1;
