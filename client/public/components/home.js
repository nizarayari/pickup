import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';


export default class Home extends Component {

  // onMapCreated(map) {
  //   map.setOptions({
  //     disableDefaultUI: true
  //   });
  // };

  onDragEnd(e) {
    console.log('onDragEnd', e);
  };

  onCloseClick() {
    console.log('onCloseClick');
  };

  onClick(e) {
    console.log('onClick', e);
  };

  render() {

  const coords = {
    lat: 34.024212,
    lng: -118.496475
  };

    return (
      <Gmaps
        width={'1200px'}
        height={'1000px'}
        left={'362px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyAlCGs74Skpymw9LLAjkMg-8jQ1gIue9n8'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

};
