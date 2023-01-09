import React from 'react'

const ClientRegister = ({data}) => {

const list = data.map((item) => item)

  return (
    <>
    {list.map((res, index) => (
              <tr key={index}>
                <td>{res.presupuesto}</td>
                <td>{res.cliente}</td>
                <td>{res.fecha}</td>
                <td>{res.servicio}</td>
                <td>{res.paginas}</td>
                <td>{res.idiomas}</td>
                <td>{res.precio + "€"}</td>
              </tr>
        ))}
      </>  
  )
}

export default ClientRegister