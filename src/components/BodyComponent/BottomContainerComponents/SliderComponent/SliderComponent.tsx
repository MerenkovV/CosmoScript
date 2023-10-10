import style from './SliderComponentStyle.module.css'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import './AliceStyle.css'
import { TariffType } from '../../../../App';
import { Input, ConfigProvider } from 'antd';
import { useState, ChangeEvent } from 'react'

interface IProps {
  state: {
    refAbout: any
    refTariff: any
    Tariffs: Array<TariffType>
  }
}

export default function SliderComponent(props: IProps) {

  const [number, setNumber] = useState(0)

  let items = [
  ] as any[];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1301: { items: 3 },
  };
  items = props.state.Tariffs?.map(tariff => <div className={`${style.item}`} data-value="1">
    <p className={`${style.title}`}>{tariff.name}</p>
    <p className={`${style.subtitle}`}>{tariff.description}</p>
    <button className={`${style.button}`}>{tariff.price} $</button>
  </div>)

  items.push(
    <div className={`${style.item}`} data-value="1">
      <p className={`${style.title}`}>Настраиваемый тариф</p>
      <p className={`${style.subtitle}`}>Сохраните все преимущества базового тарифа, а также получите скидку за большее количество людей. Рекомендуется для образовательны учреждений</p>
      <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{setNumber(Number(e.target.value))}} prefix="Количество людей: " className={style.input} />
      <button className={`${style.button}`}>{(number * 435).toFixed(0)} $</button>
    </div>
  )
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 25,
            colorBgContainer: 'rgba(0, 0, 0, 0.0)',
            colorText: 'white'
          },
        }}
      >
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite={true}
        />
      </ConfigProvider>
    </div>
  )
}
