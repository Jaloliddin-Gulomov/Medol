import React from 'react'
import c from './Partners.module.scss'
import { Container } from '../../utils/Components'
import aes from '../../assets/aesculap-b-braun1 1.png'
import asp from '../../assets/asp1 1.png'
import bd from '../../assets/bd1 1.png'
import bioense from '../../assets/biosense1 1.png'
import cordis from '../../assets/cordis1 1.png'
import depuy from '../../assets/depuy-synthes-spine-jandj(1) 1.png'
import eth from '../../assets/eth 1.png'
import ethicon from '../../assets/ethicon-endo-surgery1 1.png'

const partnersData = [
    {
        "id": 1,
        "img": aes
    },
    {
        "id": 2,
        "img": asp
    },
    {
        "id": 3,
        "img": bd
    },
    {
        "id": 4,
        "img": bioense
    },
    {
        "id": 5,
        "img": cordis
    },
    {
        "id": 6,
        "img": depuy
    },
    {
        "id": 7,
        "img": eth
    },
    {
        "id": 8,
        "img": ethicon
    }
]

const Partners = () => {
    return (
        <>
            <Container>
                <div className={c.partners__wrapper}>
                    <h2>ПАРТНЕРЫ</h2>
                    <div className={c.partners}>
                        {
                            partnersData.map(i => 
                                <div className={c.partners__card}><img src={i.img} alt="" /></div>    
                            )
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Partners