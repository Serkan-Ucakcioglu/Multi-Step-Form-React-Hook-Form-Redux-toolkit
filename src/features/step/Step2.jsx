import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addData, selectedData } from "../stepFormslice";
import Buttons from "../../Components/Buttons";

function Step2() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "all" });
  const navigate = useNavigate();
  const formData = useSelector(selectedData);

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (!formData[1]?.name) dispatch(addData(data));
    navigate("/step3");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center h-full"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-left text-white">
          Name
        </label>
        <input
          defaultValue={formData[1]?.name}
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
      <div className="flex flex-col mt-2">
        <label htmlFor="name" className="text-left text-white">
          Surname
        </label>
        <input
          defaultValue={formData[1]?.surname}
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
      <Buttons step={"/"} />
    </form>
  );
}

export default Step2;
