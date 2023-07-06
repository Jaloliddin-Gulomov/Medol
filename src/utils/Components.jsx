import React from 'react'
import c from './Componeents.module.scss'
import { Link } from 'react-router-dom'

const Container = ({children}) => {
  return (
    <div className={c.container}>
        {children}
    </div>
    
  )
}
const Btn = ({text}) => {
 return(
  <Link className={c.btn}>
    <span>{text}</span>
  </Link>
 )
}

export {Container, Btn}