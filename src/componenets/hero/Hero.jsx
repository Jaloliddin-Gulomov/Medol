import React from 'react'
import {Container, Btn} from '../../utils/Components'
import c from './Hero.module.scss'
import Navbar from '../navbar/Navbar'
import NavbarSecond from '../navbar/NavbarSecond'
import img from '../../assets/slide.png'

const Hero = () => {
  return (
    <>
        <Container>
            <div className={c.hero}>
                <Navbar/>
                <NavbarSecond/>
                <div className={c.hero__child}>
                  <div className={c.hero__text}>
                    <h1>Анализатор <br />ABL800 FLEX</h1>
                    <p>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</p>
                    <div><Btn text={("Подробнее")}/></div>
                  </div>
                  <div>
                    <img src={img} alt="slide" />
                  </div>
                  </div>
            </div>
            
        </Container>
    </>
  )
}

export default Hero