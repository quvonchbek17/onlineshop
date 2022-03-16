import React from "react";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AccessorieContext } from "../../Context/AccessorieContext";
import { LangContext } from '../../Context/LangContext'
import { TestContext } from '../../Context/TestContext';
import { OrderingContext } from "../../Context/OrderingContext";
import "./SingleAccessories.css";
import basketImg from '../../assets/images/savat.svg'
import dataAcc from '../../localization/SingleAccessorie'

function SingleAccessories() {

  const {testNumber, setTestNumber} = useContext(TestContext)
  const { lang, setLang } = useContext(LangContext);
  const { accessorieId, setAccessorieId } = useContext(AccessorieContext);
  const [accessories, setAccessories] = useState([]);
  const {Ordering, setOrdering} = useContext(OrderingContext)


  useEffect(() => {
    fetch("http://localhost:3001/accessories")
      .then((res) => res.json())
      .then((data) => setAccessories(data));
  }, [accessorieId]);


  let index = accessories.findIndex(accessorie => accessorie.id == accessorieId )

  function addKorzina(e){
    e.preventDefault()


    fetch(`http://localhost:3001/korzinka`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
          accessories[index]
        )
    })
    alert("добавлено в корзину !")
    setTestNumber(Math.ceil(Math.random()*10000))
  }

  function orderProduct(e){
    let indexOrder = accessories.findIndex(pro => pro.id == e.target.id)
     setOrdering(accessories[indexOrder])
}

  return (
    <div className="card-section">
      <div className="card-images mb-5">
        {accessories[index]?.imgLinks.map((imglink) => {
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
            {dataAcc[lang]?.content1}
          </p>
        </div>
        {
              accessories.map(accessorie => {
                  if(accessorie.id == accessorieId){
                    return (
                      <div className="phone-wrapper">
                      <p className="phone-memory fw-bold">{dataAcc[lang]?.content2}: {accessorie.workTime} H</p>
                      <p className="phone-memory fw-bold">{dataAcc[lang]?.content3}: {accessorie.chastota} Hz</p>
                      <p className="phone-memory fw-bold">{dataAcc[lang]?.content4}: {accessorie.bluetooth}</p>
                      <p className="phone-memory fw-bold">{dataAcc[lang]?.content5}: {accessorie.battery} mA</p>

                    </div>
                    )
                  }
              })
        }
      </div>
      {
          accessories.map(accessorie => {
            if(accessorie.id == accessorieId){
              return(
                <div className="order-btns d-flex flex-column align-items-center">
                <NavLink id={accessorie.id}  className="buybtn m-2" to="/ordering" onClick={e => orderProduct(e)}>{dataAcc[lang]?.content6}</NavLink>
                <NavLink onClick={e => addKorzina(e)}  className="addkorzinabtn m-2" to="/..."><img className=" me-2" src={basketImg} alt="icon" width='20' height='20' /> {dataAcc[lang]?.content7}</NavLink>
              </div>
              )

            }
          })

      }





      </div>

    </div>
  );
}
export default SingleAccessories;
