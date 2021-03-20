import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData.json';
import ticketPhoto from '../../../src/images/assests-img/tickets 3.png';
import './Destination.css';
import map from '../../images/assests-img/image 6.png'


const Destination = () => {
    const {showId} = useParams();
    const showRoute = fakeData[showId - 1];
    console.log(showRoute);
    return (
        <div className="row">
            <div className="col-md-5 mt-3">
                
                <div className="showRoute">
                    <h2 style={{backgroundColor: 'tomato'}} className="text-center ml-3 mb-5">Dhaka To Sylhet</h2>
                    <div className="d-flex"> 
                        <img className="px-2" style={{width: '50px'}} src={ticketPhoto} alt=""/>
                        <h6 className="px-2">{showRoute.ticketName}</h6>
                        <p className="px-2">$ {showRoute.price}</p>
                    </div>

                    <div className="d-flex ">
                        <img className="px-2" style={{width: '50px'}} src={ticketPhoto} alt=""/>
                        <h6 className="px-2">{showRoute.ticketName}</h6>
                        <p className="px-2">$ {showRoute.price}</p>
                    </div>

                    <div className="d-flex">
                        <img className="px-2" style={{width: '50px'}} src={ticketPhoto} alt=""/>
                        <h6 className="px-2">{showRoute.ticketName}</h6>
                        <p className="px-2">$ {showRoute.price}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-7">
                
                    <img s src={map} alt=""/>
                
            </div>
        </div>
    );
};

export default Destination;