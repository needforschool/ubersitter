import React from 'react';
import Navbar from '@components/Navbar';
import Modal from '@components/Modal';
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

import mapStyles from "@styles/modules/Map.module.scss";

import { MAPBOX_TOKEN } from '@services/mapbox';

mapboxgl.accessToken = MAPBOX_TOKEN

const Map = () => {

    const mapRef = React.useRef<HTMLDivElement>();
    const [map, setMap] = React.useState(null)

    React.useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [2.35, 48.85,],
            zoom: 5
        })
    })

    return (
        <>
            <Navbar className={mapStyles.navbar} />
            <div className={mapStyles.map} >
                <div ref={mapRef} className={mapStyles.mapbox}></div>
                <Modal map={map} />
            </div>
        </>
    )
}

export default Map