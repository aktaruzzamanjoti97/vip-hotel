import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData.json";
import Map from "./Map";
import ticketPhoto from "../../images/assests-img/tickets 3.png";
import "./Booking.css";

const Booking = () => {
  const { ticketId } = useParams();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [hasSearched, setHasSearched] = useState(true);

  const showSelected = fakeData[ticketId - 1];

  console.log(showSelected);

  const { register, handleSubmit, watch, onSubmit } = useForm();

  const handleBlur = (e) => {
    if (e.target.name === "from") {
      setFrom(e.target.value);
    }
    if (e.target.name === "to") {
      setTo(e.target.value);
    }
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            {hasSearched && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="from">Pick Form</label>
                <input
                  onBlur={handleBlur}
                  className="form-control"
                  name="from"
                  Placeholder="From"
                />
                <br />
                <label htmlFor="to">Pick To</label>
                <input
                  onBlur={handleBlur}
                  className="form-control"
                  name="to"
                  Placeholder="To"
                />
                <br />
                <div className="date">
                  <label for="start">Travel Date:</label>
                  <input
                    className="form-control"
                    type="datetime-local"
                    id="start"
                    name="trip-start"
                    value="yy-mm-dd"
                  />
                </div>
                <br />
                <Button
                  onClick={() => setHasSearched(!hasSearched)}
                  className="form-control"
                >
                  Search
                </Button>
                <br />

                {/* as={Link} to={`/destination/${showSelected.id}`} */}
              </form>
            )}
          </Card.Body>
        </Card>
        {!hasSearched && (
          <div className="showRoute">
            <h2
              style={{ backgroundColor: "tomato" }}
              className="text-center ml-3 mb-5 p-2"
            >
              {from} To {to}
            </h2>
            <div className="d-flex">
              <img
                className="px-2"
                style={{ width: "50px" }}
                src={ticketPhoto}
                alt=""
              />
              <h6 className="px-2">{showSelected.ticketName}</h6>
              <p className="px-2">$ {showSelected.price}</p>
            </div>

            <div className="d-flex ">
              <img
                className="px-2"
                style={{ width: "50px" }}
                src={ticketPhoto}
                alt=""
              />
              <h6 className="px-2">{showSelected.ticketName}</h6>
              <p className="px-2">$ {showSelected.price}</p>
            </div>

            <div className="d-flex">
              <img
                className="px-2"
                style={{ width: "50px" }}
                src={ticketPhoto}
                alt=""
              />
              <h6 className="px-2">{showSelected.ticketName}</h6>
              <p className="px-2">$ {showSelected.price}</p>
            </div>
            <br />
            <div className="text-center">
              <Button
                className="text-center"
                variant="dark"
                onClick={() => setHasSearched(!hasSearched)}
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="col-md-8">
        <Map />
      </div>
    </div>
  );
};

export default Booking;
