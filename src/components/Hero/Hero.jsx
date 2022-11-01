import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import Heart from '../../assets/heart.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'>
           <Header/>
           <div className='the-best-ad'>
            <div></div>
            <span>Los mejores gimnasios del pais.</span>
           </div>

           <div className='hero-text'>
                <div>
                    <span className='texto-resaltado'>Realiza </span>
                    <span>Tu</span>
                </div>
                <div>
                    <span>Cuerpo Ideal</span>
                </div>
                <div className='texto-principio'>
                    Aquí te ayudaremos a moldear y construir tu 
                    cuerpo ideal y vivir tu vida al máximo. 
                </div>
           </div>

           <div className='figuras'>
             <div className='figuras-div'>
                <span className='span-figuras'>+150</span>
                <span className='span-figuras'>Entrenadores</span>
            </div>
            <div className='figuras-div'>
                <span className='span-figuras'>+978</span>
                <span className='span-figuras'>Miembros</span>
            </div>
            <div className='figuras-div'>
                <span className='span-figuras'>+50</span>
                <span className='span-figuras'>Programas</span>
            </div>
           </div>

           <div className='hero-botones'>
             <buttons className="btn">Iniciar</buttons>
             <buttons className="btn">Aprende Mas</buttons>
           </div>

        </div>
        <div  className='right-h'>
            <button className='btn'>Ingresar Ahora</button>

            <div className='heart-rate'>
               <img src={Heart} alt=''/>
               <span>Rango De Corazon</span>
               <span>116bpm</span>
            </div>

            <img src={hero_image} alt="" className="hero-image"/>
            <img src={hero_image_back} alt="" className="hero-image-back"/>
        </div>
    </div>
  )
}

export default Hero