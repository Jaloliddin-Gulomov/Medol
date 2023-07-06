import React from 'react'
import c from './Footer.module.scss'
import { Btn, Container } from '../../utils/Components'
import { Link } from 'react-router-dom'
import phone from '../../assets/phone.svg'
import navigator from '../../assets/navigator.svg'
import email from '../../assets/email.svg'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <>
            <Container>
                <div className={c.footer__wrapper}>
                    <div className={c.footer__child}>
                        <div className={c.contact}>
                            <h3>Контакты</h3>
                            <div className={c.contact__child}>
                                <div className={c.address__wrapper}>
                                    <div className={c.nav__address}>
                                        <div className={c.white__circle}>
                                            <img src={navigator} alt="navigator" />
                                        </div>
                                        <Link className={c.address}>
                                            г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                                        </Link>
                                    </div>
                                    <div className={c.nav__phone}>
                                        <div className={c.white__circle}>
                                            <img src={email} alt="phone" />
                                        </div>
                                        <Link className={c.phone__num}>
                                            info@medol.uz
                                        </Link>
                                    </div>
                                </div>
                                <div className={c.email__wrapper}>
                                    <div className={c.nav__phone}>
                                        <div className={c.white__circle}>
                                            <img src={phone} alt="phone" />
                                        </div>
                                        <Link className={c.phone__num}>
                                            +998 71 276-62-53 <br />+998 71 276-62-54
                                        </Link>
                                    </div>
                                    <div className={c.footer__btn}> <Btn text={"Оставить заявку"} /></div>
                                </div>
                            </div>
                        </div>
                        <div className={c.logo__wrapper}>
                            <img src={logo} alt="logo" />
                            <p>Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.</p>
                        </div>
                    </div>
                    <div className={c.ul__wrapper}>
                        <div className={c.about__ul}>
                            <h3>О компании</h3>
                            <ul>
                                <li><Link className={c.footer__link}>История</Link></li>
                                <li><Link className={c.footer__link}>Партнеры</Link></li>
                                <li><Link className={c.footer__link}>Вакансии</Link></li>
                            </ul>
                        </div>
                        <div className={c.product__ul}>
                            <h3>Продукция</h3>
                            <ul>
                                <li><Link className={c.footer__link}>Эндоваскулярная хирургия</Link></li>
                                <li><Link className={c.footer__link}>Аритмология</Link></li>
                                <li><Link className={c.footer__link}>Кардиохирургия</Link></li>
                                <li><Link className={c.footer__link}>Лабораторная диагностика</Link></li>
                                <li><Link className={c.footer__link}>Хирургия</Link></li>
                                <li><Link className={c.footer__link}>Эндоурология</Link></li>
                                <li><Link className={c.footer__link}>Нейрохирургия</Link></li>
                                <li><Link className={c.footer__link}>Анестезиология и реанимация</Link></li>
                                <li><Link className={c.footer__link}>Диабет</Link></li>
                            </ul>
                        </div>
                        <div className={c.service__ul}>
                            <h3>Услуги</h3>
                            <ul>
                                <li><Link className={c.footer__link}>Сервис</Link></li>
                                <li><Link className={c.footer__link}>Регистрации</Link></li>
                                <li><Link className={c.footer__link}>Услуги логистики</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Footer