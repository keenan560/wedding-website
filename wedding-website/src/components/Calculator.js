import React, { useState } from "react";
import Numeral from "numeral";
import "./Calculator.css";

const rows = [
  {
    roomCategory: "Deluxe Room Tropical or Pool View",
    maxOccupancy: "3 or 2.1",
    minOccupancy: "1",
    sgl: "162.00",
    dbl: "101.00",
    xpax: "99.00",
  },
  {
    roomCategory: "Deluxe Swim Out",
    maxOccupancy: "2",
    minOccupancy: "1",
    sgl: "194.00",
    dbl: "121.00",
    xpax: "N/A",
  },
  {
    roomCategory: "Preferred Club Deluxe Room",
    maxOccupancy: "3 or 2.1",
    minOccupancy: 1,
    sgl: "210.00",
    dbl: "132.00",
    xpax: "129.00",
  },
  {
    roomCategory: "Preferred Club Junior Suite",
    maxOccupancy: "3.1 or 2.2",
    minOccupancy: 1,
    sgl: "324.00",
    dbl: "162.00",
    xpax: "159.00",
  },
  {
    roomCategory: "Preferred Club Honeymoon Suite w/Jacuzzi",
    maxOccupancy: 2,
    minOccupancy: 1,
    sgl: "304.00",
    dbl: "152.00",
    xpax: "N/A",
  },
  {
    roomCategory: "Preferred Club 2 Bedroom Master Suite",
    maxOccupancy: "2.4 or 3.3",
    minOccupancy: 2,
    sgl: "N/A",
    dbl: "223.00",
    xpax: "220.00",
  },
  {
    roomCategory: "Deluxe Family Room (2 adults)",
    maxOccupancy: 2.4,
    minOccupancy: 2.2,
    sgl: "N/A",
    dbl: "178.00",
    xpax: "N/A",
  },
  {
    roomCategory: "Deluxe Family Room (3 adults)",
    maxOccupancy: 3.3,
    minOccupancy: 3,
    sgl: "N/A",
    dbl: "134.00",
    xpax: "N/A",
  },
  {
    roomCategory: "Deluxe Family Room (4 adults)",
    maxOccupancy: 4.2,
    minOccupancy: 4,
    sgl: "N/A",
    dbl: "111.00",
    xpax: "N/A",
  },
  {
    roomCategory: "Preferred Club Deluxe Family Room (2 adults) ",
    maxOccupancy: 2.4,
    minOccupancy: 2.2,
    sgl: "N/A",
    dbl: "210.00",
    xpax: "N/A",
  },
  {
    roomCategory: "Preferred Club Deluxe Family Room (3 adults)",
    maxOccupancy: 3.3,
    minOccupancy: 3,
    sgl: "N/A",
    dbl: "158.00",
    xpax: "N/A",
  },
  {
    roomCategory: "Preferred Club Deluxe Family Room (4 adults)",
    maxOccupancy: 4.2,
    minOccupancy: 4,
    sgl: "N/A",
    dbl: "132.00",
    xpax: "N/A",
  },
];

function Calculator() {
  const [room, setRoom] = useState("");
  const [roomRates, setRoomRates] = useState([]);
  const [guests, setGuests] = useState("");
  const [nights, setNights] = useState("");
  const [rate, setRate] = useState("");

  const loadRates = (e) => {
    setRoom(e.target.value);
    setRoomRates(rows.filter((room) => room.roomCategory === e.target.value));
  };

  const totalEstimate = () => {
    let perGuest = parseInt(guests) * parseFloat(rate);
    return perGuest * parseInt(nights);
  };

  const toggleRate = (e) => {
    setRate(e.target.value);
  };

  return (
    <div className="calculator__container">
      <p className="calculator__title mb-4 mt-4">
        Please use the tool below to estimate your total cost for your stay at
        the resort.
      </p>
      <div className="row g-3 mb-4">
        <div class="col-sm-3">
          <label class="visually-hidden" for="specificSizeSelect">
            Preference
          </label>
          <select
            class="form-select"
            id="specificSizeSelect"
            onChange={(e) => loadRates(e)}
            value={room}
          >
            <option selected>Choose room</option>
            {rows.map((room, idx) => (
              <option value={room.roomCategory}>{room.roomCategory}</option>
            ))}
          </select>
        </div>
        <div class="col-sm-3">
          <label class="visually-hidden" for="specificSizeSelect">
            Preference
          </label>
          <select
            class="form-select"
            id="specificSizeSelect"
            onChange={(e) => toggleRate(e)}
            value={rate}
          >
            <option selected>Choose rate</option>
            {roomRates.map((rate, idx) => (
              <>
                <option id="sgl" value={rate.sgl}>
                  Single - ${rate.sgl}
                </option>
                <option id="dbl" value={rate.dbl}>
                  Double - ${rate.dbl}
                </option>
                <option id="xpax" value={rate.xpax}>
                  Xpax - ${rate.xpax}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="col-sm-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter number of nights"
            aria-label="guests"
            onChange={(e) => setNights(e.target.value)}
            value={nights}
          />
        </div>
        <div className="col-sm-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter number of guests"
            aria-label="guests"
            onChange={(e) => setGuests(e.target.value)}
            value={guests}
          />
        </div>
      </div>
      <h4 className="mb-5">
        Total estimate for stay excluding flights:
        <small className="text-muted">
          {" "}
          {guests && nights && roomRates && rate && room !== "Choose room"
            ? Numeral(totalEstimate()).format("$0, 0.00")
            : "$0.00"}
        </small>
      </h4>
      <h4 className="mb-5">
        To book your stay please click{" "}
        <a
          href="https://booking.dreamsresorts.com/reservations/gruppo_index.html?id_stile=15252&lingua_int=eng&id_gruppo=9437&dc_gruppo=1151&id_brand=4&countryCode=US"
          target="_blank"
        >
          here
        </a>{" "}
        and follow the steps below.
      </h4>
      <h4 className="mb-4 h5">
        <p className="calculator__steps">Step 01:</p> Select Dreams Punta Cana
        at the property.
      </h4>
      <h4 className="mb-4 h5">
        <p className="calculator__steps">Step 02:</p> At the bottom of the page,
        select Dreams Punta Cana, then the Check In & Check Out dates and Room
        Only.
      </h4>
      <h4 className="mb-4 h5">
        <p className="calculator__steps">Step 03:</p> Enter number of adults and
        children.
      </h4>
      <h4 className="mb-4 h5">
        <p className="calculator__steps">Step 04:</p> Enter the group code and
        click on check availability.{" "}
        <p className="calculator__groupcode">GROUP CODE: DIAKEE22</p> (All in
        capital letters).
      </h4>
      <h4 className="mb-4 h5">
        <p className="calculator__steps">Step 05:</p> Group name & rates
        provided will be displayed according to search.
      </h4>
    </div>
  );
}

export default Calculator;
