import './Card.css';

export default function Card(props){
    // const imageCategorie = require(`../media/${props.img}`);
    const circuitImg = require(`../media/circuitImg/${props.circuitImg}`);
    const circuitName = props.circuitName;
    const cupImg = require(`../media/cupImg/${props.cupImg}`);
    const cupName = props.cupName;

    return (
        <div className='Card'>
            <img src={circuitImg} alt='' className='circuitImg'/>
            <div className='circuitInfo'>
                <div className='circuitCup'>
                    <h4>Coupe {cupName}</h4>
                    <img src={cupImg} alt='' className='cupImg'/>
                </div>
                <div className='circuitName'>
                    <h3>{circuitName}</h3>
                </div>
            </div>

        </div>
    )
}