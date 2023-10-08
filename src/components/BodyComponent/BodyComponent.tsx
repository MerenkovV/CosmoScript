import BigButtonComponent from './TopContainerComponents/BigButtonComponent/BigButtonComponent'
import style from './BodyComponentStyle.module.css'
import CloudsComponent from './TopContainerComponents/CloudsComponent/CloudsComponent'
import RocketComponent from './TopContainerComponents/RockerComponent/RocketComponent'
import SkyBackComponent from './TopContainerComponents/SkyComponent/SkyBackComponent'
import SkyFrontComponent from './TopContainerComponents/SkyComponent/SkyFrontComponent'
import SkyLightComponent from './TopContainerComponents/SkyComponent/SkyLightComponent'
import StarsComponent from './TopContainerComponents/StarsComponent/StarsComponent'
import TitleComponent from './TopContainerComponents/TextComponents/TitleComponent'
import MiddleTitleComponent from './MiddleContainerComponents/MiddleTitleComponent/MiddleTitleComponent'
import CommonCardsComponent from './MiddleContainerComponents/CardsComponents/CommonCardsComponent'

export default function BodyComponent() {
  return (
    <div className={style.body}>
      <div className={style.topContainer}>
        <SkyLightComponent/>
        <CloudsComponent/>
        <StarsComponent/>
        <SkyBackComponent/>
        <SkyFrontComponent/>
        <TitleComponent/>
        <RocketComponent/>
        <BigButtonComponent/>
      </div>

      <div className={style.middleContainer}>
        <MiddleTitleComponent/>
        <CommonCardsComponent/>
      </div>
    </div>
  )
}
