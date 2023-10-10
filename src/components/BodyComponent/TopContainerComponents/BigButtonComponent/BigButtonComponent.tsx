import style from './BigButtonComponentStyle.module.css'

interface IProps {
  state: {
    refAbout: any
  }
}

export default function BigButtonComponent(props:IProps) {
  return (
    <div className={style.body} onClick={()=>{
      props.state.refAbout.current !== null && 
          window.scrollTo({
            top: props.state.refAbout.current.offsetTop, 
            behavior: "smooth",
          })
    }}>
        <div className={style.circle2}>
            <div className={style.circle3}>
                <p className={style.text}>ВПЕРЕД!</p>
            </div>
        </div>
    </div>
  )
}
