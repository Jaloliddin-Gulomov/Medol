import React from 'react'
import c from './Products.module.scss'
import { Container, Btn } from '../../utils/Components'
import { Link } from 'react-router-dom'
import { FiArrowRightCircle } from 'react-icons/fi'
import diabet from '../../assets/754-1 1.png'
import endo from '../../assets/endeavor-large 1.png'
import kardio from '../../assets/gallery_cs300_1 1.png'
import urologi from '../../assets/img5 1.png'
import laborotor from '../../assets/img6 1.png'
import aritmolog from '../../assets/pacemaker-advisa-mrishtsh222 1.png'
const Products = () => {

const productsData = [
    {
        "id": 1,
        "img": endo,
        "name": "Эндоваскулярная хирургия"
    },
    {
        "id": 2,
        "img": laborotor,
        "name": "Лабораторная диагностика"
    },
    {
        "id": 3,
        "img": kardio,
        "name": "Кардиохирургия"
    },
    {
        "id": 4,
        "img": diabet,
        "name": "ДИАБЕТ"
    },
    {
        "id": 5,
        "img": urologi,
        "name": "ЭНДОУРОЛОГИЯ"
    },
    {
        "id": 6,
        "img": aritmolog,
        "name": "АРИТМОЛОГИЯ"
    },
]

  return (
    <>
        <Container>
            <div className={c.products__wrapper}>
                <h2>ПРОДУКЦИЯ</h2>
                <div className={c.products}>
                  {
                    productsData.map(i => 
                        <Link className={c.product__card}> 
                            <img src={i.img} alt="product" />
                            <h3>{i.name}</h3>
                            <Btn text={"Посмотреть все"}/>
                        </Link>
                    )
                  }
                </div>
                <Link className={c.toCatalog}>Перейти в каталог нашей продукции <FiArrowRightCircle/></Link>
            </div>
        </Container>
    </>
  )
}

export default Products