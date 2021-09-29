import React from "react";
import "./Travel.css";
import car from "../assets/car.jpg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const indoor = [
  "Ping-pong",
  "Basketball",
  "Beach and pool volleyball",
  "Bocce-ball",
  "Jogging trail",
  "Darts",
  "Giant chess board",
  "Tennis/tennis clinics*",
  "Board games",
  "Yoga/Stretching",
  "Aerobics",
  "Beach football",
  "Dance lessons",
  "Cocktail and cooking lessons",
  "Rum tasting",
  "Spanish lessons",
  "Explorer's Club for Kids*",
  "Core Zone Teen's Club*",
  "Dominican Market - fine handicrafts, hand-made jewelry and more",
  "Theatre with live entertainment",
  "Themed nights",
  "Casino",
  "Horseback riding*",
  "Golf*",
  "Baseball cage",
  "Archery",
  "Inflatable climbing iceberg",
  "Beach Olympics",
  "Mexican bingo",
];

const water = [
  "Water aerobics",
  "Non-motorized water sports",
  "Catamarans",
  "Introductory scuba classes in the pool",
  "Scuba diving*",
  "Kayaks",
  "Wind-surfing",
  "Snorkeling",
  "Motorized water sports* - SEA PRO",
  "Catamarans",
];

const casino = [
  "Open 4:00 p.m. – 3:00 a.m.",
  "Blackjack tables",
  "Poker tables",
  "Slot machines",
];

const golf = [
  "Punta Espada Golf Club",
  "Cocotal Golf & Country Club - Guests of Dreams Punta Cana Resort & Spa can take advantage of Complimentary Green Fees.",
  "Punta Blanca Golf Course",
  "Punta Cana Resort & Club",
];

function createData(name, cuisine, dressCode, hours) {
  return { name, cuisine, dressCode, hours };
}
const restRows = [
  createData(
    "Bordeaux",
    "French Gourmet",
    "Casual Elegance",
    "6:00 pm – 11:00 pm"
  ),
  createData("Himitsu", "Asian", "Casual Elegance", "6:00 pm – 11:00 pm"),
  createData(
    "Oceana",
    "Grilled Specialties",
    "Casual Elegance",
    "6:00 pm – 11:00 pm"
  ),
  createData(
    "Portofino",
    "Italian Gourmet",
    "Casual Elegance",
    "6:00 pm – 11:00 pm"
  ),
  createData(
    "Seaside Grill",
    "Grilled Specialties",
    "Casual",
    "6:00 pm – 11:00 pm"
  ),
  createData(
    "Bordeaux",
    "French Gourmet",
    "Casual Elegance",
    "6:00 pm – 11:00 pm"
  ),
  createData(
    "Bordeaux",
    "French Gourmet",
    "Casual Elegance",
    "6:00 pm – 11:00 pm"
  ),
  createData(
    "Bordeaux",
    "French Gourmet",
    "Casual Elegance",
    "6:00 pm – 11:00 pm"
  ),
  createData(
    "Bordeaux",
    "French Gourmet",
    "Casual Elegance",
    "6:00 pm – 11:00 pm"
  ),
];

function createBarData(name, hours, location) {
  return { name, hours, location };
}

const barRows = [
  createBarData("Mantees Bar", "10:00 am - 6:00pm", "swim-up"),
  createBarData("Oceana Bar", "12:00 pm - 11:00 p.m.", "Oceana Restaurant"),
  createBarData("Bordeaux Bar", "6:00 pm - 11:00 p.m.", "Bordeaux restaurant"),
  createBarData("Sugar Reef", "10:00 am – 7:00 pm", "Pool Bar"),
  createBarData("Veranda", "06:00 pm – 1:00 am", "Santo Domingo plaza"),
  createBarData("Rendezvouz", "10:00 am – 01:00 midnight", "Lobby"),
  createBarData("Barracuda", "10:00 am – 6:00 pm", "Pool Bar"),
  createBarData("Showtime", "10:00 am – 11:00 pm", "Theater"),
  createBarData("Desires Disco", "11:00 pm – 2:00 am", "Disco ( Adults Only)"),
];

function Travel() {
  return (
    <div className="travel">
      <div className="travel__container">
        <div className="accordion" id="accordionExample">
          <h1 className="travel__title">Things to Do </h1>
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
                  Indoor/Outdoor Activities
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
                  {indoor.map((item) => (
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
                  Water Sports
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
                  {water.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <Button
                  className="collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Casino*
                </Button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul>
                  {casino.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <Button
                  className="collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Nearby Golf Courses
                </Button>
              </h2>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul>
                  {golf.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFive">
              <h2 className="mb-0">
                <Button
                  className="collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Babysitting*
                </Button>
              </h2>
            </div>
            <div
              id="collapseFive"
              className="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>
                  Babysitting can be scheduled through the concierge, please
                  contact for details
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={car}
          alt="car"
          className="travel__img img-thumbnail shadow animate__animated animate__fadeIn animate__fast"
        />
      </div>
      <h1 className="travel__title">Restaurants</h1>
      <TableContainer component={Paper}>
        <Table className="" size="small" aria-label="a dense table">
          <TableHead className="booking__tableHead">
            <TableRow>
              <TableCell className="booking__headCell" align="left">
                Name
              </TableCell>
              <TableCell className="booking__headCell" align="center">
                Cuisine
              </TableCell>
              <TableCell className="booking__headCell" align="center">
                Dress Code
              </TableCell>
              <TableCell className="booking__headCell" align="right">
                Hours
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restRows.map((row) => (
              <TableRow key={row.name} className="table__row">
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.cuisine}</TableCell>
                <TableCell align="center">{row.dressCode}</TableCell>
                <TableCell align="right">{row.hours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h1 className="travel__title">Bars</h1>
      <TableContainer component={Paper}>
        <Table className="" size="small" aria-label="a dense table">
          <TableHead className="booking__tableHead">
            <TableRow>
              <TableCell className="booking__headCell" align="left">
                Name
              </TableCell>
              <TableCell className="booking__headCell" align="center">
                Hours
              </TableCell>
              <TableCell className="booking__headCell" align="left">
                Location
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {barRows.map((row) => (
              <TableRow key={row.name} className="table__row">
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.hours}</TableCell>
                <TableCell align="left">{row.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="travel__info__container">
        <h2>
          To find about more about the hotel and resort please click below.
        </h2>
        <Button
          className="travel__info"
          href="https://www.dreamsresorts.com/en_us/resorts/dominican-republic/punta-cana.html"
          target="_blank"
        >
          More info
        </Button>
      </div>
    </div>
  );
}

export default Travel;
