import React, { useEffect, useState } from "react";
import "./Party.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import party from "../assets/party.jpg";
import party2 from "../assets/party2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 300,
    maxWidth: 360,
    backgroundColor: "lightgray",
    borderRadius: 20,
    marginBottom: 10,
  },
}));

const brideParty = [
  { firstName: "Diana", lastName: "Coats", title: "Bride" },
  { firstName: "Natalia", lastName: "Villafana", title: "Matron of Honor" },
  { firstName: "Carlina", lastName: "Paniagua", title: "Maid of Honor" },
  { firstName: "Elizabeth", lastName: "Coats", title: "Bridesmaid" },
];
const groomParty = [
  { firstName: "Keenan", lastName: "Mapp", title: "Groom" },
  { firstName: "Paul", lastName: "Mapp", title: "Patron of Honor" },
  { firstName: "Eric", lastName: "Saldibar", title: "Best Man" },
];

const otherList = [
  { firstName: "Jayden", lastName: "Kilroy", title: "Ring Bearer" },
  { firstName: "Faith", lastName: "Villafana", title: "Flower Girl" },
  { firstName: "Victoria", lastName: "Villafana", title: "Flower Girl" },
  { firstName: "Jiselle", lastName: "Mapp", title: "Flower Girl" },
];
function Party() {
  const classes = useStyles();
  const [brideList, setBrideList] = useState([]);
  const [groomList, setGroomList] = useState([]);

  useEffect(() => {
    setBrideList(brideParty);
    setGroomList(groomParty);
  }, []);

  return (
    <div className="main">
      <div className="party__container animate__animated animate__fadeInDown animate__slow">
        <div className="party__bride ">
          <h1 className="party__title">Bridal Party</h1>
          <List className={classes.root + " " + "shadow"}>
            {brideList.map((person, idx) => (
              <ListItem key={idx} className="party__item">
                <ListItemText
                  primary={person.firstName + " " + person.lastName}
                  secondary={"Title:" + " " + person.title}
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div className="party__groom">
          <h1 className="party__title">Groom Party</h1>
          <List className={classes.root + " " + "shadow"}>
            {groomList.map((person, idx) => (
              <ListItem key={idx} className="party__item">
                <ListItemText
                  primary={person.firstName + " " + person.lastName}
                  secondary={"Title:" + " " + person.title}
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div className="party__other">
          <h1 className="party__title">Others</h1>
          <List className={classes.root + " " + "shadow"}>
            {otherList.map((person, idx) => (
              <ListItem key={idx} className="party__item">
                <ListItemText
                  primary={person.firstName + " " + person.lastName}
                  secondary={"Title:" + " " + person.title}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <div className="party__banner__container">
        <img
          alt="photo"
          src={party}
          className="party__banner img-thumbnail shadow animate__animated animate__fadeIn animate__slower"
        />
        <h1 className="party__banner__desc">
          We want to give a special thanks to the wonderful friends and family
          particiapting in this event. - Keenan & Diana
        </h1>
        <img
          alt="photo"
          src={party2}
          className="party__banner img-thumbnail shadow animate__animated animate__fadeIn animate__slower"
        />
      </div>
    </div>
  );
}

export default Party;
