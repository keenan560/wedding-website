import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import "./HeadCount.css";

function HeadCount() {
  const [guests, setGuests] = useState([]);
  useEffect(() => {
    database.collection("guests").orderBy("timeStamp", "asc").onSnapshot((snapshot) => {
      setGuests(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  const headCount = () => {
    let total = 0;
    guests.map(({ id, data }) => {
      total += parseInt(data.headCount);
    });
    return total;
  };

  return (
    <div className="headCount__container">
      <h1 className='headCount__title'>
        Total HeadCount: <span className='count text-success'>{headCount()}</span>
      </h1>
      <ol class="list-group list-group-numbered">
        {guests &&
          guests.map(({ id, data }) => (
            <li
              class="list-group-item d-flex justify-content-between align-items-start"
              key={id}
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">
                  {data.firstName} {data.lastName}
                </div>
                RSVP
              </div>
              <span class="badge bg-success rounded-pill">
                {data.headCount}
              </span>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default HeadCount;
