const MyMessage = ({message}) => {
    if(message?.attachments?.length>0){
        return(
            <img 
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{float : 'right'}}
            />

        );
    }
    return (
        <div className="message" style={{float: 'right', marginRight : '18px', color : 'white' , backgroundColor : '#4180ec', borderRadius:'12px 0px 12px 12px'}}>
           {message.text}
        </div>
    );
}
export default MyMessage;