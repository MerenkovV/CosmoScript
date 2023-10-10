import BodyComponent from "./components/BodyComponent/BodyComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import {useState} from 'react'

function App() {
  const [state, setState] = useState({
    refAbout: HTMLElement
  })

  return (
    <div className="App">
      <HeaderComponent state={state}/>
      <BodyComponent setState={setState} state={state}/>
    </div>
  );
}

export default App;
