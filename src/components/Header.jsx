import React from 'react';
import styles from './Header.module.css';
import logopokemon from "../assets/logoPokemon.png";

export default function Header(){
    return(
        <div className={styles.header}>
            <img src={logopokemon} alt="Pokemon" width="200px" />
        </div>
    )
}
