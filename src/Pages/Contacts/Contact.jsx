import React from 'react'
import { useContext } from 'react'
import './Contact.css'
import { LangContext } from '../../Context/LangContext'
import locationIcon from "../../assets/images/locationIcon.svg"
import vk from '../../assets/images/VK.svg'
import insta from '../../assets/images/Instagram.svg'
import telegram from '../../assets/images/Telegram.svg'
import wApp from '../../assets/images/Whatsapp.svg'
import mapImg from "../../assets/images/mapImg.png"
import call from '../../assets/images/call-icon.svg'
import dataContact from '../../localization/contact'

function Contact() {
  const { lang, setLang } = useContext(LangContext);
  
  return (
    <div className='contact d-flex align-items-start justify-content-between'>
       <div className='contact-left'>
          <div className='left-top'>
                <h4>{dataContact[lang]?.content1}</h4>
                <img src={mapImg} className=' mb-3' alt="location" width='520' height='250' />
                <div className=' d-flex align-items-center'>
                   <img src={locationIcon} className='me-2' alt="location" width='25' height='25' />
                   <div className='location'>
                      <p className='loc-desc m-0 fw-bold'>{dataContact[lang]?.content2}</p>
                     <p className='loc-desc2 m-0'>{dataContact[lang]?.content3}</p>
                  </div>
                </div>

          </div>
          <div className=' d-flex align-items-center'>
            <img src={call} alt="icon" width='25' height='25' className=' me-3' />
            <p className=' fs-3 fw-bold m-0'>+998 91 213 33 40</p>
          </div>

       </div>
       <div className='contact-right d-flex flex-column'>
                <a className=' socialLink text-decoration-none mb-3' target='_blank' href="https://vk.com/"><img src={vk} alt="vk icon"  width='50'  height='50' /></a>
                <a className=' socialLink text-decoration-none mb-3' target='_blank' href="https://www.instagram.com/"><img src={insta} alt="insta icon"  width='50'  height='50' /></a>
                <a className=' socialLink text-decoration-none mb-3' target='_blank' href="https://telegram.org/"><img src={telegram} alt="telegram icon"  width='50'  height='50' /></a>
                <a className=' socialLink text-decoration-none mb-3' target='_blank' href="https://www.whatsapp.com/"><img src={wApp} alt="wApp icon"  width='50'  height='50' /></a>
       </div>

    </div>
  )
}

export default Contact
