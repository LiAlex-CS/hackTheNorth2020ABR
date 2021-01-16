import React, { Component } from 'react';
// components
import Map from './components/MapComponent';
import ListingCard from './components/ListingCard';
// utils
import { listingInput } from './utils/testInput'


const mapListingCards = (data) =>(
    data.map((listing)=>(
        <div className="row">
            <ListingCard data={listing}/>
        </div>
    ))
);

class LisitngScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <Map data={listingInput}/>
                    </div>
                    <div className="col-12 col-lg-5">
                        {mapListingCards(listingInput)}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LisitngScreen;