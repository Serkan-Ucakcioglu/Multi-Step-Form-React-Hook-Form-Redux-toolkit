import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addData } from "../stepFormslice";

function Step2() {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center h-full"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-left text-black">
          Name
        </label>
        <input
          className="bg-gray-200 pl-2 text-black h-10 outline-none"
          {...register("name", {
            required: "required",
            minLength: {
              value: 4,
              message: "minimum length 4",
            },
            maxLength: {
              value: 10,
              message: "maximum length 10",
            },
            pattern: {
              value: /[a-zZ-a]/g,
              message: "Only Letters!",
            },
          })}
          id="name"
          type="text"
        />
        <span className="text-red-500 text-left text-m font-bold">
          {errors?.name?.message}
        </span>
      </div>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-left text-black">
          Surname
        </label>
        <input
          className="bg-gray-200 text-black h-10 outline-none pl-2"
          {...register("surname", {
            required: "required",
            minLength: {
              value: 3,
              message: "minimum length 3",
            },
            maxLength: {
              value: 13,
              message: "maximum length 13",
            },
            pattern: {
              value: /[a-zZ-a]/g,
              message: "Only Letters!",
            },
          })}
          id="surname"
          type="text"
        />
        <span className="text-red-500 text-left text-m font-bold">
          {errors?.surname?.message}
        </span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Link
          to="/"
          className="inline-flex w-[70px] mt-auto mb-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Prev
        </Link>
        <button
          type="submit"
          className="inline-flex w-[70px] mt-auto mb-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default Step2;
