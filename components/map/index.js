import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const IconWrapper = styled.div`
  background-color: #271a67;
  border-radius: 2px;
  color: white;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-45deg);
  .svg-inline--fa {
    transform: rotate(45deg);
    width: 1em;
  }
`;

const Marker = () => (
  <IconWrapper>
    <FontAwesomeIcon icon={faMapMarkerAlt} />
  </IconWrapper>
);

class GreyMap extends Component {
  static defaultProps = {
    center: {
      lat: -33.77522262906519,
      lng: 151.26261089833844,
    },
    zoom: 14,
  };

  createMapOptions(maps) {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
      },
      mapTypeControl: false,
      scaleControl: false,
      scrollwheel: false,
      streetViewControl: false,
      draggable: true,
      styles: [
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [{ color: "#d3d3d3" }],
        },
        {
          featureType: "transit",
          stylers: [{ color: "#808080" }, { visibility: "off" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ visibility: "on" }, { color: "#b3b3b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "road.local",
          elementType: "geometry.fill",
          stylers: [
            { visibility: "on" },
            { color: "#ffffff" },
            { weight: 1.8 },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry.stroke",
          stylers: [{ color: "#d7d7d7" }],
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [{ visibility: "on" }, { color: "#ebebeb" }],
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [{ color: "#a7a7a7" }],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [{ visibility: "on" }, { color: "#efefef" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#696969" }],
        },
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ visibility: "on" }, { color: "#737373" }],
        },
        {
          featureType: "poi",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [{ color: "#d6d6d6" }],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {},
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [{ color: "#dadada" }],
        },
      ],
    };
  }

  render() {
    const { center, zoom, options } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "45vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAy_wPWVA21IIyqmuSkmUPr84wnE1rYi3Q" }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={this.createMapOptions}
        >
          <Marker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GreyMap;
