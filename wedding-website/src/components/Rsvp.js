import React from "react";
import { useForm } from "react-hook-form";
import "./Rsvp.css";

function Rsvp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset({
      firstName: "",
      lastName: "",
      count: "",
    });
  };
  return (
    <div className="rsvp__container">
      <h1 className="rsvp__title">RSVP</h1>
      <form className="rsvp__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="First Name"
          name="firstName"
          type="email"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        {errors.firstName?.type === "required" && "First name is required"}
        <input
          placeholder="Last Name"
          name="lastName"
          {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.lastName && "Last name is required"}
        <input
          placeholder="# of guests attending"
          name="count"
          type="number"
          {...register("count", { required: true, min: 1, max: 5 })}
        />
        {errors.count && <span>1 guest minimum of guests</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default Rsvp;
