import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    postText: yup.string().required(),
  })
  .required();

export const AddPostForm = ({ onSubmit }) => {
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
      reset({ postText: "" });
    }
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div>new post text</div>
        <textarea
          {...register("postText")}
          rows="3"
          placeholder="Enter new post text"
        />
      </label>
      <p>{errors.text?.postText}</p>

      <input type="submit" />
    </form>
  );
};
