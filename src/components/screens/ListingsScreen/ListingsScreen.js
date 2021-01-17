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
        if(this.props.listingsLoading){
            return(
                <Loading/>
            );
        }
        else if(this.props.listingsErrMess){
            return(
                <div className="container">
                    <div className="row">
                        <h1>Sorry, looks like there are some errors going on.</h1>
                    </div>
                    <div className="row">
                        <h3>{this.props.listingsErrMess ? "Error: " + this.props.listingsErrMess: ""}</h3>
                    </div>
                </div>
            );
        }
        else{
            console.log(this.props.listings);
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            {/* <Map data={listingInput}/> */}
                            <Map data={this.props.listings}/>
                        </div>
                        <div className="col-12 col-lg-5">
                            {/* {mapListingCards(listingInput)} */}
                            {mapListingCards(this.props.listings)}
                        </div>
                    </div>
                </div>
            );
        }
    }
}
 
export default LisitngScreen;