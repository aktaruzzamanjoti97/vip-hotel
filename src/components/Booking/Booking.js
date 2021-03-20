import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import fakeData from '../../fakeData.json';

const Booking = () => {
  const {ticketId} = useParams();

  const showSelected = fakeData[ticketId - 1];

 
  console.log(showSelected);

    const { register, handleSubmit, watch, onSubmit } = useForm();
  return (
    <div className="row">
      <div className="col-md-4">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="example">Pick Form</label>
              <input className="form-control" name="example" defaultValue="Dhaka" ref={register} />
              <br/>
              <label htmlFor="example">Pick To</label>
              <input className="form-control" name="example" defaultValue="Sylhet" ref={register} />
              <br/>
              <Button as={Link} to={`/destination/${showSelected.id}`} className="form-control">Search</Button>
            </form>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-8">

      </div>
    </div>
  );
};

export default Booking;
