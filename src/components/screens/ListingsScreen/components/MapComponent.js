import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

// util imports
import { price } from '../utils/price'; 

const linkDetailsToMarker = (id, data) =>{
  for(let i = 0; i < data.length; i++){
    if(data[i].listingId === id){
      return data[i];
    }
  }
}

const getMarkerData = (onCondition, data) =>{

  if(onCondition){
    return(
      <div class="container">
        <div class="row">
          <div class="col">
            <h6>Price:</h6>
            <p>{`${price(data.price)} per ${data.payRate}`}</p>
          </div>
          <div class="col">
            <h6>Square Footage:</h6>
            <p>{`${data.area} square feet`}</p>
          </div>
        </div>
      </div>
    );
  }
  else{
    return(
      <div> <p>There was an error loading this data</p></div>
    )
  }

}

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      showingInfoWindow: false,  
      activeMarker: {},          
      selectedPlace: {},          
      selectedPlaceData: {}
    }
  }

  onMarkerClick = (props, marker, e)=>{
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(this.state.activeMarker);
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 43.6532,
            lng: -79.3832
          }
        }
      >
        {this.props.data.map(listing => (
          <Marker 
            key={listing.listingId}
            id={listing.listingId}
            position={{lat: listing.coordinates[0], lng: listing.coordinates[1]}}
            onClick={this.onMarkerClick}
          />
  
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          {getMarkerData(this.state.showingInfoWindow, linkDetailsToMarker(this.state.activeMarker? this.state.activeMarker.id: null, this.props.data))}
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD-2PLKOM2KR6hqsXL_n8FUs1ImwGZKvew'
})(MapContainer);