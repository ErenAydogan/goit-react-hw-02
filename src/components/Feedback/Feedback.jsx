import styles from './Feedback.module.css';

const Feedback = ( props ) => {
    return (
        <>
            {
                props.total > 0 ? (
                <>
                <p>Good: {props.good}</p>
                <p>Neutral: {props.neutral}</p>
                <p>Bad: {props.bad}</p>
                <p>Total: {props.total}</p>
                <p>Positive: {props.positive}%</p>
                </>
                ) : (
                    <p className={styles.feedback}>No feedback yet</p>
                )
            }
        </>
    );
    }

export default Feedback;