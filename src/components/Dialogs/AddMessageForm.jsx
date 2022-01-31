import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    message: yup.string().required(),
  })
  .required();

export const AddMessageForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ message: "" });
    }
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div>New message</div>
        <textarea
          {...register("message")}
          rows="3"
          placeholder="Enter message"
        />
      </label>
      <p>{errors.text?.message}</p>

      <input type="submit" />
    </form>
  );
};
