import BodyComponent from "./components/BodyComponent/BodyComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import {useState} from 'react'


export type TariffType = {
  name: string
  description: string
  price: number
}

function App() {
  const [state, setState] = useState({
    refAbout: HTMLElement,
    refTariff: HTMLElement,
    Tariffs: [
      {
          "name": "Базовый тариф",
          "description": "Этот тариф идеально подходит для тех, кто хочет начать свой путь. Он предоставляет доступ к основным функциям и услугам, помогая вам экономить и учиться.",
          "price": 100
      },
      {
          "name": "Профессиональный тариф",
          "description": "Наш профессиональный тариф предназначен для тех, кто стремится к высокой производительности и большей функциональности. Получите доступ к продвинутым возможностям и инструментам для достижения ваших целей",
          "price": 500
      },
      {
          "name": "Семейный тариф",
          "description": "Семейный тариф создан для обеспечения всей вашей семьи всем необходимым. С ним вы можете наслаждаться высокоскоростным интернетом, развлечениями и общими ресурсами для всей семьи без ограничений",
          "price": 467
      }
    ] as Array<TariffType>
  })

  return (
    <div className="App">
      <HeaderComponent state={state}/>
      <BodyComponent setState={setState} state={state}/>
    </div>
  );
}

export default App;
