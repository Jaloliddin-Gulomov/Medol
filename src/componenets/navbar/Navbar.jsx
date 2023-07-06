import React from 'react'
import { Link } from 'react-router-dom'
import c from './Navbar.module.scss'
import {Container} from '../../utils/Components'
import navigator from '../../assets/navigator.svg'
import phone from '../../assets/phone.svg'
import logo from '../../assets/logo.svg'
import magnifier from '../../assets/magnifier.svg'
import fc from '../../assets/fc.svg'
import ru from '../../assets/ru.svg'
import down from '../../assets/down.svg'


const Navbar = () => {
  return (
    <>
        <Container>
            <div className={c.navbar}>
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
                        <img src={phone} alt="phone" />
                    </div>
                    <Link className={c.phone__num}>
                    +998 71 276-62-53 <br />+998 71 276-62-54
                    </Link>
                </div>
                <div className={c.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={c.search}>
                    <div className={c.white__circle}>
                        <img src={magnifier} alt="magnifier" />
                    </div>
                </div>
                <Link className={c.fc__wrapper}>
                    <div>
                        <img src={fc} alt="facebook" />
                    </div>
                    Мы на Facebook
                </Link>
                <div className={c.language}>
                    <img src={ru} alt="ru" />
                    <span>Русский</span>
                    <img src={down} alt="down" />
                </div>
            </div>
        </Container>
    </>
  )
}

export default Navbar