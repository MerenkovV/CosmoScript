import style from './BodyComponentStyle.module.css'
import CloudsComponent from './CloudsComponent/CloudsComponent'
import SkyComponent from './SkyComponent/SkyComponent'
import StarsComponent from './StarsComponent/StarsComponent'

export default function BodyComponent() {
  return (
    <div className={style.body}>
        <CloudsComponent/>
        <StarsComponent/>
        <SkyComponent/>
    </div>
  )
}
