import Title from "./Title";
function NotificationBody (props) {
    const {name, post, message, img, time, group, follow} = props.arr.data
    return (
        <div className="notification-body">
            <div className="notification-person">
                <img src={`${process.env.PUBLIC_URL}${img}`} alt={name}/>
            </div>
            <div className="notification-info">
                <Title name={name} post={post} follow={follow} group={group}>{props.children}</Title>
                <p className='notification-info__time'>{ time }</p>
                {
                    message && <p className="notification-post__message">{message}</p>
                }
            </div>
        </div>
    )
}

export default NotificationBody