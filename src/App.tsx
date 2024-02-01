import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { Schema, yupSchema } from "./yup/rule";
import Form from "./components/Forms/Form";

export default function App() {
  const methods = useForm<Schema>({ resolver: yupResolver(yupSchema) });
  useEffect(() => {
    methods.setFocus("city");
  }, []);
  return (
    <FormProvider {...methods}>
      <div className="container p-5">
        <Form method={methods} />
      </div>
    </FormProvider>
  );
}
