import { useContext } from 'react';
import {Context} from "../context/Context";
import Notification from "./Notification";
function NotificationModal() {
    const {data, markAllAsRead, amountOfRead} = useContext(Context)

    return (
        <section id="notification-modal">
            <div className="title">
                <h2>Notifications <span className='notification-counter'>{ amountOfRead  } </span></h2>
                <button onClick={ markAllAsRead } className="border-0">Mark all as read</button>
            </div>
            <Notification data={ data }/>
        </section>
    );
}

export default NotificationModal;