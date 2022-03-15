import { useEffect, useState } from 'react';
import './Card.css';

export default function Card(props){
    const [circuitStyle, setCircuitStyle] = useState(false);
    const circuitImg = require(`../media/circuitImg/${props.circuitImg}`);
    const circuitName = props.circuitName;
    const cupImg = require(`../media/cupImg/${props.cupImg}`);
    const cupName = props.cupName;

    return (
        <div className='Card' onClick={() => setCircuitStyle(!circuitStyle)}>
            <img src={circuitImg} alt='' className='circuitImg'/>
            <div className='circuitInfo'>
                <div className='circuitCup'>
                    <img src={cupImg} alt='' className='cupImg'/>
                    <h4>Coupe {cupName}</h4>
                    
                </div>
                <div className='circuitName'>
                    <h3>{circuitName}</h3>
                </div>
            </div>
            {circuitStyle ? (
                <div className='circuitDone'>
                    <h3>Terminé !</h3>
                </div>
            ) : (null)}
        </div>
    )
}