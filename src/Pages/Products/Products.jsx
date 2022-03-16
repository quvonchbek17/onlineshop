import React from 'react'
import { useState, useEffect } from 'react'
import './Products.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { LangContext } from '../../Context/LangContext'
import { PhoneContext } from '../../Context/PhoneContext';
import { NotebookContext } from '../../Context/NotebookContext';
import { AccessorieContext } from '../../Context/AccessorieContext';
import { TestContext } from '../../Context/TestContext';
import phoneBanner from '../../assets/images/13pro.png'
import cardLikeLight from '../../assets/images/card-likeLight.svg'
import cardLikeDark from '../../assets/images/like-dark.svg'
import starIcon from '../../assets/images/star-icon.svg'
import dataProduct from '../../localization/Products'




function Products() {
  const {testNumber, setTestNumber} = useContext(TestContext)
  const { lang, setLang } = useContext(LangContext);
  const [phones, setPhones] = useState([])
  const [notebooks, setNotebooks] = useState([])
  const [accessories, setAccessories] = useState([])
  const [selectedIconBool, setSelectedIconBool] = useState(true)

  const {phoneId, setPhoneId} = useContext(PhoneContext)
  const {notebookId, setNotebookId} = useContext(NotebookContext)
  const {accessorieId, setAccessorieId} = useContext(AccessorieContext)

  let likeIcon




  useEffect(() => {
    fetch('http://localhost:3001/phones').then(res => res.json()).then(data => setPhones(data))
  }, [selectedIconBool]);

  useEffect(() => {
    fetch('http://localhost:3001/notebooks').then(res => res.json()).then(data => setNotebooks(data))
  }, [selectedIconBool]);

  useEffect(() => {
    fetch('http://localhost:3001/accessories').then(res => res.json()).then(data => setAccessories(data))
  }, [selectedIconBool]);

//   PHONE SELECTED

  function selectButtonPhone(e) {
      e.preventDefault()

        let id = e.target.id
        let index =  phones.findIndex(item => item.id == id)
        phones[index].selectBool = !phones[index].selectBool
        setSelectedIconBool(phones[index].selectBool)
        fetch(`http://localhost:3001/phones/${id}`, {
         method: "PUT",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({
             ...phones[index]
         }
         )
       })

       if(phones[index].selectBool){
        fetch(`http://localhost:3001/selected`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                phones[index]
            )
        })
       } else {
        fetch(`http://localhost:3001/selected/${id}`, {
            method: "Delete"
        })
       }

       setTestNumber(Math.ceil(Math.random()*10000))
    }

//   NOTEBOOK SELECTED

function selectButtonNotebook(e) {
    e.preventDefault()

      let id = e.target.id
      let indexNote =  notebooks.findIndex(item => item.id == id)
      notebooks[indexNote].selectBool = !notebooks[indexNote].selectBool
      setSelectedIconBool(notebooks[indexNote].selectBool)
      fetch(`http://localhost:3001/notebooks/${id}`, {
       method: "PUT",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({
           ...notebooks[indexNote]
       }
       )
     })

     if(notebooks[indexNote].selectBool){
      fetch(`http://localhost:3001/selected`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(
            notebooks[indexNote]
          )
      })
     } else {
      fetch(`http://localhost:3001/selected/${id}`, {
          method: "Delete"
        })
     }
     setTestNumber(Math.ceil(Math.random()*10000))
  }

//  ACCESSORIES SELECTED

