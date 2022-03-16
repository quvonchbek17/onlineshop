import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react'
import { LangContext } from '../../Context/LangContext'
import { TestContext } from '../../Context/TestContext';
import './Header.css'
import likeImg from '../../assets/images/like.svg'
import basketImg from '../../assets/images/savat.svg'
import dataHeader from '../../localization/Header'

function Header() {
  const {testNumber, setTestNumber} = useContext(TestContext)
  const {lang, setLang} = useContext(LangContext)
  const [trash, setTrash] = useState([])
  const [liked, setLiked] = useState([])

    useEffect(() => {

       fetch('http://localhost:3001/korzinka').then(res => res.json()).then(data => setTrash(data))

    }, [testNumber]);

    useEffect(() => {

      fetch('http://localhost:3001/selected').then(res => res.json()).then(data => setLiked(data))

   }, [testNumber]);

    let numKorzina = trash.length
    let numLiked = liked.length

  return (
    <header className='site-header'>

     <div className='header-left d-flex'>
       <NavLink className='logo-link text-decoration-none' to='/'>QPICK</NavLink>

     <select className='form-select border-0 bg-transparent'>
        <option value="iphone">{dataHeader[lang]?.content1}</option>

     </select>

     </div>
      <div className='header-btns'>

        <NavLink className='selected-btn text-decoration-none p-0' to='/selected'> <img  src={likeImg} alt="like icon" width='30' height='30' /> <span className='selected-piece'>{numLiked}</span> </NavLink>
        <NavLink className='korzinka-btn text-decoration-none p-0' to='/korzinka'>  <img  src={basketImg} alt="like icon" width='30' height='30' /> <span className='korzinka-piece'>{numKorzina}</span> </NavLink>

      </div>



    </header>
  )
}

export default  Header
