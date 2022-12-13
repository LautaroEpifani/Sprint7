import base from "daisyui/dist/base";
import React, { useState, useEffect, useRef } from "react";
import { set } from "react-hook-form";
import { Link, NavLink, useParams, useSearchParams } from "react-router-dom";
import FormClient from "../FormClient/FormClient";
import Help from "../Help/Help";
import styles from "./services.module.css";

const Services = () => {
  //  CHECKBOX
  const data = [
    { id: 1, nombre: "Una página Web", precio: 500, checked: false },
    { id: 2, nombre: "Una consultoria", precio: 300, checked: false },
    {
      id: 3,
      nombre: "Una campanya de Google Ads",
      precio: 200,
      checked: false,
    },
  ];

  const [checkedState, setCheckedState] = useState(
    data.map((item) => item.checked)
  );

  const handleOnChange = (posicion) => {
    const actualizaCheck = checkedState.map(
      (item, index) => (index === posicion ? !item : item)
      //Si es false pasa a true y viceversa
    );
    setCheckedState(actualizaCheck);
    precioBase(actualizaCheck);
  };

  // CALCULAR PRECIO BASE
  const [baseTotal, setBaseTotal] = useState(0);

  const precioBase = (actualizaCheck) => {
    const bTotal = actualizaCheck.reduce((acumulador, estadoActual, index) => {
      if (estadoActual === true) {
        if (index === 0) {
          return acumulador + data[index].precio + 30;
        } else {
          return acumulador + data[index].precio;
        }
      }
      return acumulador;
    }, 0);
    setBaseTotal(bTotal);
    setTotal(bTotal + (items[0].cantidad * items[1].cantidad * 30 - 30));
  };

  //DROPDOWN
  const dataItems = [
    {
      nombre: "Número de Páginas",
      cantidad: 1,
      info: "En este componente debe indicar el número de páginas que tendrá su web",
    },
    {
      nombre: "Número de idiomas",
      cantidad: 1,
      info: "En este componente debe indicar en cuantos idiomas quiere su web",
    },
  ];

  const [items, setItems] = useState(dataItems);

  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    // setIsOpen(!isOpen);
    setIsOpen(!checkedState[0]);
  };

  //CONTADOR
  const mas = (index) => {
    items[index].cantidad++;
    setItems([...items]);
    precioExtras(items[0].cantidad * items[1].cantidad * 30 - 30);
  };

  const menos = (index) => {
    if (items[index].cantidad < 1) {
      items[index].cantidad = 0;
    } else {
      items[index].cantidad--;
      setItems([...items]);
      precioExtras(items[0].cantidad * items[1].cantidad * 30 - 30);
    }
  };

  //CALCULAR TOTAL
  const [total, setTotal] = useState(0);

  const precioExtras = (extras) => {
    const totalExtras = baseTotal + extras;
    setTotal(totalExtras);
  };

  //HELP^-^
  const [info, setInfo] = useState(null);

  const setInformation = (index) => {
    console.log(index);

    const information = items[index].info;
    setInfo(information);

    document.getElementById("my-modal-3").checked = true;
  };

  //SERVICIO seleccionado
  const servicio = checkedState.map((item, index) =>
    item ? data[index].nombre + ",  " : ""
  );

  //PAGINAS E IDIOMAS
  const paginas = items[0].cantidad;
  const idiomas = items[1].cantidad;

  //USE SEARCHPARAMS ( URL )
  const [searchParams, setSearchParams] = useSearchParams();
  const url = () => {

    return setSearchParams({
    paginaWeb: !checkedState[0],
    paginas: items[0].cantidad,
    idiomas: items[1].cantidad,
    campaniaSeo: !checkedState[1],
    campaniaAds: !checkedState[2],
  });

  } 

  //USE EFFECT
  useEffect(() => {
    const checked = localStorage.getItem("checked");
    const total = localStorage.getItem("total");
    const items = localStorage.getItem("items");
    const isOpen = localStorage.getItem("isOpen");
    const baseTotal = localStorage.getItem("baseTotal");
    const searchParams = localStorage.getItem("searchParams");
    if (checked) {
      setCheckedState(JSON.parse(checked));
      setTotal(JSON.parse(total));
      setItems(JSON.parse(items));
      setIsOpen(JSON.parse(isOpen));
      setBaseTotal(JSON.parse(baseTotal));
      setSearchParams(JSON.parse(searchParams));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("checked", JSON.stringify(checkedState));
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("isOpen", JSON.stringify(isOpen));
    localStorage.setItem("baseTotal", JSON.stringify(baseTotal));
    localStorage.setItem("searchParams", JSON.stringify(searchParams));
  }, [checkedState, total, items, isOpen, baseTotal, searchParams]);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline m-20">
          ¿Que quieres hacer?
        </h1>
        <div className={styles.contenedor}>
          <div className={styles.items}>
            <div className=" m-20">
              {data.map((data, index) => {
                return data.id === 1 ? (
                  <div key={index}>
                    <div className=" m-2">
                      <input
                        type="checkbox"
                        id={index}
                        name={data.nombre}
                        value={data.nombre}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                        onClick={() => {
                          clickHandler();
                          url();
                        }}
                        ref={activatorRef}
                      />

                      <label htmlFor={index}>
                        {data.nombre} ({data.precio}€)
                      </label>

                      {isOpen ? (
                        <svg
                          height="24"
                          fill="rgb(70,70,70)"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m0 0h24v24h-24z" fill="none" />
                          <path d="m7.41 15.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z" />
                        </svg>
                      ) : (
                        <svg
                          height="24"
                          fill="rgb(70,70,70)"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m0 0h24v24h-24z" fill="none" />
                          <path d="m7.41 8.59 4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
                        </svg>
                      )}
                    </div>

                    <div
                      ref={dropdownListRef}
                      className={`${styles.dropdown_item_list} ${
                        isOpen ? styles.active : ""
                      } `}
                    >
                      {items.map((item, index) => {
                        return (
                          <div key={index} className={styles.item_list}>
                            <div className={styles.dropdown_items}>
                              <p>{item.nombre}</p>
                              <img
                                src={`imgDrop/mas.png`}
                                alt=""
                                width="20"
                                onClick={() => {
                                  mas(index);
                                  url();
                                }}
                              />
                              <p>{item.cantidad}</p>
                              <img
                                src={`imgDrop/menos.png`}
                                alt=""
                                width="20"
                                onClick={() => {
                                  menos(index);
                                  url();
                                }}
                              />

                              <img
                                src={`imgDrop/info.png`}
                                onClick={() => setInformation(index)}
                                alt=""
                                width={20}
                              ></img>
                              <Help info={info} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <>
                    <div key={index} className="presupuesto m-2">
                      <input
                        type="checkbox"
                        id={index}
                        name={data.nombre}
                        value={data.nombre}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                        onClick={() => {
                          url();
                        }}
                      />

                      <label htmlFor={index}>
                        {data.nombre} ({data.precio}€)
                      </label>
                    </div>
                  </>
                );
              })}

              <div className="">
                <div className="">
                  Total: {total !== 0 ? total + "€" : baseTotal}
                </div>
              </div>
              <Link to="/">
                <button className="btn btn-outline btn-error mt-20">
                  Volver al Inicio
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.form}>
            <FormClient
              servicio={servicio}
              precio={total}
              paginas={paginas}
              idiomas={idiomas}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
