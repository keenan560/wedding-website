import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import "./HeadCount.css";

function HeadCount() {
  const [guests, setGuests] = useState([]);
  useEffect(() => {
    database.collection("guests").onSnapshot((snapshot) => {
      setGuests(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);
  return (
    <div className="headCount__container">
      <h1>HeadCount</h1>
      <ol>
        {guests &&
          guests.map(({ id, data }) => (
            <li key={id}>
              Name: {data.firstName} {data.lastName}
              <p>Total: {data.headCount}</p>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default HeadCount;
