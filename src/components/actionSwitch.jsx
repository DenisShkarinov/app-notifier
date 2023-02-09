import NotificationBody from "./NotificationBody";

function ActionSwitch (props) {
    const {action} = props.data

    switch(action) {
        case 'react': return (
            <NotificationBody arr={props}> reacted to your recent post</NotificationBody>
        ); break;
        case 'follow': return (
            <NotificationBody arr={props}> followed you</NotificationBody>
        ); break;
        case 'group': return (
            <NotificationBody arr={props}></NotificationBody>
        ); break;
        case 'message': return (
            <NotificationBody arr={props}> sent you a private message</NotificationBody>
        ); break;
        case 'comment': return (
            <NotificationBody arr={props}>commented on your picture </NotificationBody>
        ); break;
    }
}

export default ActionSwitch