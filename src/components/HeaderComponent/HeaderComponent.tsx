import style from './HeaderComponentStyle.module.css'

interface IProps {
  state: {
    refAbout: any
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
        <span>Тарифы</span>
        <span>Отзывы</span>
        <span>Партнеры</span>
        <span>Профиль</span>
        <span>Игра</span>
    </div>
  )
}
