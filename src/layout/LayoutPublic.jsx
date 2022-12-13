import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <>
    <nav></nav>
    <main>
      <Outlet/>
    </main>
    <footer></footer>
    </>
  )
}

export default LayoutPublic