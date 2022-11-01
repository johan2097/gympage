import React from 'react';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './Plans.css';

const Plans = () => {
  return (
    <div className='plans-container' style={{gap:'2rem'}}>
        <div className='programs-header'>
            <span className='texto-resaltado'>Listo para iniciar </span>
            <span>Nuestros viajes </span>
            <span className='texto-resaltado'>Con nosotros </span>
        </div>

        <div className='plans'>
           {plansData.map((plan, i)=>(
              <div className='plan' key={i}>
                  {plan.icon}
                  <span>{plan.name}</span>
                  <span>${plan.price}</span>
                  <div className='features'>
                  {plan.features.map((features, i)=>(
                    <div className='feature'>
                        <img src={whiteTick} alt=""/>
                        <span key={i}>{features}</span>
                    </div>
                  ))}
                  </div>
                  <div>
                    <span>Ver nuestros beneficios</span>
                   </div>
                   <button className='btn'>Ingresar Ahora</button>
              </div>
           ))}
        </div>
    </div>
  )
}

export default Plans