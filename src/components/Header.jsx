import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {Context} from "../context/Context";
import NotificationModal from "./NotificationModal";
function Header () {
    const {showNotification, setShowNotification} = useContext(Context)
    return (
    <>
        <header>
            <ul className="nav">
                <li><button className="border-0">Some Menu</button></li>
                <li><button className="border-0" onClick={ () => setShowNotification(!showNotification) }><FontAwesomeIcon icon={faBell} /></button></li>
            </ul>
        </header>
        { showNotification && <NotificationModal /> }
    </>
    )
}

export default Header