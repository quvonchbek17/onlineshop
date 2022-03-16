import React from "react";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { NotebookContext } from "../../Context/NotebookContext";
import { OrderingContext } from "../../Context/OrderingContext";
import { TestContext } from '../../Context/TestContext';
import { LangContext } from '../../Context/LangContext'
import "./SingleNotebook.css";
import basketImg from '../../assets/images/savat.svg'
import dataNotebook from '../../localization/SingleNotebook'

function SingleNotebook() {

  const {testNumber, setTestNumber} = useContext(TestContext)
  const { lang, setLang } = useContext(LangContext);
  const { notebookId, setNotebookId } = useContext(NotebookContext);
  const [notebooks, setNotebooks] = useState([]);
  const {Ordering, setOrdering} = useContext(OrderingContext)

  useEffect(() => {
    fetch("http://localhost:3001/notebooks")
      .then((res) => res.json())
      .then((data) => setNotebooks(data));
  }, [notebookId]);

  let index = notebooks.findIndex(notebook => notebook.id == notebookId )


  function addKorzina(e){
    e.preventDefault()

    fetch(`http://localhost:3001/korzinka`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            notebooks[index]
        )
    })
    alert("добавлено в корзину !")
    setTestNumber(Math.ceil(Math.random()*10000))
  }

  function orderProduct(e){
    let indexOrder = notebooks.findIndex(pro => pro.id == e.target.id)
     setOrdering(notebooks[indexOrder])
  }

  return (
    <div className="card-section">
      <div className="card-images mb-5">
        {notebooks[index]?.imgLinks.map((imglink) => {
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
            {dataNotebook[lang]?.content1}
          </p>
        </div>
        {
              notebooks.map(notebook => {
                  if(notebook.id == notebookId){
                    return (
                      <div className="phone-wrapper">

                      <p className="phone-memory fw-bold">{dataNotebook[lang]?.content2}: {notebook?.memory} GB</p>
                      <p className="phone-ram fw-bold">{dataNotebook[lang]?.content3}: {notebook?.ram} Gb</p>
                      <p className="phone-memory fw-bold">{dataNotebook[lang]?.content4}: {notebook?.processor}</p>
                      <p className="phone-memory fw-bold">{dataNotebook[lang]?.content5}: {notebook?.processorChastota} GHz</p>
                      <p className="phone-memory fw-bold">{dataNotebook[lang]?.content6}: {notebook?.display}</p>
                    </div>
                    )
                  }
              })
        }
      </div>
      {
          notebooks.map(note => {
              if(note.id == notebookId){
                  return(
                    <div className="order-btns d-flex flex-column align-items-center">
                    <NavLink id={note.id}  className="buybtn m-2" to="/ordering" onClick={e => orderProduct(e)}>{dataNotebook[lang]?.content7}</NavLink>
                    <NavLink onClick={e => addKorzina(e)} className="addkorzinabtn m-2" to="/..."><img className=" me-2" src={basketImg} alt="icon" width='20' height='20' /> {dataNotebook[lang]?.content8}</NavLink>
                </div>
                  )
              }
          })
      }



      </div>

    </div>
  );
}
export default SingleNotebook;
