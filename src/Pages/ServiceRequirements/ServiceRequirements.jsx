import React from 'react'
import { useContext } from 'react'
import './ServiceRequirements.css'
import { LangContext } from '../../Context/LangContext'
import dataService from '../../localization/ServiceRequirements'

function ServiceRequirements() {
    const { lang, setLang } = useContext(LangContext);
  return (
    <div className=' service'>
       <div className='termsService'>
           <h3 className='terms-heading'>{dataService[lang]?.content1}</h3>
            <p className='terms-desc'>
            {dataService[lang]?.content2}
            </p>
       </div>
       <div className='termsService'>
         <h3 className='terms-heading'>{dataService[lang]?.content3}</h3>
           <p className='terms-desc'>
           {dataService[lang]?.content2}
            </p>
       </div>
       <div className='termsService'>
          <h3 className='terms-heading'>{dataService[lang]?.content4}</h3>
           <p className='terms-desc'>
           {dataService[lang]?.content2}
            </p>
       </div>

    </div>
  )
}

export default ServiceRequirements
