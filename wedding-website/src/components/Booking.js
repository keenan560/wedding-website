import React from "react";
import "./Booking.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function createData(categories, maxOccupancy, minOccupancy, sgl, dbl, xpax) {
  return { categories, maxOccupancy, minOccupancy, sgl, dbl, xpax };
}

const rows = [
  createData(
    "Deluxe Room Tropical or Pool View",
    "3 or 2.1",
    "1",
    "$200.26",
    "$126.16",
    "$122.06"
  ),
  createData("Deluxe Swim Out", 2, 1, "$240.06", "$150.04", "N/A"),
  createData(
    "Preferred Club Deluxe Room",
    "3 or 2.1",
    1,
    "$259.90",
    "$162.44",
    "$159.34"
  ),
  createData(
    "Preferred Club Junior Suite",
    "3.1 or 2.2",
    1,
    "$400.51",
    "$200.25",
    "$197.16"
  ),
  createData(
    "Preferred Club Honeymoon Suite w/Jacuzzi",
    2,
    1,
    "$375.71",
    "$187.86",
    "N/A"
  ),
  createData(
    "Preferred Club 2 Bedroom Master Suite",
    "2.4 or 3.3",
    2,
    "N/A",
    "$275.27",
    "$272.17"
  ),
  createData(
    "Deluxe Family Room (2 adults)",
    2.4,
    2.2,
    "N/A",
    "$220.09",
    "N/A"
  ),
  createData("Deluxe Family Room (3 adults)", 3.3, 3, "N/A", "$164.92", "N/A"),
  createData("Deluxe Family Room (4 adults)", 4.2, 4, "N/A", "$137.64", "N/A"),
  createData(
    "Preferred Club Deluxe Family Room (2 adults) ",
    2.4,
    2.2,
    "N/A",
    "$260.39",
    "N/A"
  ),
  createData(
    "Preferred Club Deluxe Family Room (3 adults)",
    3.3,
    3,
    "N/A",
    "$195.30",
    "N/A"
  ),
  createData(
    "Preferred Club Deluxe Family Room (4 adults)",
    4.2,
    4,
    "N/A",
    "$162.44",
    "N/A"
  ),
];

const ratesInclude = [
  "Welcome cocktail and homemade chocolate chip cookies upon arrival",
  "Wireless internet service in all areas of the hotel",
  "6 restaurants, 5 à la Carte and 1 Café",
  "10 Bars with international and domestic drinks",
  "24-Room Service",
  "Theatre with daily and nightly live shows",
  "Outstanding weekly manager’s cocktail party",
  "Weekly special outdoor dinner (beach area subject to weather conditions)",
  "Daily entertainment with a wide range of land and water sports",
  "Movies shown nightly",
  "Tropical fruits take away station from 12:00 – 4:00 pm",
  "One swimming pool, kids pool, Jacuzzi and sun decks with shade areas",
  "Fitness center",
  "Fully supervised Explorer’s Club for Kids",
  "Core Zone Teens Club with billiards, video games and more for children over 13",
  "Sandy Beach",
  "Kayaks",
  "Snorkeling",
  "Diving Clinic",
  "2 Tennis courts",
  "Pool Games",
  "Beach/pool Aerobics",
  "Dance Lessons: Merengue’s, Salsa",
  "Spanish Lessons",
  "Beach Volleyball",
  "Outdoor Ping-Pong",
  "Board Games",
  "Euro-Bungee (kids up to 12 years old)",
  "Ocean Trampoline (kids up to 12 years old)",
];
const ratesNotInclude = [
  "ATM machine",
  "Laundry service available 7 days",
  "Motorized water sports",
  "Medical facility",
  "Full-service world-class Spa",
  "Wedding Packages",
  "Golf Packages",
  "Private romantic beachfront dinners",
  "Select wines & Champagne",
  "Car rental service",
  "Telephone and cell phone service",
  "Internet Center (9:00 a.m. – 10:00 p.m.)",
  "Shopping Area: Logo Shop, Gift Shop, Handcrafts & Cigar Shop, Jewelry",
  "Babysitting",
  "Photo services",
  "Tours",
  "Bank/Exchange office",
  "Scuba Diving",
  "Boat & Fishing Excursions",
  "Surcharge for private group functions",
  "Audio visual equipment",
  "Telephone, Internet services, Business Center",
  "Airport transfers",
  "Decoration, Music and Entertainment",
  "Room Deliveries: $2.00 USD regular service and $4.00 USD personalized per delivery per room",
  "Any charge or consumption not mentioned in this package ",
];

function Booking() {
  return (
    <div className="booking__container mx-5">
      <h1 className="booking__title">Booking Information</h1>
      <h3 className="booking__rates">Room Rates</h3>
      <div className="arrow__container">
        <span id="table__arrow" class="material-icons">
          navigate_next
        </span>
        <p>Scroll table to right to see rates.</p>
      </div>

      <TableContainer component={Paper}>
        <Table className="" size="small" aria-label="a dense table">
          <TableHead className="booking__tableHead">
            <TableRow>
              <TableCell className="booking__headCell" align="left">
                Room Categories
              </TableCell>
              <TableCell className="booking__headCell" align="center">
                Max Occupancy
              </TableCell>
              <TableCell className="booking__headCell" align="center">
                Min Occupancy
              </TableCell>
              <TableCell className="booking__headCell" align="right">
                SGL
              </TableCell>
              <TableCell className="booking__headCell" align="right">
                DBL
              </TableCell>
              <TableCell className="booking__headCell" align="right">
                XPAX
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.categories}
                </TableCell>
                <TableCell align="center">{row.maxOccupancy}</TableCell>
                <TableCell align="center">{row.minOccupancy}</TableCell>
                <TableCell align="right">{row.sgl}</TableCell>
                <TableCell align="right">{row.dbl}</TableCell>
                <TableCell align="right">{row.xpax}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p className="booking__disclaimer">
        *Max and Min Occupancy - A number with a decimal i.e. "2.1", means 2
        adults and 1 child.
      </p>
      <p className="booking__disclaimer">
        *The rates you see are per person per night. Children 12 and under are
        free.
      </p>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <Button
                className="collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Rates include
              </Button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <ul>
                {ratesInclude.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <Button
                className="collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Rates do not include
              </Button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <ul>
                {ratesNotInclude.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
