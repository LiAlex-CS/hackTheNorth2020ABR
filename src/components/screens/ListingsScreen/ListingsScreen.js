import React, { Component } from 'react';
// components
import Map from './components/MapComponent';
import ListingCard from './components/ListingCard';
// utils
import { listingInput } from './utils/testInput'

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
                        <Map/>
                    </div>
                    <div className="col-5">
                        <ListingCard data={listingInput}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LisitngScreen;