import { useForm } from "react-hook-form";
import Head from "next/head";
import styles from "@/styles/Login.module.css";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="bg-secondary rounded-lg p-10 text-white lg:w-[40%] lg:mx-auto my-20 mx-5">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center font-semibold text-2xl">LOGIN</h3>
          <hr />

          <div className=" mt-4">
            <label htmlFor="">Your Email</label>
            <br />
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full text-black"
              {...register("email", { required: true })}
            />
          </div>
          <br />
          <div className="">
            <label htmlFor="">Your Password</label>
            <br />
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full text-black"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex justify-center mt-4">
            <button className="border rounded px-4 py-1" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
