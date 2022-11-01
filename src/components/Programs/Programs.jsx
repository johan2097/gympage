import React from 'react';
import './Programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        <div className='programs-header'>
           <span className='texto-resaltado'>Explorar</span>
           <span>Programas</span>
           <span className='texto-resaltado'>Compartir</span>
        </div>
        <div className='program-categories'>
            {programsData.map((program)=>(
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-now'>
                        <span>Ingresar Ahora</span>
                        <img src={RightArrow} alt=""/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs