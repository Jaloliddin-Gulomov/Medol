import React from 'react'
import c from './About.module.scss'
import { Btn, Container } from '../../utils/Components'

const About = () => {
  return (
    <>
        <Container>
            <div className={c.about__wrapper}>
                <h2>О КОМПАНИИ</h2>
                <div className={c.about}>
                    <p>Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. </p>
                    <div className={c.about__btn}><Btn text={"Узнать больше"}/></div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default About