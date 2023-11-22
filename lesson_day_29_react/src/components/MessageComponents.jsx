function MessageComponent({showMessage}){
    return(
        <div>
            {showMessage && <p>THis message is conditionally rendered</p>}
        </div>
    )
}
export default MessageComponent;