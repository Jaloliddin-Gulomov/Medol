import React from 'react'
import c from './News.module.scss'
import { Btn, Container } from '../../utils/Components'
import newsImg from '../../assets/news.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.scss';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi'


const newsData = [
    {
        "id": 1,
        "img": newsImg,
        "title": "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        "date": "26.07.2021",
        "description": "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
    },
    {
        "id": 2,
        "img": newsImg,
        "title": "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        "date": "26.07.2021",
        "description": "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
    },
    {
        "id": 3,
        "img": newsImg,
        "title": "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        "date": "26.07.2021",
        "description": "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
    },
    {
        "id": 4,
        "img": newsImg,
        "title": "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        "date": "26.07.2021",
        "description": "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
    },
    {
        "id": 5,
        "img": newsImg,
        "title": "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        "date": "26.07.2021",
        "description": "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
    },
    {
        "id": 6,
        "img": newsImg,
        "title": "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
        "date": "26.07.2021",
        "description": "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении..."
    }
]

const News = () => {
    return (
        <>
            <Container>
                <div className={c.news__wrapper}>
                    <h2>НОВОСТИ</h2>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation={true}
                            loop={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {
                                newsData.map(i =>
                                    <SwiperSlide>
                                        <img src={i.img} alt="news" />
                                        <div className='news-card'>
                                            <h3>{i.title}</h3>
                                            <h4>{i.date}</h4>
                                            <p>{i.description}</p>
                                        </div>
                                        <Btn text={"Подробнее"}/>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                        <div className={c.news__links}>
                            <Link className={c.seeAll__news}>Посмотреть все новости <FiArrowRightCircle/> </Link>
                            <Link className={c.seeAll__news}>Подписаться на новости <FiArrowRightCircle/></Link>
                        </div>
                
                </div>
            </Container>
        </>
    )
}

export default News