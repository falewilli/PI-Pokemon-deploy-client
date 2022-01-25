import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemons } from '../actions';
import styles from './SearchBar.module.css';

export default function SearchBar () {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInputChange(e){
      e.preventDefault();
      setName(e.target.value); // EL VALUE DEL STATE VA A TOMAR EL VALUE DEL INPUT
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return alert('Please enter a name to start the search');
    } else {
      dispatch(getNamePokemons(name));  
      setName('');
    }
  }

  return(
    <div>
      <input className={styles.create}
      type='text'
      value={name}
      // className={styles.input}
      placeholder='Search by exact Pokemon name...'
      onChange={(e) => handleInputChange(e)}
      />
      <button className={styles.go} type='submit' onClick={(e) => handleSubmit(e)}>GO!</button>
    </div>
  )
}