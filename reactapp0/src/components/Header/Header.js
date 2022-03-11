import './Header.css';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

export default function Header(){

    return (
        <div className='Header'>
            <h1>PickMyRace</h1>
            <p className='subtitle'>Meilleur que le choix aléatoire de Mario Kart !</p>
        </div>
        
    )
}