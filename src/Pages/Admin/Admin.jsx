import React from 'react'
import { useState, useEffect } from 'react';
import './Admin.css'

function Admin() {

    const [adminData, setAdminData] = useState([])
    const [adminTest, setAdminTest] = useState(false)
    const [adminName, setAdminName] = useState('')
    const [adminPassword, setAdminPassword] = useState('')

    useEffect(() => {
        fetch('http://localhost:3001/ordered').then(res => res.json()).then(data => setAdminData(data))
      }, []);

    function hendleSubmit(e) {
      e.preventDefault()
      if(adminName == 'admin' && adminPassword == 'password'){
        setAdminTest(true)
      }
      e.target.reset()
    }

  if(adminTest){
    if(adminData.length > 0){
      return (
        <div className='admin-panel'>
        {
            adminData.map(data => {
                return(
                    <div className='admin-card'>
                       <p className='admin-name'>Mahsulot nomi: {data?.name} </p>
                       <p className='admin-name'>Donasi: {data?.piece} ta</p>
                       <p className='admin-name'>Shahar: {data?.city}</p>
                       <p className='admin-name'>Ko'cha: {data?.street} </p>
                       <p className='admin-name'>Uy: {data?.house}</p>
                       <p className='admin-name'>Uy kirishi: {data?.entrance}</p>
                       <p className='admin-name'>Xonadon: {data?.apartment}</p>
                       <p className='admin-name'>Telefon raqam: {data?.telNumber}</p>
                  </div>

                )
            })
        }
        </div>
      )
    } else {
        return (
          <div className='admin-panel'>
          <h1 className=' text-center'>Buyurtmalar yo'q</h1>
       </div>
      )
    }

  } else {

    return(
      <div className='admin-panel'>
          <form className='admin-form d-flex flex-column align-items-center' onSubmit={e => hendleSubmit(e)}>
              <input className=' form-control mb-3' onChange={e => setAdminName(e.target.value)} required type="text" placeholder='AdminName' />
              <input className=' form-control mb-3' onChange={e => setAdminPassword(e.target.value)} required type="password" placeholder='Password' />
              <button className='adminBtn btn btn-outline-info' type='submit'>login</button>
          </form>

      </div>
    )
  }


}

export default Admin
