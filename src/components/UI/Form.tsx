"use client";

import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  telegram: string;
};

const Form = () => {
  const { contacts, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[16px] w-[600px] mx-auto flex bg-[#0d0d0d] rounded-[20px] p-[16px] "
    >
      <h3 className="text-[24px]">Оставить заявку</h3>
    </form>
  );
};

export default Form;
