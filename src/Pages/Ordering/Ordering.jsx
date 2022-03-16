import React from 'react'
import './Ordering.css'
import { useContext, useState  } from 'react'
import { OrderingContext } from '../../Context/OrderingContext'
import { LangContext } from '../../Context/LangContext'
import mapImg from "../../assets/images/mapImg.png"
import locationIcon from "../../assets/images/locationIcon.svg"
import penIcon from "../../assets/images/pen-icon.svg"
import dataOrdering from '../../localization/Ordering'

function Ordering() {

const {Ordering, setOrdering} = useContext(OrderingContext)
const { lang, setLang } = useContext(LangContext);

const [city, setCity] = useState('Tashkent')
const [street, setStreet] = useState('')
const [house, setHouse] = useState('')
const [entrance, setEntrance] = useState('')
const [apartment, setApartment] = useState('')
const [telNumber, setTelNumber] = useState('')

function hendleSubmit(e){

    fetch(`https://onllineshop.herokuapp.com/ordered`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime(),
            name: Ordering?.name,
            piece: Ordering?.number ,
            city: city,
            street: street,
            house: house,
            entrance: entrance,
            apartment: apartment,
            telNumber: telNumber
        })

    })

}


if(Ordering.price >0){
    return (
        <div className='ordering-page'>
           <h2 className='ordering-heading mb-3'>{dataOrdering[lang]?.content1}</h2>
           <form  className=' d-flex justify-content-between' onSubmit={ e => hendleSubmit(e)} >

                <div className='form-left'>
                    <div className=' d-flex align-items-center justify-content-between m-3'>
                        <h3 className='delivery-heading'>{dataOrdering[lang]?.content2}</h3>
                        <p className='delivery-desc m-0'>50000 {dataOrdering[lang]?.content4}</p>
                    </div>
                    <img className='mb-3' src={mapImg} alt="map" width='500' height='200'  />
                    <div className=' d-flex align-items-center mb-2'>
                        <img className=' me-2' src={locationIcon} alt="location icon" width='25' height='25' />
                        <p className='location-desc m-0 fs-4'>{dataOrdering[lang]?.content3}</p>
                    </div>
                    <div className='delivery d-flex flex-wrap justify-content-between'>
                        <select className='delivery-select'>
                           <option disabled selected defaultValue="tashkent"> {dataOrdering[lang]?.content5} </option>
                            <option value="tashkent">Tashkent</option>
                        </select>
                        <label className='order-label'>< input name='district' required onChange={e => setStreet(e.target.value)} className=' order-input' type="text" placeholder={dataOrdering[lang]?.content6} /> <img src={penIcon} id='district' alt="icon" /></label>
                        <label className='order-label small'>< input name='home' required onChange={e => setHouse(e.target.value)} className=' order-input' type="text" placeholder={dataOrdering[lang]?.content7} /> <img src={penIcon} alt="icon" id='home' /></label>
                        <label className='order-label small'>< input name='podez' required onChange={e => setEntrance(e.target.value)} className=' order-input' type="text" placeholder={dataOrdering[lang]?.content8} /> <img id='podez' src={penIcon} alt="icon" /></label>
                        <label className='order-label small'>< input name='home-num' required onChange={e => setApartment(e.target.value)}  className=' order-input' type="text"  placeholder={dataOrdering[lang]?.content9} /> <img id='home-num' src={penIcon} alt="icon" /></label>
                    </div>

                </div>
            {
                <div className='form-right d-flex flex-column justify-content-between'>
                      <div className='order-cost'>
                            <h2 className='cost-heading fs-3'>{dataOrdering[lang]?.content10}</h2>
                            <div className='product-cost '>
                                <div className='name-piece d-flex justify-content-between mb-2'>
                                    <div className='name-piece-left d-flex'>
                                       <p className='cost-piece mb-0 me-2 fw-bold'>{Ordering?.number}x</p>
                                       <p className='cost-name m-0 fw-bold'>{Ordering?.name}</p>
                                    </div>

                                    <p className='cost-money m-0 fw-bold'>{Ordering?.number * Ordering?.price} {dataOrdering[lang]?.content4}</p>
                                </div>
                                <div className='delivery-cost d-flex justify-content-between align-items-center mb-2'>
                                    <p className='cost-name m-0 fw-bold'>{dataOrdering[lang]?.content11}</p>
                                    <p className='cost-money m-0 fw-bold'>50000 {dataOrdering[lang]?.content4}</p>
                                </div>
                                <div className='total-cost d-flex justify-content-between align-items-center mb-2'>
                                    <p className='cost-name m-0 fw-bold'>{dataOrdering[lang]?.content12}</p>
                                    <p className='cost-money m-0 fw-bold'>{Ordering?.number * Ordering?.price + 50000} {dataOrdering[lang]?.content4}</p>
                                </div>
                            </div>
                      </div>

                      <div className='order-payment'>
                            <h2 className='payment-heading'>{dataOrdering[lang]?.content13}</h2>
                            <select  className='payment-select' >
                                <option disabled selected value='cash' >{dataOrdering[lang]?.content14}</option>
                                <option value='cash'>{dataOrdering[lang]?.content16}</option>
                                <option value='online'>{dataOrdering[lang]?.content17}</option>
                            </select>
                      </div>

                      <div className='order-number'>
                          <h2 className='number-heading mb-3'>{dataOrdering[lang]?.content18}</h2>
                      <label className='order-label'>+998< input name='district' required onChange={e => setTelNumber(e.target.value)} className=' order-input' type="number" placeholder='- _ _ - _ _ _ - _ _ - _ _' /> <img src={penIcon} id='district' alt="icon" /></label>

                      </div>
                    <button type='submit' className='buybtn orderFormbtn'>{dataOrdering[lang]?.content19}</button>
                </div>
            }



           </form>


        </div>
      )
 } else {
     return(
         <div className='ordered-page '>
             <h2 className='ordered text-center'>{dataOrdering[lang]?.content20}{Math.ceil(Math.random()*1000000)}{dataOrdering[lang]?.content21}</h2>
         </div>
     )
 }


}

export default Ordering
