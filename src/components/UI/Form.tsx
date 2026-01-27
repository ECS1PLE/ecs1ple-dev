"use client";

import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

type FormData = {
  name: string;
  fullname: string;
  email: string;
  phone: string;
  telegram: string;
};

const Form = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("submit работает");
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[16px] w-[100%] sm:w-[600px] mx-auto flex bg-[#0d0d0d] rounded-[20px] p-[16px] relative"
    >
      <h3 className="text-[24px]">Оставить заявку</h3>
      <div className="flex w-[100%] gap-5">
        <Input {...register("name", { required: true })} placeholder="Name" />
        <Input
          {...register("fullname", { required: true })}
          placeholder="Fullname"
        />
      </div>
      <div className="flex w-[100%] gap-5">
        <Input {...register("email", { required: true })} placeholder="Email" />
        <Input {...register("phone", { required: true })} placeholder="Phone" />
      </div>
      <Input
        {...register("telegram", { required: true })}
        placeholder="Telegram"
        className="w-[100%]"
      />
      <Button type="submit" backgroundColor="#8783D1" className="mx-auto">
        Оставить заявку
      </Button>
    </form>
  );
};

export default Form;
