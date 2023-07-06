import React from 'react'
import c from './Service.module.scss'
import { Btn, Container } from '../../utils/Components'
import service from '../../assets/servic 1.png'
import register from '../../assets/IIM-CAT-2020-application-deadline-extended-here’s-all-you-need-to-know 1.png'
import logistic from '../../assets/man-by-truck-guy-delivery-uniform-man-with-clipboard 1.png'
import { Link } from 'react-router-dom'

const serviceData = [
    {
        "id": 1,
        "img": service,
        "name": "СЕРВИС ОБОРУДОВАНИЯ",
        "description": "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
    },
    {
        "id": 2,
        "img": register,
        "name": "РЕГИСТРАЦИИ",
        "description": "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ...."
    },
    {
        "id": 3,
        "img": logistic,
        "name": "УСЛУГИ ЛОГИСТИКИ",
        "description": "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей....."
    }
]

const Service = () => {
    return (
        <>
            <Container>
                <div className={c.service__wrapper}>
                    <h2>УСЛУГИ</h2>
                    <div className={c.service}>
                        {
                            serviceData.map(i =>
                                <Link className={c.service__card}>
                                    <img src={i.img} alt="service" />
                                    <div>
                                        <h3>{i.name}</h3>
                                        <p>{i.description}</p>
                                    </div>
                                    <div className={c.service__btn}>
                                    <Btn text={"Подробнее"}/>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Service