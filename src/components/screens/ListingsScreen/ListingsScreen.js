import React, { Component } from 'react';
// components
import Map from './components/MapComponent';
import ListingCard from './components/ListingCard';
import Loading from '../../LoadingComponent';
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
    }
    render() {
        if(this.props.listingsLoading || this.props.profilesLoading){
            return(
                <Loading/>
            );
        }
        else if(this.props.listingsErrMess || this.props.profilesErrMess){
            return(
                <div className="container">
                    <div className="row">
                        <h1>Sorry, looks like there are some errors going on.</h1>
                    </div>
                    <div className="row">
                        <h3>{this.props.listingsErrMess ? "Error: " + this.props.listingsErrMess: ""}</h3>
                    </div>
                    <div className="row">
                        <h3>{this.props.profilesErrMess ? "Error: " + this.props.profilesErrMess: ""}</h3>
                    </div>
                </div>
            );
        }
        else{
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
}
 
export default LisitngScreen;