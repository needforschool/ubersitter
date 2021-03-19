import React from 'react'
import modalStyles from '@styles/modules/Modal.module.scss'
import Filterbar from './Filterbar'
import SearchBar from './SearchBar'

const Modal = ({ map }) => {

    React.useEffect(() => {
    })

    const handleCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(map)
        });
    }

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
                    <Modal.ListItem onClick={handleCurrentPosition}>
                        <Modal.ListIcon color='blue'><i className="ri-map-pin-user-fill"></i></Modal.ListIcon>
                        <Modal.ListContent>
                            <div className={modalStyles.title}>Autoriser la localisation</div>
                            <div className={modalStyles.desc}>Pour une meilleure expérience de prise en charge</div>
                        </Modal.ListContent>
                    </Modal.ListItem>
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

Modal.ListContent = ({ children }: { children: any }) => <div className={modalStyles.content}>{children}</div>;

export default Modal