import React from 'react'
import style from './HeaderComponentStyle.module.css'
import { HashLink } from 'react-router-hash-link'

export default function HeaderComponent() {
  return (
    <div className={style.body}>
        <HashLink to=''>Описание игры</HashLink>
        <HashLink to=''>Уровни</HashLink>
        <HashLink to=''>Тарифы</HashLink>
        <HashLink to=''>Отзывы</HashLink>
        <HashLink to=''>Партнеры</HashLink>
        <HashLink to=''>Профиль</HashLink>
        <HashLink to=''>Игра</HashLink>
    </div>
  )
}
