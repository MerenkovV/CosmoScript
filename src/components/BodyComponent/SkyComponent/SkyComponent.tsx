import style from './SkyComponent.module.css'

export default function SkyComponent() {
  return (
    <div style={{overflow:"hidden"}}>
<svg className={style.intersect} width="1920" height="1380" viewBox="0 0 1920 1380" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 1114.15L0 0H1920V1113.55C1639.55 1282.69 1310.89 1380 959.5 1380C608.531 1380 280.235 1282.92 0 1114.15Z" fill="url(#paint0_linear_15_152)"/>
<defs>
<linearGradient id="paint0_linear_15_152" x1="960" y1="0" x2="960" y2="1380" gradientUnits="userSpaceOnUse">
<stop stopColor="#0E011F"/>
<stop offset="1" stopColor="#5970EA"/>
</linearGradient>
</defs>
</svg>

<svg className={style.skyBackGradient}  width="1917" height="942" viewBox="0 0 1917 942" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_15_168" style={{maskType: "alpha"}}maskUnits="userSpaceOnUse" x="0" y="0" width="1919" height="942">
<path d="M254.427 199.627C203.061 214.494 63.4066 155.865 0 124.692V941.5H1919V667.5V144.475C1857.99 96.3167 1718.7 0 1649.57 0C1563.16 0 1417.95 121.695 1356.14 125.891C1294.33 130.087 1281.13 58.7492 1248.73 60.5476C1216.33 62.3461 1194.12 151.669 1162.92 155.865C1131.72 160.062 1053.71 89.3227 1032.71 93.5191C1011.71 97.7155 1006.9 111.504 990.103 111.504C973.301 111.504 960.1 43.1627 932.497 40.1653C904.894 37.1679 901.294 75.5347 886.892 82.7284C872.491 89.9222 851.489 83.3279 831.087 89.3227C810.685 95.3176 798.683 106.708 780.681 111.504C762.68 116.299 731.476 124.093 675.67 101.312C619.865 78.5321 573.66 0 492.651 0C411.643 0 318.633 181.043 254.427 199.627Z" fill="url(#paint0_linear_15_168)" fillOpacity="0.6"/>
</mask>
<g mask="url(#mask0_15_168)">
<circle cx="956.5" cy="-1112.5" r="1862.5" fill="url(#paint1_linear_15_168)" fillOpacity="0.6"/>
</g>
<defs>
<linearGradient id="paint0_linear_15_168" x1="959.5" y1="0" x2="959.5" y2="941.5" gradientUnits="userSpaceOnUse">
<stop stopColor="#3B4BAC"/>
<stop offset="1" stopColor="#25145E"/>
</linearGradient>
<linearGradient id="paint1_linear_15_168" x1="956.5" y1="-2975" x2="956.5" y2="750" gradientUnits="userSpaceOnUse">
<stop offset="0.776754" stopColor="#3A58B4"/>
<stop offset="1" stopColor="#210F50"/>
</linearGradient>
</defs>
</svg>


<svg className={style.skyGradient} width="1917" height="979" viewBox="0 0 1917 979" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_15_171" style={{maskType: "alpha"}}maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="979">
<path d="M268.133 178.52C198.734 176.124 60.4613 58.5083 0 0V955L1920 979V161.746C1788.36 184.71 1503.61 227.164 1417.71 213.266C1310.33 195.893 1224.8 77.2788 1179.3 77.2788C1133.8 77.2788 1082.24 116.218 1055.55 113.222C1028.85 110.227 1009.44 77.2788 967.583 77.2788C925.725 77.2788 925.118 129.996 912.379 139.581C899.64 149.166 880.227 137.784 839.583 145.572C798.938 153.36 778.313 178.52 742.521 178.52C706.73 178.52 686.104 87.4628 636.967 77.2788C587.829 67.0948 354.882 181.515 268.133 178.52Z" fill="url(#paint0_linear_15_171)" fillOpacity="0.6"/>
</mask>
<g mask="url(#mask0_15_171)">
<circle cx="956.5" cy="-1137.5" r="1862.5" fill="url(#paint1_linear_15_171)" fillOpacity="0.4"/>
</g>
<defs>
<linearGradient id="paint0_linear_15_171" x1="960" y1="97.5" x2="960" y2="979" gradientUnits="userSpaceOnUse">
<stop stopColor="#1E6D9B"/>
<stop offset="1" stopColor="#231866"/>
</linearGradient>
<linearGradient id="paint1_linear_15_171" x1="956.5" y1="-3000" x2="956.5" y2="725" gradientUnits="userSpaceOnUse">
<stop offset="0.846162" stopColor="#2679B8"/>
<stop offset="1" stopColor="#24145B"/>
</linearGradient>
</defs>
</svg>




    </div>
  )
}
