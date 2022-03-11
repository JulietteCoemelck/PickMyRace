import './Homepage.css';
import Header from '../Header/Header';
import Button from '../Button/Button';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';

export default function Homepage(){
    const [courseNumber, setCourseNumber] = useState(1);
    const [selectedConsole, setSelectedConsole] = useState('');
    const [redirectCircuit, setRedirectCircuit] = useState(false);
    const [error, setError] = useState('');

    // LISTE DES CONSOLES //
    const consolesList = [
        { value: 'switch', label: 'Nintendo Switch'},
         //{ value: 'wii', label: 'Wii'} 
    ];

    // Format nombre de courses //
    if(courseNumber < 1){
        setCourseNumber(1)
    } else if(courseNumber > 48){
        setCourseNumber(48)
    };
    
    // Fonction bouton + et - //
    const increaseCourseNumber = () => {
        setCourseNumber(courseNumber +1)
    };
    const decreaseCourseNumber = () => {
        setCourseNumber(courseNumber -1)
    };

    // Redirection vers /circuits //
    const randomChoices = () => {
        if(selectedConsole === ''){
            setError(<p className='error'>Merci de sélectionner une console</p>)
        } else {
            setRedirectCircuit(true)
        };
    };

    if(redirectCircuit){
        return (<Redirect to={`/circuits/${selectedConsole}/${courseNumber}`} />);
    };

    // Styles select //
    const customSelectStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'white' : '#31393C',
            backgroundColor: state.isSelected ? '#FD5200' : null,
            fontFamily: 'Inter',
            "&:hover": {
                backgroundColor: state.isSelected ? null : state.isFocused ? "#FF9505" :  null,
                color: state.isSelected ? 'white' : state.isFocused ? 'white' :  null
              }
        }),
        control: (styles, state) => ({
            ...styles, 
            width: 235,
            borderColor: '#FF9505',
            "&:hover": {
                borderColor: state.isFocused ? '#FD5200' : null,
            }
        }),
        dropdownIndicator: base => ({
            ...base,
            "&:hover": {
                color: '#FD5200'
            }
        })
    };

    return (
        <div className='Homepage'>
            <Header />

            
            <div className='container'>
                <h2>Choisis ta console</h2>

                <Select options={consolesList} styles={customSelectStyles} placeholder='Aucune sélection' onChange={(option) => {setSelectedConsole(option.value); setError('')}} />
                {error}

                <h2>Nombre de course(s)</h2>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',textAlign: 'center', height: '70px'}}>
                    <div className='raceNumber' onClick={() => decreaseCourseNumber()} >
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <input className='raceInput' type='text'value={courseNumber} onChange={(e) => setCourseNumber(e.target.value)} />
                    <div className='raceNumber' onClick={() => increaseCourseNumber()} >
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                <div onClick={() => randomChoices()}>
                    <Button name="Let's go!" icon={faFlagCheckered}/>
                </div>
                
            </div>
            
            
        </div>
    );
};