import React from 'react';
import { useRouter } from 'next/router';

import Navbar from '@components/Navbar';
import Modal from '@components/Modal';
import Loading from './Loading';

import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

import mapStyles from "@styles/modules/Map.module.scss";

import { MAPBOX_TOKEN } from '@services/mapbox';

mapboxgl.accessToken = MAPBOX_TOKEN

const Map = ({ session }) => {

    const router = useRouter();
    if (!session) {
        router.push('/', null, { shallow: true });
        return <Loading />
    }

    const mapRef = React.useRef<HTMLDivElement>();
    const [map, setMap] = React.useState(null)

    React.useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [2.35, 48.85,],
            zoom: 5
        })

        setMap(map)
    }, [])

    return (
        <>
            <Navbar className={mapStyles.navbar} session={session} />
            <div className={mapStyles.map} >
                <div ref={mapRef} className={mapStyles.mapbox}></div>
                {map ? <Modal map={map} /> : null}
            </div>
        </>
    )
}

export default Map