import { useRouter } from 'next/router';
import React from 'react'
import axios from 'axios'
import opencage from 'opencage-api-client'
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

import Filterbar from './Filterbar'
import SearchBar from './SearchBar'
import Button from './Button';

import { OPENCAGE_KEY } from '@services/opencage/client'

import modalStyles from '@styles/modules/Modal.module.scss'
import buttonStyles from '@styles/modules/Button.module.scss'
import { endpoint } from '@services/mvc';

const Modal = ({ map, session }) => {

    const router = useRouter();

    const [state, setState] = React.useState({ step: modalType.SelectLocation })

    return (
        <div className={modalStyles.modal}>
            {{
                [modalType.SelectLocation]: <Modal.SelectLocation map={map} state={state} setState={setState} />,
                [modalType.SelectProfessionnal]: <Modal.SelectProfessional session={session} state={state} setState={setState} router={router} />,
                [modalType.Children]: <Modal.Children session={session} state={state} setState={setState} router={router} />,
                [modalType.AddChildren]: <Modal.AddChildren session={session} state={state} setState={setState} />,
            }[state.step]}
        </div >
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

Modal.CurrentPositionItem = ({ onClick, pointedLocation }) => (
    <Modal.ListItem onClick={onClick}>
        <Modal.ListIcon color='blue'><i className="ri-map-pin-user-fill"></i></Modal.ListIcon>
        <Modal.ListContent>
            <div className={modalStyles.title}>{pointedLocation ? `${pointedLocation.place.components.house_number ? pointedLocation.place.components.house_number : null} ${pointedLocation.place.components.street ? pointedLocation.place.components.street : null}` : 'Autoriser la localisation'}</div>
            <div className={modalStyles.position}>{pointedLocation ? 'Votre position actuelle' : 'Pour une meilleure expérience de prise en charge'}</div>
        </Modal.ListContent>
    </Modal.ListItem>
)

Modal.ListContent = ({ children }: { children: any }) => <div className={modalStyles.content}>{children}</div>;

Modal.ListDetails = ({ children }: { children: any }) => <div className={modalStyles.details}>{children}</div>;

/* Pages */

export const modalType = {
    SelectLocation: 0,
    SelectProfessionnal: 1,
    Children: 10,
    AddChildren: 11,
}

Modal.SelectLocation = ({ map, state, setState }) => {

    const [pointedLocation, setPointedLocation] = React.useState(null);
    const [resultList, setResultList] = React.useState(null);

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
                        setState({ ...state, step: modalType.SelectProfessionnal });
                    }
                }
            }).catch(e => {
                console.log('Error @handleCurrentPosition: ', e.message);
            });
        });
    };

    const handleItemPosition = (item) => {
        map.flyTo({
            center: [
                item.geometry.lng,
                item.geometry.lat,
            ],
            zoom: 15,
            bearing: 0,
            essential: true
        });

        if (pointedLocation) {
            pointedLocation.marker.remove();
        }
        let marker = new mapboxgl.Marker()
            .setLngLat([item.geometry.lng, item.geometry.lat])
            .addTo(map);
        setPointedLocation({ marker: marker, place: item });
        setState({ ...state, step: modalType.SelectProfessionnal });
    }

    return (
        <>
            <div className={modalStyles.header}>Où voulez vous qu'on prenne en charge votre enfant ?</div>
            <div className={modalStyles.container}>
                <div className={modalStyles.searchBar}>
                    <SearchBar placeholder="Spécifiez un lieu de prise en charge" setResultList={setResultList} />
                </div>
                <Filterbar>
                    <Filterbar.Button><i className="ri-time-fill"></i> Maintenant <i className="ri-arrow-drop-down-line"></i></Filterbar.Button>
                </Filterbar>
                <Modal.List>
                    {resultList ?
                        resultList.map(resultItem => (
                            <Modal.ListItem>
                                <Modal.ListIcon><i className="ri-map-pin-2-fill"></i></Modal.ListIcon>
                                <Modal.ListContent>
                                    <div className={modalStyles.title} onClick={() => handleItemPosition(resultItem)}>
                                        {resultItem.formatted}
                                    </div>
                                </Modal.ListContent>
                            </Modal.ListItem>
                        ))
                        :
                        <Modal.CurrentPositionItem pointedLocation={pointedLocation} onClick={handleCurrentPosition} />
                    }
                </Modal.List>
            </div>
            <Filterbar className={modalStyles.childrenBar}>
                <Filterbar.Button onClick={() => { setState({ ...state, step: modalType.Children }) }}><i className="ri-parent-fill"></i> Gérez vos enfants <i className="ri-arrow-drop-right-line"></i></Filterbar.Button>
            </Filterbar>
        </>
    )
}

