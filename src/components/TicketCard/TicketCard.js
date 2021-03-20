import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './TicketCard.css'

const TicketCard = (props) => {
    const {ticketName, price, image, id} = props.ticket; 

    const bgStyle = {
        backgroundImage: `url(${image})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    } 

    return (
        <div className="col-md-3 card-style">
            <div style={bgStyle} className="card-box m-4 p-2 text-center text-white">
                <div style={{height: '170px'}}>
                    <h2>{ticketName}</h2>
                   <div>
                        <Button className="mt-4" as={Link} to={`/booking/${id}`} variant="success">Buy now</Button>
                    </div>
                </div>
                <div>
                    <h3 className="pt-5">$ {price}</h3>
                </div>
            </div>
        </div>       
    );
};

export default TicketCard;