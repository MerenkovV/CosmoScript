import ArrowsComponent from "../ArrowsComponent/ArrowsComponent";
import MeteorsComponent from "../MeteorsComponent/MeteorsComponent";
import PlanetsComponent from "../PlanetsComponent/PlanetsComponent";
import StarsComponent from "../StarsComponent/StarsComponent";
import Card1Component from "./Card1Component/Card1Component";
import Card2Component from "./Card2Component/Card2Component";
import Card3Component from "./Card3Component/Card3Component";
import Card4Component from "./Card4Component/Card4Component";
import Card5Component from "./Card5Component/Card5Component";


export default function CommonCardsComponent() {
  return (
    <div>
      <ArrowsComponent/>
      <PlanetsComponent/>
      <StarsComponent/>
      <MeteorsComponent/>
        <Card1Component/>
        <Card2Component/>
        <Card3Component/>
        <Card4Component/>
        <Card5Component/>
    </div>
  )
}
