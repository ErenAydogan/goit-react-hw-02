import './module.css';

const Button = (props) =>
{
    return (
        <button type="button" onClick={props.onClick} className={`button ${props.class}`}>{props.text}</button>
    )
}

export default Button;