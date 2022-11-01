import React from 'react';
import { Button } from 'react-scroll';
import './Join.css';

const Join = () => {
  return (
    <div className='Join' id='join-us'>
       <div className='left-j'>
          <div>
            <span className='texto-resaltado'>Listo</span>
            <span>para iniciar</span>
          </div>
          <div>
            <span>Inscribate</span>
            <span className='texto-resaltado'>por favor</span>
          </div>
       </div>
       <div className='right-j'>
           <form action='' className='email-container'>
               <input type='email' name='user_email' placeholder="Ingrese por favor su correo"/>
                <button className='btn btn-j'>Ingresar Ahora</button>
           </form>
       </div>
    </div>
  )
}

export default Join