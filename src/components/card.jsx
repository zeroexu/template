import React from 'react'
import fly from '../assets/images/fly.png'
const Card = ({ card }) => {
  const { description, price, imgUrl, link } = card
  return (
    <div className='card element'>
      <a href={link} target='_blank'>
        <img src={imgUrl} width={250} height={220} />
        <div className='inner'>
          <div>
            <img src={fly} className='fly-icon float-left' />
            <span className='sub-title float-left'>Directo</span>
            <span className='sub-title float-right'>Precio desde</span>
          </div>
          <div className='cleaner-floater'>
            <span className='title float-left'>{description}</span>
            <span className='title float-right'>$ {price}</span>
          </div>
          <div>
            <button>Ver Vuelo</button>
          </div>
          <div className='cleaner-floater' />
        </div>
      </a>
    </div>)
}

export default Card
