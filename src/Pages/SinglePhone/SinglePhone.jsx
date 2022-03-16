import React from "react";
import { useState, useEffect, useContext } from "react";
import { LangContext } from '../../Context/LangContext'
import { NavLink } from "react-router-dom";
import { PhoneContext } from "../../Context/PhoneContext";
import { OrderingContext } from "../../Context/OrderingContext";
import { TestContext } from '../../Context/TestContext';
import dataPhone from '../../localization/SinglePhone'
import "./SinglePhone.css";
import basketImg from '../../assets/images/savat.svg'


function SinglePhone() {

  const {testNumber, setTestNumber} = useContext(TestContext)
  const { lang, setLang } = useContext(LangContext);
  const { phoneId, setPhoneId } = useContext(PhoneContext);
  const [phones, setPhones] = useState([]);
  const {Ordering, setOrdering} = useContext(OrderingContext)

  useEffect(() => {
    fetch("https://onllineshop.herokuapp.com/phones")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, [phoneId]);

 let index = phones.findIndex(phone => phone.id == phoneId )

  function addKorzina(e){
    e.preventDefault()

    fetch(`https://onllineshop.herokuapp.com/korzinka`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            phones[index]
        )
    })
    alert("добавлено в корзину !")
    setTestNumber(Math.ceil(Math.random()*10000))
  }

  function orderProduct(e){
    let indexOrder = phones.findIndex(pro => pro.id == e.target.id)
     setOrdering(phones[indexOrder])
  }


  return (
    <div className="card-section">
      <div className="card-images mb-5">
        {phones[index]?.imgLinks.map((imglink) => {
          return (
            <img
              src={imglink}
              alt="photo"
              className=" m-2"
              width="300"
              height="300"
            />
          );
        })}
      </div>
      <div className="phoneCard-bottom d-flex justify-content-between">

      <div className="phone-characteristic">
        <div className="phoneCharacter-top">
          <p className="phoneCharacter-desc m-0 fs-2">
            {dataPhone[lang]?.content1}
          </p>
        </div>
        {
              phones.map(phone => {
                  if(phone.id == phoneId){
                    return (
                      <div className="phone-wrapper">
                      <p className="phone-memory fw-bold">{dataPhone[lang]?.content2}: {phone.memory} GB</p>
                      <p className="phone-ram fw-bold">{dataPhone[lang]?.content3}: {phone.ram} Gb</p>
                      <p className="phone-memory fw-bold">{dataPhone[lang]?.content4}: {phone.operationSystem}</p>
                      <p className="phone-memory fw-bold">{dataPhone[lang]?.content5}: {phone.processor}</p>
                      <p className="phone-memory fw-bold">{dataPhone[lang]?.content6}: {phone.processorYadro}</p>
                      <p className="phone-memory fw-bold">{dataPhone[lang]?.content7}: {phone.network}</p>
                      <p className="phone-memory fw-bold">{dataPhone[lang]?.content8}: {phone.battery} mA</p>
                      <p className="phone-memory fw-bold">{dataPhone[lang]?.content9}: {phone.camera} MP</p>
                      <p className="phone-memory fw-bold">{dataPhone[lang]?.content10}: {phone.display}</p>
                    </div>
                    )
                  }
              })
        }
      </div>
     {
     phones.map(phon => {
       if(phon.id == phoneId){
         return (
          <div className="order-btns d-flex flex-column align-items-center">
          <NavLink id={phon.id} className="buybtn m-2" to="/ordering" onClick={e => orderProduct(e)}>{dataPhone[lang]?.content11}</NavLink>
          <NavLink onClick={e => addKorzina(e)} className="addkorzinabtn m-2" to="/..."><img className=" me-2" src={basketImg} alt="icon" width='20' height='20' />{dataPhone[lang]?.content12}</NavLink>
      </div>
        )
       }
     })

     }



      </div>

    </div>
  );
}
export default SinglePhone;
