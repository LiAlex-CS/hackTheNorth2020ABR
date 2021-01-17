import React from 'react';
import { price } from '../ListingsScreen/utils/price';

export default function SingleListing({data}){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-7">
                    <h1>{data.title}</h1>
                    <h3>{`${price(data.price)} per ${data.payRate}`}</h3>
                    <h5 className="text-muted">{data.adress}</h5>
                    <div className="col-12" style={{backgroundColor: 'skyblue'}}>
                        <h2> Primary Features </h2>
                        <div className="col">
                            <h5>Number of Bedrooms</h5>
                            <p>{data.numBedrooms}</p>
                            <h5>Number of Bathrooms</h5>
                            <p>{data.numBathrooms}</p>
                        </div>
                        <div className="col">
                            <h4>Square Footage Area</h4>
                            <p>{data.area}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5">
                    <h2> Contact the seller! </h2>
                    <div className="row">
                        <h4>Email</h4>
                        <p>{data.userId}</p>
                    </div>
                    <div className="row">
                        <h4>Email</h4>
                        <p>{data.telnum}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <p>{data.description}</p>
            </div>
        </div>
    );
}