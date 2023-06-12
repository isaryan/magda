import React from 'react'
import './Contato.css'
import { Widget } from '@typeform/embed-react'
import { BsInstagram } from "react-icons/bs";

function Contato() {
  return (
    <div className='container'>
      <div className='widget'>
      <Widget id="ah2zwEeB" style={{ width: '90%' }} className="my-form" />
      </div>
      <div className="socials">
      <a href="https://www.instagram.com/magdapaiva.art/" target="_blank" rel="noreferrer noopener"><BsInstagram size={30} className='insta'/></a></div>
    </div>
  )
}

export default Contato