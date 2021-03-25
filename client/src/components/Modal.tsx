import React from 'react'
import opencage from 'opencage-api-client'
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

import Filterbar from './Filterbar'
import SearchBar from './SearchBar'

import { OPENCAGE_KEY } from '@services/opencage/client'

import modalStyles from '@styles/modules/Modal.module.scss'

const Modal = ({ map }) => {

    const [pointedLocation, setPointedLocation] = React.useState(null)

    React.useEffect(() => {
        //console.log(map, currentLocation)
    })

    const handleCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {

            map.flyTo({
                center: [
                    position.coords.longitude,
                    position.coords.latitude,
                ],
                zoom: 15,
                bearing: 0,
                essential: true
            });

            if (pointedLocation) {
                pointedLocation.marker.remove();
            }
            let marker = new mapboxgl.Marker()
                .setLngLat([position.coords.longitude, position.coords.latitude])
                .addTo(map);

            opencage.geocode({ key: OPENCAGE_KEY, q: `${position.coords.latitude}, ${position.coords.longitude}`, language: 'fr' }).then(data => {
                if (data.status.code === 200) {
                    if (data.results.length > 0) {
                        setPointedLocation({ marker: marker, place: data.results[0] });
                    }
                }
            }).catch(e => {
                console.log('Error @handleCurrentPosition: ', e.message);
            });
        });
    };

    return (
        <div className={modalStyles.modal}>
            <div className={modalStyles.header}>
                Où voulez vous qu'on prenne en charge votre enfant ?
            </div>
            <div className={modalStyles.container}>
                <div className={modalStyles.searchBar}>
                    <SearchBar placeholder="Spécifiez un lieu de prise en charge" />
                </div>
                <Filterbar>
                    <Filterbar.Button><i className="ri-time-fill"></i> Maintenant <i className="ri-arrow-drop-down-line"></i></Filterbar.Button>
                </Filterbar>
                <Modal.List>
                    <Modal.CurrentPositionItem pointedLocation={pointedLocation} onClick={handleCurrentPosition} />
                </Modal.List>
            </div>
        </div>
    )
}


Modal.List = ({ children }: { children: any }) => <ul className={modalStyles.list}>{children}</ul>;

Modal.ListItem = ({ children, onClick }: { children: any, onClick?: React.MouseEventHandler<HTMLLIElement> }) => <li className={modalStyles.item} onClick={onClick}>{children}</li>;

Modal.ListIcon = ({ children, color }: { children: any; color?: string; }) => (
    <div className={modalStyles.icon}>
        <div className={[modalStyles.circle, color ? modalStyles[color] : null].join(' ')}>
            {children}
        </div>
    </div>
);

Modal.CurrentPositionItem = ({ onClick, pointedLocation }) => {
    return (
        <Modal.ListItem onClick={onClick}>
            <Modal.ListIcon color='blue'><i className="ri-map-pin-user-fill"></i></Modal.ListIcon>
            <Modal.ListContent>
                <div className={modalStyles.title}>{pointedLocation ? `${pointedLocation.place.components.house_number ? pointedLocation.place.components.house_number : null} ${pointedLocation.place.components.street ? pointedLocation.place.components.street : null}` : 'Autoriser la localisation'}</div>
                <div className={modalStyles.desc}>{pointedLocation ? 'Votre position actuelle' : 'Pour une meilleure expérience de prise en charge'}</div>
            </Modal.ListContent>
        </Modal.ListItem>
    )
}

Modal.ListContent = ({ children }: { children: any }) => <div className={modalStyles.content}>{children}</div>;

export default Modal