import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { LangContext } from '../../Context/LangContext'
import { OrderingContext } from "../../Context/OrderingContext";
import { TestContext } from '../../Context/TestContext';
import "./Korzinka.css";
import dataKorzinka from '../../localization/Korzinka'
import deleteIcon from "../../assets/images/delete-icon.svg";
import mapImg from "../../assets/images/mapImg.png";
import basketImg2 from '../../assets/images/savat2.svg'

function Korzinka() {

    const {testNumber, setTestNumber} = useContext(TestContext)
    const [products, setProducts] = useState([])
    const {Ordering, setOrdering} = useContext(OrderingContext)
    const { lang, setLang } = useContext(LangContext);

    useEffect(() => {
        fetch('http://localhost:3001/korzinka').then(res => res.json()).then(data => setProducts(data))
      }, [testNumber]);


    function plus(e){
      e.preventDefault()
       let id = e.target.id
       let index =  products.findIndex(item => item.id == id)
       products[index].number = products[index].number + 1
       fetch(`http://localhost:3001/korzinka/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ...products[index]
        }

        )
      })
    }

    function minus(e){
      e.preventDefault()
        let id = e.target.id
        let index =  products.findIndex(item => item.id == id)
        if(products[index].number > 1){
            products[index].number = products[index].number - 1
            fetch(`http://localhost:3001/korzinka/${id}`, {
             method: "PUT",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                 ...products[index]
             }

             )
           })
        }
     }

     function orderProduct(e){
        let indexOrder = products.findIndex(pro => pro.id == e.target.id)
         setOrdering(products[indexOrder])
    }

    function deleteProduct(e){

        let iddelete = e.target.id
        fetch(`http://localhost:3001/korzinka/${iddelete}`, {
            method: "Delete"
        })
        setTestNumber(Math.ceil(Math.random()*10000))
    }


    if(products.length != 0){

        return (

        <div className="korzinka-section ">

            <h2 className="">{dataKorzinka[lang].content1}</h2>

            <div className="korzina-body d-flex justify-content-between">

             <div className="korzina-left">
                    {
                        products.map(product => {
                            if(products.length < 1){

                            }
                         return(
                            <div className="korzinaCard">
                            <div className="card-top d-flex justify-content-between align-items-start">
                              <div className=" d-flex align-items-center">
                                <img
                                  className=" me-3"
                                  src={product.imgLinks[0]}
                                  alt="photo"
                                  width='225'
                                  height='225'
                                />
                                <div className="">
                                  <p className="card-name m-0">{product.name}</p>
                                  <p className="card-proce m-0">{product.price} {dataKorzinka[lang].content2}</p>
                                </div>
                              </div>
                              <button id={product.id} onClick={e => deleteProduct(e)} className="deleteCard btn">
                                <img
                                 id={product.id}
                                  src={deleteIcon}
                                  alt="delete icon"
                                  width="20"
                                  height="25"
                                />
                              </button>
                            </div>
                            <div className="card-bottom d-flex align-items-center justify-content-between">
                              <div id={product.id} className="card-piece d-flex">
                                <button id={product.id} onClick={e => minus(e)} className=" minus ">-</button>
                                <p  id={product.id} className='piece'>{product.number}</p>
                                <button id={product.id} onClick={e => plus(e)} className=" plus d-flex ">+</button>
                              </div>
                              <p className="totalMoney">{product.number*product.price} {dataKorzinka[lang].content2}</p>
                            </div>
                          </div>
                        )
                        })
                    }


                   <div className="mapCard">
                    <h2 className=" mb-3">{dataKorzinka[lang]?.content3}</h2>
                    <img className=" mb-4 w-100" src={mapImg} alt="map"  height='230' />
                    <div className="map-bottom d-flex align-items-center justify-content-between">
                      <select className=" border-0 bg-transparent">
                        <option value="">{dataKorzinka[lang]?.content4}</option>
                      </select>
                      <p className="courierMoney m-0 fw-bold">50000 {dataKorzinka[lang]?.content2}</p>
                    </div>
                   </div>
                </div>


              <div className="korzina-right">
                  {
                      products.map(product => {
                          return(
                              <div id={product.id} className="order mb-4">
                              <p className="order-name ms-3 fw-bold">{product.name}</p>
                              <div className="money d-flex align-items-center justify-content-between ms-3 me-3 mb-2">
                                  <p className="mon-desc fw-bold">{dataKorzinka[lang].content5}</p>
                                  <p className="mon-text fw-bold" >{product.number * product.price} сўм</p>
                              </div>
                             <NavLink id={product.id}  className='orderbtn ' to='/ordering' onClick={e => orderProduct(e)}>{dataKorzinka[lang].content6}</NavLink>
                          </div>
                          )

                      })
                  }


              </div>
            </div>
          </div>




      );
    } else {
        return(
            <div className="emptykorzinka d-flex flex-column align-items-center pb-4">
                <img className=" mb-4" src={basketImg2} alt="photo" width='410' height='320' />
                <h2 className="empty-heading">{dataKorzinka[lang].content7}</h2>
                <p className="empty-desc mb-4">{dataKorzinka[lang].content8}</p>
                <NavLink className='empty-link' to='/'>{dataKorzinka[lang].content9}</NavLink>

            </div>
        )
    }


}

export default Korzinka;
