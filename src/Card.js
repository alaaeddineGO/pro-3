import React from 'react'
import './Card.css'
function Card() {
  return (
    <div className='card'>
        <div className='image'></div>
        <div className='name'>alaaeddineGO</div>
        <div className='country'>Algeria</div>
        <h3>"front-end-developer."</h3>
        <div className='social'>
            <button>Facebook</button>
            <button>Instegram</button>
            <button>Linkedin</button>
            <button>Twiter</button>
            <button>Frontend Mentor</button>

        </div>
    </div>
  )
}

export default Card