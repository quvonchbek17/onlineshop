import React from 'react'
import { useContext } from 'react'
import { LangContext } from '../../Context/LangContext'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import langIcon from '../../assets/images/world-icon.svg'
import vk from '../../assets/images/VK.svg'
import insta from '../../assets/images/Instagram.svg'
import telegram from '../../assets/images/Telegram.svg'
import wApp from '../../assets/images/Whatsapp.svg'
import dataFooter from '../../localization/Footer'


function Footer() {

    const {lang, setLang} = useContext(LangContext)

  return (
    <footer className='site-footer'>
        <div className='footer-body d-flex align-items-start justify-content-between'>

        <NavLink className='logo-link text-decoration-none' to='/'>QPICK</NavLink>
        <div className=' d-flex flex-column'>
            <NavLink className="footer-link text-black text-decoration-none mb-1" to='/selected'>{dataFooter[lang]?.content1}</NavLink>
            <NavLink className="footer-link text-black text-decoration-none mb-1" to='/korzinka'>{dataFooter[lang]?.content2}</NavLink>
            <NavLink className="footer-link text-black text-decoration-none mb-1" to='/contact'>{dataFooter[lang]?.content3}</NavLink>
        </div>
        <div className='service-lang d-flex flex-column justify-content-between'>
            <NavLink className='service-link text-black text-decoration-none ' to='/service'>{dataFooter[lang]?.content4}</NavLink>
            <div className='footer-lang'>
                <img className=' me-5' src={langIcon} alt="icon" width="25" height='25' />
                <select className=' border-0' onChange={e => setLang(e.target.value)}>
                        <option value="ru">Рус</option>
                        <option value="en">Eng</option>
                        <option value="uz">Uzb</option>
                </select>
            </div>
        </div>
        <div className='footer-social d-flex justify-content-between'>
                <a className=' text-decoration-none' target='_blank' href="https://vk.com/"><img src={vk} alt="vk icon"  width='30'  height='30' /></a>
                <a className=' text-decoration-none' target='_blank' href="https://www.instagram.com/"><img src={insta} alt="insta icon"  width='30'  height='30' /></a>
                <a className=' text-decoration-none' target='_blank' href="https://telegram.org/"><img src={telegram} alt="telegram icon"  width='30'  height='30' /></a>
                <a className=' text-decoration-none' target='_blank' href="https://www.whatsapp.com/"><img src={wApp} alt="wApp icon"  width='30'  height='30' /></a>
         </div>

        </div>

    </footer>
  )
}

export default Footer
