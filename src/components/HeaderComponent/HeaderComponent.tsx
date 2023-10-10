import { TariffType } from '../../App'
import style from './HeaderComponentStyle.module.css'

interface IProps {
  state: {
    refAbout: any
    refTariff: any
    Tariffs: Array<TariffType>
  }
}

export default function HeaderComponent(props: IProps) {
  return (
    <div className={style.body}>
        <span onClick={()=>{
          props.state.refAbout.current !== null && 
          window.scrollTo({
            top: props.state.refAbout.current.offsetTop, 
            behavior: "smooth",
          })
          
        }}>Описание игры</span>
        <span>Уровни</span>
        <span onClick={()=>{
          props.state.refTariff.current !== null && 
          window.scrollTo({
            top: props.state.refTariff.current.offsetTop, 
            behavior: "smooth",
          })
          
        }}>Тарифы</span>
        <span>Отзывы</span>
        <span>Партнеры</span>
        <span>Профиль</span>
        <span>Игра</span>
    </div>
  )
}
