import style from './SkyComponent.module.css'

export default function SkyLightComponent() {
  return (
    <div className={style.lightContainer}>
        <svg className={style.spaceGradient} width="1920" height="1938" viewBox="0 0 1920 1938" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_15_151)">
<ellipse cx="959.5" cy="940" rx="1347.5" ry="598" fill="url(#paint0_radial_15_151)" fillOpacity="0.8"/>
</g>
<defs>
<filter id="filter0_f_15_151" x="-788" y="-58" width="3495" height="1996" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_15_151"/>
</filter>
<radialGradient id="paint0_radial_15_151" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(959.5 940) rotate(90) scale(598 1347.5)">
<stop offset="0.417518"/>
<stop offset="1" stopColor="#7A54E7"/>
</radialGradient>
</defs>
</svg>
    </div>
  )
}
