import React from 'react'

const Card = ({ card }) => {
  const { description, price, imgUrl } = card
  return (
    <div className='card element'>
      <img src={imgUrl} width={250} height={220} />
      <div className='inner'>
        <div>
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
    </div>)
}

export default Card