function selectButtonAccessorie(e) {
    e.preventDefault()

      let id = e.target.id
      let indexAcc =  accessories.findIndex(item => item.id == id)
      accessories[indexAcc].selectBool = !accessories[indexAcc].selectBool
      setSelectedIconBool(accessories[indexAcc].selectBool)
      fetch(`http://localhost:3001/accessories/${id}`, {
       method: "PUT",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({
           ...accessories[indexAcc]
       }
       )
     })

     if(accessories[indexAcc].selectBool){
      fetch(`http://localhost:3001/selected`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(
            accessories[indexAcc]
          )
      })
     } else {
      fetch(`http://localhost:3001/selected/${id}`, {
          method: "Delete"
        })
     }
     setTestNumber(Math.ceil(Math.random()*10000))
  }


  return (
    <div className=' products-page'>

          <a className='banner' href="#" >
              <p className='banner-desc'>{dataProduct[lang]?.content1}</p>
              <img className='iphone-pro' src={phoneBanner} width='330' height='250' alt="reklama"  />
        </a>

        {/* CATEGORY */}
        <p className='category-name text-center'>{dataProduct[lang]?.content2}</p>
        <div className='phone-list'>

           {
               phones.map((phone) => {
                if(phone.selectBool){
                    likeIcon = cardLikeDark

                } else{
                    likeIcon = cardLikeLight
                }

                return (
                    <NavLink  id={phone.id} onClick={ e => setPhoneId(e.target.id)} className='card' to='/phone'>
                    <button id={phone.id} onClick={e => selectButtonPhone(e)} className='card-like btn '><img id={phone.id} className='cardLike-img'  src={likeIcon} alt="icon" width='20' height='20' /></button>
                    <img id={phone.id} className=' mb-4 ' src={phone?.imgLinks[0]} alt="photo" width='240' height='230'  />
                    <div id={phone.id} className='card-bottom'>
                        <p id={phone.id} className='product-name'>{phone?.name}</p>
                        <p id={phone.id} className='raiting'><img id={phone.id} className=' star-icon' src={starIcon} alt="star icon" /> {phone.raiting}</p>
                    </div>
                    <p id={phone.id} className='product-price'>{phone?.price} {dataProduct[lang]?.content3}</p>
               </NavLink>
                   )
               })
           }
        </div>

        <p className='category-name text-center'>{dataProduct[lang]?.content4}</p>
        <div className='phone-list'>

           {
               notebooks.map((notebook) => {
                if(notebook.selectBool){
                    likeIcon = cardLikeDark

                } else{
                    likeIcon = cardLikeLight
                }
                   return (
                    <NavLink id={notebook.id} className='card' to='/notebook' onClick={ e => setNotebookId(e.target.id)} >
                    <button id={notebook.id} onClick={e => selectButtonNotebook(e)} className='card-like btn'><img id={notebook.id} src={likeIcon} alt="icon" width='20' height='20' /></button>
                    <img id={notebook.id} className=' mb-4' src={notebook?.imgLinks[0]} alt="photo" width='240' height='230'  />
                    <div id={notebook.id} className='card-bottom'>
                        <p id={notebook.id} className='product-name'>{notebook?.name}</p>
                        <p id={notebook.id} className='raiting'><img id={notebook.id} className=' star-icon' src={starIcon} alt="star icon" /> {notebook.raiting}</p>
                    </div>
                    <p id={notebook.id} className='product-price'>{notebook?.price} {dataProduct[lang]?.content3}</p>
               </NavLink>
                   )
               })
           }
        </div>

        <p className='category-name text-center'>{dataProduct[lang]?.content5}</p>
        <div className='phone-list'>

           {
               accessories.map((accessorie) => {
                if(accessorie.selectBool){
                    likeIcon = cardLikeDark

                } else{
                    likeIcon = cardLikeLight
                }
                   return (
                    <NavLink id={accessorie.id} className='card' to='/accessorie' onClick={ e => setAccessorieId(e.target.id)}>
                    <button onClick={e => selectButtonAccessorie(e)} id={accessorie.id}  className='card-like btn'><img id={accessorie.id} src={likeIcon} alt="icon" width='20' height='20' /></button>
                    <img id={accessorie.id} className=' mb-4' src={accessorie?.imgLinks[0]} alt="photo" width='240' height='230'  />
                    <div id={accessorie.id} className='card-bottom'>
                        <p id={accessorie.id} className='product-name'>{accessorie?.name}</p>
                        <p id={accessorie.id} className='raiting'><img id={accessorie.id} className=' star-icon' src={starIcon} alt="star icon" /> {accessorie.raiting}</p>
                    </div>
                    <p id={accessorie.id}  className='product-price'>{accessorie?.price} {dataProduct[lang]?.content3}</p>
               </NavLink>
                   )
               })
           }
        </div>


    </div>
  )
}

export default Products
