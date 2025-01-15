import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import AuthService from "./AuthService";
import React from "react";
import { schema } from "./utils/helpers";

interface ILoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ILoginFormInputs) => {
    try {
      await AuthService.login(data.email, data.password);
      setError(null);
    } catch (error) {
      setError("Invalid email or password");
      console.error(error)
    }
  };

  return (
    <div className="panel">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Email</label>
            <input {...register("email")} type="email" />
            <p>{errors.email?.message}</p>
        </div>
        <div>
            <label>Password</label>
            <input {...register("password")} type="password" />
            <p>{errors.password?.message}</p>
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
        </form>
    </div>
  );
};

export default LoginForm;