Modal.SelectProfessional = ({ router, session, state, setState }) => {

    const [proList, setPro] = React.useState(null);

    React.useEffect(() => {
        let formData = new FormData();
        formData.append('email', session.email)
        formData.append('token', session.token)
        axios.post(`${endpoint}professional`, formData)
            .then(res => {
                setPro(res.data);
            })
            .catch(error => {
                //TODO: error message
            }).finally(() => {
                console.log(proList);
            });
    }, [])

    return (
        <>
            <div className={modalStyles.header}>Choisissez un professionnel</div>
            <div className={modalStyles.container}>
                <Modal.List>
                    {proList ?
                        proList.map(proItem => (
                            <Modal.ListItem key={proItem.id}>
                                <Modal.ListIcon color='procelain'><i className="ri-user-heart-fill"></i></Modal.ListIcon>
                                <Modal.ListContent>
                                    <div className={modalStyles.title}>{proItem.company_name}</div>
                                    <div className={modalStyles.desc}>{proItem.company_adress + ', ' + proItem.company_city + ', ' + proItem.company_country}</div>
                                </Modal.ListContent>
                                <Modal.ListDetails>{proItem.price}€/h</Modal.ListDetails>
                            </Modal.ListItem>
                        ))
                        :
                        <div style={{ textAlign: 'center', paddingTop: '50px' }}>Il n'y a pas l'air d'y avoir de professionnel par ici<br />Réessayez plus tard.</div>
                    }
                </Modal.List>
            </div>
            <Filterbar className={modalStyles.childrenBar}>
                <Filterbar.Button onClick={() => { setState({ ...state, step: modalType.SelectLocation }) }}><i className="ri-arrow-drop-left-line"></i> Retour</Filterbar.Button>
            </Filterbar>
        </>
    )
}

Modal.Children = ({ session, router, state, setState }) => {

    const [childrenList, setChildrenList] = React.useState(null)

    React.useEffect(() => {
        //console.log(map, currentLocation)
        //console.log(resultList)
        let formData = new FormData();
        formData.append('email', session.email)
        formData.append('token', session.token)
        axios.post(`${endpoint}children`, formData)
            .then(res => {
                setChildrenList(res.data);
            })
            .catch(error => {
                //TODO: error message
            }).finally(() => {
                console.log(childrenList);
            });
    }, [])

    const getAge = (dateString) => {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    return (
        <>
            <div className={[modalStyles.header, modalStyles.orange].join(' ')}>Gestion des enfants</div>
            <div className={modalStyles.container}>
                <Modal.List>
                    {childrenList ?
                        childrenList.map(childtItem => (
                            <Modal.ListItem key={childtItem.id} onClick={() => router.push(`/children/${childtItem.id}`, null, { shallow: true })}>
                                <Modal.ListIcon color='orange'><i className="ri-user-5-fill"></i></Modal.ListIcon>
                                <Modal.ListContent>
                                    <div className={modalStyles.title}>{childtItem.firstname + ' ' + childtItem.lastname}</div>
                                    <div className={modalStyles.desc}>{(childtItem.gender = 'male' ? 'Garçon' : childtItem.gender = 'female' ? 'Fille' : childtItem.gender) + ', ' + getAge(childtItem.birthdate)}</div>
                                </Modal.ListContent>
                            </Modal.ListItem>
                        ))
                        :
                        <div style={{ textAlign: 'center', paddingTop: '50px' }}>Il n'y a pas l'air d'y avoir d'enfants par ici<br />Commencez par en ajouter pour continuer.</div>
                    }
                </Modal.List>
            </div>
            <Filterbar className={modalStyles.childrenBar}>
                <Filterbar.Button onClick={() => { setState({ ...state, step: modalType.SelectLocation }) }}><i className="ri-arrow-drop-left-line"></i> Retour</Filterbar.Button>
                <Filterbar.Button onClick={() => { setState({ ...state, step: modalType.AddChildren }) }}><i className="ri-add-line"></i> Ajouter un enfant</Filterbar.Button>
            </Filterbar>
        </>
    )
}

Modal.AddChildren = ({ session, state, setState }) => {

    const [addChildren, setAddChildren] = React.useState({
        firstname: '',
        lastname: '',
        gender: 'male',
        birthdate: '',
        note: ''
    })

    const handleAddChildrenChange = event => {
        setAddChildren({ ...addChildren, [event.target.name]: event.target.value });
    }

    const handleAddChildrenSubmit = event => {
        event.preventDefault();
        console.log(addChildren)
        let formData = new FormData();
        formData.append('email', session.email)
        formData.append('token', session.token)
        formData.append('firstname', addChildren.firstname)
        formData.append('lastname', addChildren.lastname)
        formData.append('gender', addChildren.gender)
        formData.append('birthdate', addChildren.birthdate)
        formData.append('note', addChildren.note)
        axios.post(`${endpoint}children/add`, formData)
            .then(res => {
                //console.log(res.data)
            })
            .catch(error => {
                //TODO: error message
            }).finally(() => {
                setState({ ...state, step: modalType.Children })
            });
    }

    return (
        <>
            <div className={[modalStyles.header, modalStyles.orange].join(' ')}>Ajouter un enfant</div>
            <div className={modalStyles.container}>
                <form className={modalStyles.childrenForm} onSubmit={handleAddChildrenSubmit}>
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" id="firstname" onChange={handleAddChildrenChange} />
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" id="lastname" onChange={handleAddChildrenChange} />
                    <label htmlFor="gender">Genre</label>
                    <select name="gender" id="gender" onChange={handleAddChildrenChange}>
                        <option value="male">Garçon</option>
                        <option value="female">Fille</option>
                    </select>
                    <label htmlFor="gender">Date de naissance</label>
                    <input type="date" name="birthdate" id="birthdate" onChange={handleAddChildrenChange} />
                    <label htmlFor="gender">Notes</label>
                    <input name="note" id="note" onChange={handleAddChildrenChange} />
                    <Button className={[modalStyles.btn, buttonStyles.orange].join(' ')}>Ajouter</Button>
                </form>
            </div>
            <Filterbar className={modalStyles.childrenBar}>
                <Filterbar.Button onClick={() => { setState({ ...state, step: modalType.Children }) }}><i className="ri-arrow-drop-left-line"></i> Retour</Filterbar.Button>
            </Filterbar>
        </>
    )
}

export default Modal