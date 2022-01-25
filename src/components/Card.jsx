import React from 'react';
import styles from './Card.module.css';
import noimage from '../assets/noImage.png';

export default function Card ({ name, types, image }) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                { image.length ?
                (<img src={`${image}`} alt={`${name}`} width={`150px`} height={`218px`} />) :
                (<img src={noimage} alt='not found' width='150px' height='150px' style={{marginTop: '30px'}} />)}
            </div>
            <h3>{name}<h5>{types}</h5></h3>
        </div>
    )
}
