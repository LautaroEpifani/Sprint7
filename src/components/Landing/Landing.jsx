import React from "react";
import { Link } from "react-router-dom";
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="card w-1/4 bg-base-100 shadow-xl image-full absolute">
          <figure>
            <img src={`imgLan/card.jpg`} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">Somos</h1>
            <h1 className="card-title">Tecno Solutions</h1>
            <ul className="p-4">
              <li className="m-4">
                Podemos crear una hermosa y funcional página web de la manera
                que quieras.
              </li>
              <li className="m-4">
                También podemos darte mayor visibilizad con una campania en
                Google Ads, es muy simple.
              </li>
              <li className="m-4">
                Te proporcionamos un servicio único de consultoria web por lo que podremos
                darte asistencia con todas tus dudas.
              </li>
            </ul>
            <div className="card-actions justify-end">
              <Link to="/services">
                <button className="btn btn-error">
                  Echa un vistazo a nuestras ofertas
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img src={`imgLan/web.jpg`} alt="" className={styles.img}></img>
      </div>
      <div className={styles.container_cards}>
        <div className={styles.title}>Los servicios que ofrecemos</div>
        <div className="cards flex justify-center gap-14">
          <div className="card w-1/4 bg-base-100 shadow-xl">
            <figure>
              <img src={`imgLan/unaweb.jpg`} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Una Página Web</h2>
              <p>Personaliza tu web con muchas páginas e idiomas</p>
              <div className="card-actions justify-end">
                <Link to="/services">
                  <button className="btn btn-primary">Compra ahora</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-1/4 bg-base-100 shadow-xl">
            <figure>
              <img src={`imgLan/consultoria.jpg`} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Consultoría SEO</h2>
              <p>Lo hacemos simple y funcional para ti</p>
              <div className="card-actions justify-end">
                <Link to="/services">
                  <button className="btn btn-primary">Compra ahora</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-1/4 bg-base-100 shadow-xl">
            <figure>
              <img src={`imgLan/listado.jpg`} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Campania Google Ads</h2>
              <p>Te posicionamos en las listas mas visitadas</p>
              <div className="card-actions justify-end">
                <Link to="/services">
                  <button className="btn btn-primary">Compra ahora</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
