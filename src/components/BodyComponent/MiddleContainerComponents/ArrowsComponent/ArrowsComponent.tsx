import ArrowComponent from './ArrowComponent'
import style from './ArrowsComponent.module.css'

export default function ArrowsComponent() {
  return (
    <div className={style.container}>
        <div className={`${style.element1} ${style.element}`}><ArrowComponent/></div>
        <div className={`${style.element2} ${style.element}`}><ArrowComponent/></div>
        <div className={`${style.element3} ${style.element}`}><ArrowComponent/></div>
        <div className={`${style.element4} ${style.element}`}><ArrowComponent/></div>
    </div>
  )
}
