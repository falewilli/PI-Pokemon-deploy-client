import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDetail, clearDetail } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Detail.module.css';
import Header from './Header';
import Loading2 from './Loading2';
import NotFound from './NotFound';
import noimage from '../assets/noImage.png';


export default function Detail (props){
    console.log(props);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(id));
        return () => dispatch(clearDetail()); // LIMPIO EL ESTADO DEL DETAIL
    },[dispatch, id])

    const myPokemon = useSelector((state) => state.detail);

    return (
      <div>
        <Header />
        <div className={styles.main}>
        {myPokemon.length > 0 ?
          <div className={styles.card}>
              <div>
                <div>
                  <div>
                    <h1>{myPokemon[0].name}</h1>
                    {/* <h3 style={{ margin: 0 }}> id: {myPokemon[0].id}</h3> */}
                    <div className={styles.image}>
                      {/* <img src={myPokemon[0].image} alt={myPokemon[0].name} width="300px" /> */}
                      { myPokemon[0].image.length ?
                      (<img src={myPokemon[0].image} alt={myPokemon[0].name} width="300px" />) :
                      (<img src={noimage} alt='not found' width='280px' height='280px' style={{marginTop: '0px'}} />)}
                    </div>
                    <h3>
                      {myPokemon[0].types.map((t) => {
                        return (
                          <span style={{ marginRight: 5, marginLeft: 5 }}>{t}</span>
                        )
                      })}
                    </h3>
                  </div>
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      <span>Life: {myPokemon[0].hp}</span>
                      <progress max="200" value={myPokemon[0].hp}>{myPokemon[0].hp}</progress>
                    </div>
                    <div className={styles.stat}>
                      <span>Attack: {myPokemon[0].attack}</span>
                      <progress max="200" value={myPokemon[0].attack}>{myPokemon[0].strength}</progress>
                    </div>
                    <div className={styles.stat}>
                      <span>Defense: {myPokemon[0].defense}</span>
                      <progress max="200" value={myPokemon[0].defense}>{myPokemon[0].defense}</progress>
                    </div>
                    <div className={styles.stat}>
                      <span>Speed: {myPokemon[0].speed}</span>
                      <progress max="200" value={myPokemon[0].speed}>{myPokemon[0].speed}</progress>
                    </div>
                    <div className={styles.stat}>
                      <span>Height: {myPokemon[0].height}</span>
                      <progress max="200" value={myPokemon[0].height}>{myPokemon[0].height}</progress>
                    </div>
                    <div className={styles.stat}>
                      <span>Weight: {myPokemon[0].weight}</span>
                      <progress max="1000" value={myPokemon[0].weight}>{myPokemon[0].weight}</progress>
                    </div>
                  </div>
                </div>
              </div> 
            </div> :
            myPokemon === 404?
            <NotFound /> :
            <Loading2 />
            }
        </div>
        <Link to="/home">
          <button className={styles.back}>GO BACK HOME!</button>
        </Link>
      </div>
    );
  }
