import React from "react";
import BasicForm from "./BasicForm";
import AddressForm from "./AddressForm";
import ContactForm from "./ContactForm";

const Form = (props) => {
  const { method } = props;
  console.log(method);
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={method.handleSubmit(onSubmit)}>
        <BasicForm />
        <AddressForm />
        <ContactForm />
        <button className="btn btn-primary" type="submit">
          Create new Account
        </button>
      </form>
    </>
  );
};
export default Form;
