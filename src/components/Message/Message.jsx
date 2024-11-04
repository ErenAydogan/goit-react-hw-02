import styles from './Message.module.css';

const Message = ( props ) => {
    return(
        <>
            <p className={styles.message}>{props.children}</p>
        </>
    )
}

export default Message;