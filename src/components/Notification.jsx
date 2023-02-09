import ActionSwitch from "./actionSwitch";
function Notification ({ data }) {
    return (
        <>
            {
                data.map(notification => (
                    <div key={Math.trunc(Math.random() * 1000000)}
                         className={`notification ${notification.new && 'new'}`}>
                        <ActionSwitch data={notification}></ActionSwitch>
                    </div>
                ))
            }
        </>
    )
}

export default Notification
