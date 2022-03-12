import './Circuits.css';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';

export default function Circuits(){
    const {game, number} = useParams();
    const [circuitsList, setCircuitsList] = useState([]);

    useEffect(() => {
        fetchCircuits()
    }, [])
    

    // Fetch circuits //
    const fetchCircuits = async () => {
        let rawResponse = await fetch('/search', {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: `game=${game}&number=${number}`
        })
        let response = await rawResponse.json();
        
        setCircuitsList(response.aggregate)
    };



    // Redirection Homepage clic logo //
    const [goToHome, setGoToHome] = useState(false);

    if(goToHome){
        return(<Redirect to='/' />)
    }

    return(
        <div className='Circuits'>
            <div onClick={() => setGoToHome(true)}>
                <Header />
            </div>
            <h2>Attention au départ !</h2>

            <div className='list'>
                {circuitsList.map((circuit, i) => (
                    <Card 
                    circuitImg={circuit.circuitImg} 
                    circuitName={circuit.name} 
                    cupImg={circuit.cupImg} 
                    cupName={circuit.cupName}
                    key={i} />  
                ))}
                
            </div>

            <div style={{width: 'fit-content'}} onClick={() => fetchCircuits()} >
                <Button name='Regénérer'/>
            </div>
            
        </div>
    )
};