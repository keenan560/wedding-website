import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { database } from "../firebase";
import firebase from "firebase";
import beach from "../assets/beach.jpeg";
import "./Rsvp.css";

function Rsvp() {
  const [sucess, setSuccess] = useState(false);
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    database.collection("guests").onSnapshot((snapshot) =>
      setGuests(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (searchGuests(data.firstName, data.lastName).length > 0) {
      alert("Thank you but you are already on the list.");
    } else {
      database
        .collection("guests")
        .add({
          firstName: data.firstName,
          lastName: data.lastName,
          headCount: data.count,
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((response) => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        })
        .catch((error) => {
          console.log(error.message);
          alert("Reservation failed.");
        });

      reset({
        firstName: "",
        lastName: "",
        count: "",
      });
    }
  };

  const searchGuests = (first, last) => {
    return guests.filter(
      (guest) =>
        guest.data.firstName.toLowerCase().trim() ===
          first.toLowerCase().trim() &&
        guest.data.lastName.toLowerCase().trim() === last.toLowerCase().trim()
    );
  };

  return (
    <div className="rsvp__container">
      <img src={beach} className="rsvp__img img-thumbnail shadow" alt="beach" />
      <form className="rsvp__form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="rsvp__title">RSVP</h1>
        <input
          placeholder="First Name"
          name="firstName"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        {errors.firstName && (
          <span className="rsvp__errors">First name is required</span>
        )}
        <input
          placeholder="Last Name"
          name="lastName"
          {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.lastName && (
          <span className="rsvp__errors">Last name is required</span>
        )}
        <input
          placeholder="No. of guests attending"
          name="count"
          type="number"
          {...register("count", { required: true, min: 1 })}
        />
        {errors.count && (
          <span className="rsvp__errors">1 guest minimum of guests</span>
        )}

        <Button className="rsvp__submit" type="submit">
          Submit
        </Button>
        {sucess && (
          <p className="rsvp__success">Sucess! Thank you for registering.</p>
        )}
        <p className="rsvp__reminder">*Please RSVP by January 19th, 2022</p>
      </form>
    </div>
  );
}

export default Rsvp;
