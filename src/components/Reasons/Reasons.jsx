import React from 'react';
import './Reason.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
       <div className='left-r'>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
       </div>
       <div className='right-r'>
          <span>Algunas razones</span>
          <div>
            <span className='texto-resaltado'>Porque </span>
            <span>Escogernos?</span>
          </div>

          <div className='details-r'>
             <div>
                <img src={tick} alt="" />
                <span>Mas de 150+ entrenadores expertos</span>
             </div>
             <div>
                <img src={tick} alt="" />
                <span>Convierte tu cuerpo de forma saludable</span>
             </div>
             <div>
                <img src={tick} alt="" />
                <span>Programas gratis para los nuevos miembros</span>
             </div>
             <div>
                <img src={tick} alt="" />
                <span>Compañeros importantes</span>
             </div>
          </div>
          <span className='compañeros'>
              Nuestros compañeros
          </span>
          <div className='partners'>
             <img src={nb} alt=""/>
             <img src={adidas} alt=""/>
             <img src={nike} alt=""/>
          </div>
       </div>
    </div>
  )
}

export default Reasons