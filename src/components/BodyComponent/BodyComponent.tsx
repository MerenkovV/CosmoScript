import {useRef, useEffect} from 'react'
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
import SliderComponent from './BottomContainerComponents/SliderComponent/SliderComponent'
import { TariffType } from '../../App'

interface IProps {
  setState: any,
  state: {
    refAbout: any
    refTariff: any
    Tariffs: Array<TariffType>
  }
}

export default function BodyComponent(props:IProps) {
  useEffect(()=>{
    props.setState({
      ...props.state,
      refAbout,
      refTariff
    })
  }, [])
  const refAbout = useRef<HTMLDivElement>(null)
  const refTariff = useRef<HTMLDivElement>(null)

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
        <BigButtonComponent state={props.state}/>
      </div>

      <div ref={refAbout} className={style.middleContainer}>
        <MiddleTitleComponent/>
        <CommonCardsComponent/>
      </div>

      <div ref={refTariff} className={style.bottomContainer} >
        <SliderComponent state={props.state}/>
      </div>
    </div>
  )
}