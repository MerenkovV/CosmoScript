import React from 'react'
import style from './TitleComponentStyle.module.css'

export default function TitleComponent() {
  return (
    <div className={style.body}>
        <p className={style.title}>Cosmo Script</p>
        <p className={style.subtitle}>Научитесь программировать<br/>с помощью игры</p>
    </div>
  )
}
