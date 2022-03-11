import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button(props){
    return (
        <div className='Button'>
            <p className='buttonContent'>
            {props.name}
            
            </p>
            {props.icon ? (<FontAwesomeIcon icon={props.icon} className='iconButton buttonContent' />) : (null)}
        </div>
    )
}