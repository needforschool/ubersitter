import React from 'react';
import Navbar from '@components/Navbar';
import Modal from '@components/Modal';
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

import mapStyles from "@styles/modules/Map.module.scss";

import { MAPBOX_TOKEN } from '@services/mapbox';

mapboxgl.accessToken = MAPBOX_TOKEN

const Map = () => {

    React.useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
        });
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    })

    return (
        <>
            <Navbar className={mapStyles.navbar} />
            <div className={mapStyles.map} >
                <div id="map" className={mapStyles.mapbox}></div>
                <Modal />
            </div>
        </>
    )
}

export default Map