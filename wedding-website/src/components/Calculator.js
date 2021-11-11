import React, { useState } from "react";
import Numeral from "numeral";
import "./Calculator.css";

const rows = [
  {
    roomCategory: "Deluxe Room Tropical or Pool View",
    maxOccupancy: "3 or 2.1",
    minOccupancy: "1",
    sgl: "200.26",
    dbl: "126.16",
    xpax: "122.06",
  },
  {
    roomCategory: "Deluxe Swim Out",
    maxOccupancy: "2",
    minOccupancy: "1",
    sgl: "240.06",
    dbl: "150.04",
    xpax: "N/A",
  },
  {
    roomCategory: "Preferred Club Deluxe Room",
    maxOccupancy: "3 or 2.1",
    minOccupancy: 1,
    sgl: "259.90",
    dbl: "162.44",
    xpax: "159.34",
  },
  {
    roomCategory: "Preferred Club Junior Suite",
    maxOccupancy: "3.1 or 2.2",
    minOccupancy: 1,
    sgl: "400.51",
    dbl: "200.25",
    xpax: "197.16",
  },
  {
    roomCategory: "Preferred Club Honeymoon Suite w/Jacuzzi",
    maxOccupancy: 2,
    minOccupancy: 1,
    sgl: "375.71",
    dbl: "187.86",
    xpax: "N/A",
  },
  {
    roomCategory: "Preferred Club 2 Bedroom Master Suite",
    maxOccupancy: "2.4 or 3.3",
    minOccupancy: 2,
    sgl: "N/A",
    dbl: "275.27",
    xpax: "272.17",
  },
  {
    roomCategory: "Deluxe Family Room (2 adults)",
    maxOccupancy: 2.4,
    minOccupancy: 2.2,
    sgl: "N/A",
    dbl: "220.09",
    xpax: "N/A",
  },
  {
    roomCategory: "Deluxe Family Room (3 adults)",
    maxOccupancy: 3.3,
    minOccupancy: 3,
    sgl: "N/A",
    dbl: "164.92",
    xpax: "N/A",
  },
  {
    roomCategory: "Deluxe Family Room (4 adults)",
    maxOccupancy: 4.2,
    minOccupancy: 4,
    sgl: "N/A",
    dbl: "137.64",
    xpax: "N/A",
  },
  {
    roomCategory: "Preferred Club Deluxe Family Room (2 adults) ",
    maxOccupancy: 2.4,
    minOccupancy: 2.2,
    sgl: "N/A",
    dbl: "260.39",
    xpax: "N/A",
  },
  {
    roomCategory: "Preferred Club Deluxe Family Room (3 adults)",
    maxOccupancy: 3.3,
    minOccupancy: 3,
    sgl: "N/A",
    dbl: "195.30",
    xpax: "N/A",
  },
  {
    roomCategory: "Preferred Club Deluxe Family Room (4 adults)",
    maxOccupancy: 4.2,
    minOccupancy: 4,
    sgl: "N/A",
    dbl: "162.44",
    xpax: "N/A",
  },
];

function Calculator() {
  const [roomRates, setRoomRates] = useState([]);
  const [guests, setGuests] = useState(null);
  const [nights, setNights] = useState(null);
  const [rate, setRate] = useState(null);

  const loadRates = (e) => {
    console.log(e.target.value);
    setRoomRates(rows.filter((room) => room.roomCategory === e.target.value));
  };

  const totalEstimate = () => {
    let newRate = rate.split("").slice(0).join("");
    console.log(newRate);
    let perGuest = parseInt(guests) * parseFloat(newRate);
    return perGuest * parseInt(nights);
  };

  return (
    <div className="calculator__container">
      <p className="calculator__title mb-4 mt-4">
        Please use the tool below to give you an estimate your total cost for
        your stay at the resort.
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
            onChange={(e) => setRate(e.target.value)}
          >
            <option selected>Choose rate</option>
            {roomRates.map((rate, idx) => (
              <>
                <option value={rate.sgl}>Single - ${rate.sgl}</option>
                <option value={rate.dbl}>Double - ${rate.dbl}</option>
                <option value={rate.xpax}>Xpax - ${rate.xpax}</option>
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
          />
        </div>
        <div className="col-sm-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter number of guests"
            aria-label="guests"
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
      </div>
      <h4 className="">
        Total estimate for stay at excluding flights:
        <small className="text-muted">
          {" "}
          {/*  */}
          {guests && nights && roomRates && rate
            ? Numeral(totalEstimate()).format("$0, 0.00")
            : "$0.00"}
        </small>
      </h4>
    </div>
  );
}

export default Calculator;
