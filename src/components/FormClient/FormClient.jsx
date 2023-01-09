import React from "react";
import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import ClientRegister from "../ClientRegister";
import { fechaForm } from "./utils.js";

const FormClient = ({ servicio, precio, paginas, idiomas }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (newRegister, e) => {
    newRegister.fecha = fechaForm;
    newRegister.precio = precio;
    newRegister.servicio = servicio;
    newRegister.paginas = paginas;
    newRegister.idiomas = idiomas;
    setData([...data, newRegister]);

    e.target.reset();
  };

  //ORDEN

  const porLetra = () => {
    const sortData = [...data]
    setData(sortData.sort((a, b) => (a.cliente > b.cliente ? 1 : -1)));
    console.log(data);
  };

  const porFecha = () => {
    const sortData = [...data]
    setData(sortData.sort((a, b) => (a.fecha > b.fecha ? 1 : -1)));
    console.log(data);
  };

  const reiniciar = () => {
    window.location.reload();
  };

  //FUNCION DE BUSQUEDA
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //USE EFFECT
  useEffect(() => {
    setResult(
      !search
        ? data
        : data.filter((item) =>
            item.presupuesto.toLowerCase().includes(search.toLocaleLowerCase())
          )
    );
  }, [data, search]);

  useEffect(() => {
    const data = localStorage.getItem("data");

    if (data) {
      setData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre presupuesto</label>
        <input
          className="input input-bordered input-error w-full max-w-xs m-8"
          type="text"
          name="presupuesto"
          {...register("presupuesto", { required: true })}
        />
        <label>Cliente</label>
        <input
          className="input input-bordered input-error w-full max-w-xs m-8"
          type="text"
          name="cliente"
          {...register("cliente", { required: true })}
        />
        <button className="btn btn-outline btn-error" type="submit">
          Enviar
        </button>
        <div className="w-1/2">
          <input
            value={search}
            onChange={searcher}
            type="text"
            name="company-website"
            id="company-website"
            className="input input-bordered input-error w-full max-w-xs font-rale"
            placeholder="Buscar presupuesto"
          />
        </div>
      </form>
      <div className="flex justify-between my-10">
        <button
          className="btn btn-outline btn-error"
          onClick={() => porLetra()}
        >
          Ordenar por letra
        </button>
        <button
          className="btn btn-outline btn-error"
          onClick={() => porFecha()}
        >
          Ordenar por fecha
        </button>
        <button
          className="btn btn-outline btn-error"
          onClick={() => reiniciar()}
        >
          Reiniciar orden
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Nombre presupuesto</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Servicio</th>
              <th>Paginas</th>
              <th>Idiomas</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            <ClientRegister data={result}/>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FormClient;
