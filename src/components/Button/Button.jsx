import styles from './Button.module.css';

function addPrefix(prefix, list)
{
    const definedList = list.split(' ');
    for (let i=0; i<definedList.length; i++)
    {
        definedList[i] = prefix[definedList[i]];
    }
    const updatedList = definedList.join(' ');
    return updatedList
}

const Button = (props) => {

    let additionalClasses = addPrefix(styles, props.addClass);

    return (
        <button type="button" onClick={props.onClick} className={`${styles.button} ${additionalClasses}`}>{props.text}</button>
    )
}

export default Button;