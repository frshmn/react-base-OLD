import React, { useState } from "react";
import { GoogleMap, LoadScript, InfoWindow, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '400px',
    height: '400px',
}
const ApiKey = "AIzaSyAVxVfqmwUYKfZ1UAJiLZpKREq0M_ZrcpE";

interface Props {
    positionLat: number;
    positionLng: number;
    centerLat: number;
    centerLng: number;
    zoom: number;
}

const Map = ({ positionLat, positionLng, centerLat, centerLng, zoom }) => {
    const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
    const position = {
        lat: positionLat,
        lng: positionLng,
    };
    const center = {
        lat: centerLat,
        lng: centerLng,
    };
    const infoWindowOptions = {
        pixelOffset: size,
    };
    const createOffsetSize = () => {
        return setSize(new window.google.maps.Size(0, -45));
    };
    return (
        <LoadScript googleMapsApiKey={ApiKey} onLoad={() => createOffsetSize()}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
            >
                <Marker position={position} />
                <InfoWindow position={position} options={infoWindowOptions}>
                    <div>
                        <h3>テストウィンドウ</h3>
                    </div>
                </InfoWindow>
            </GoogleMap>
        </LoadScript>
    );
};
export default Map;