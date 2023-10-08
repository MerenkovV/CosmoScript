import style from './SkyComponent.module.css'

export default function SkyComponent() {
  return (
    <div className={style.body}>
<svg className={style.intersect} width="1920" height="1380" viewBox="0 0 1920 1380" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 1114.15L0 0H1920V1113.55C1639.55 1282.69 1310.89 1380 959.5 1380C608.531 1380 280.235 1282.92 0 1114.15Z" fill="url(#paint0_linear_15_152)"/>
<defs>
<linearGradient id="paint0_linear_15_152" x1="960" y1="0" x2="960" y2="1380" gradientUnits="userSpaceOnUse">
<stop stopColor="#0E011F"/>
<stop offset="1" stopColor="#5970EA"/>
</linearGradient>
</defs>
</svg>
    </div>
  )
}
