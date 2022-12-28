import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addData } from "../stepFormslice";

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
  return <form onSubmit={handleSubmit(onSubmit)}></form>;
}

export default Step3;
