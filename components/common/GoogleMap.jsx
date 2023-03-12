import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        const mapStyles = {
            position: 'relative',
            width: '470px',
            height: '500px'
        };
    
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={this.props.location}
                >
                    <Marker position={this.props.location} />
                </Map>
            </div>
        );
    }
}
  
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD5ehujEawIkZN6IC3aCJOMa5GKTGHbhhM'
})(MapContainer);