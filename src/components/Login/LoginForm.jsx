import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email(),
    password: yup.string().required().min(8),
  })
  .required();

export const LoginForm = ({ onSubmit }) => {
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
      reset({ email: "", password: "" });
    }
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div>email</div>
        <input {...register("email")} placeholder="email" autoFocus />
      </label>
      <p>{errors.email?.message}</p>
      <label>
        <div>password</div>
        <input
          {...register("password")}
          type="password"
          placeholder="password"
        />
      </label>
      <p>{errors.password?.message}</p>
      <label>
        remember me
        <input {...register("remember")} type="checkbox" />
      </label>

      <label>
        captcha
        <input {...register("captcha")} type="checkbox" />
      </label>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
