import React from "react";
import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";

const FormClient = ({ servicio, precio, paginas, idiomas }) => {
  const [data, setData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (newData, e) => {
    const fecha = new Date();
    newData.fecha =
      fecha
      .getDate() + "/" + fecha.getMonth() + "/" 
      + fecha.getFullYear() + " - " + fecha.getHours()
      + ":" + fecha.getMinutes();
    newData.precio = precio;
    newData.servicio = servicio;
    newData.paginas = paginas;
    newData.idiomas = idiomas;
    setData([...data, newData]);

    e.target.reset();
  };

  //ORDEN

  const porLetra = () => {
    setData(data.sort((a , b) => a.cliente > b.cliente ? 1 : -1))
    
  }

  const porFecha = () => {
    setData(data.sort((a , b) => a.fecha > b.fecha ? 1 : -1))
    
  }

  const reiniciar = () => {
    window.location.reload()
  }


  //BUSQUEDA POR NOMBRE
   const [search, setSearch] = useState("")
        






  //FUNCION DE BUSQUEDA
  const searcher = (e) => {

        setSearch(e.target.value)
  }






   //METODO DE FILTRADO 2 OPTIMIZADO

  const result = !search ? data : data.filter((item) => 
  item.presupuesto.toLowerCase().includes(search.toLocaleLowerCase()) )





  //USE EFFECT
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
        <input value={search} onChange={searcher} type="text" name="company-website" id="company-website" className="input input-bordered input-error w-full max-w-xs font-rale" placeholder="Buscar presupuesto"/>

      </div>
      <div className="flex justify-between my-10">
        <button className="btn btn-outline btn-error" onClick={porLetra}>Ordenar por letra</button>
        <button className="btn btn-outline btn-error" onClick={porFecha}>Ordenar por fecha</button>
        <button className="btn btn-outline btn-error" onClick={reiniciar}>Reiniciar orden</button>
      </div>
      </form>
      
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
            {result.map((data, index) => (
              <tr key={index}>
                <td>{data.presupuesto}</td>
                <td>{data.cliente}</td>
                <td>{data.fecha}</td>
                <td>{data.servicio}</td>
                <td>{data.paginas}</td>
                <td>{data.idiomas}</td>
                <td>{data.precio + "€"}</td>
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>
    </>
  );
};

export default FormClient;
