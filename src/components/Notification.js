
const Notification = ({showNotification}) => {
    return (
        <div className={`notification-container ${showNotification ? 'show': ''}`}>
        <p>Do not enter the letter twice</p>
      </div>
    )
}

export default Notification
