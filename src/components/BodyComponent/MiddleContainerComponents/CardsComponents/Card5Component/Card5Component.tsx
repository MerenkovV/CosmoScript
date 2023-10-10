import CommonStyle from '../CardCommonStyle.module.css'
import style from './Card5Style.module.css'

export default function Card5Component() {
  return (
    <div className={`${CommonStyle.card} ${style.card}`}>
        <div className={`${CommonStyle.image} ${style.image}`}>

        <svg className={style.planet} width="202" height="203" viewBox="0 0 202 203" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_15_243)">
        <ellipse cx="101" cy="101.5" rx="91" ry="91.5" fill="#D587E2"/>
        </g>
        <defs>
        <filter id="filter0_d_15_243" x="0" y="0" width="202" height="203" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_243"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_243" result="shape"/>
        </filter>
        </defs>
        </svg>

        <svg className={style.shadow} width="259" height="259" viewBox="0 0 259 259" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15_305" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="37" y="37" width="184" height="184">
        <circle cx="129.45" cy="129.45" r="91.5363" transform="rotate(-45.2821 129.45 129.45)" fill="#5098F0"/>
        </mask>
        <g mask="url(#mask0_15_305)">
        <rect x="-80.9375" y="133.404" width="150.584" height="268.678" transform="rotate(-45.2821 -80.9375 133.404)" fill="black" fillOpacity="0.15"/>
        </g>
        </svg>



        <svg className={style.islands} width="204" height="193" viewBox="0 0 204 193" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15_249" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="10" y="10" width="184" height="183">
        <circle cx="101.884" cy="101.305" r="91.1954" fill="#FDB51D"/>
        </mask>
        <g mask="url(#mask0_15_249)">
        <rect x="242.117" y="152.705" width="296.878" height="55.2699" transform="rotate(-165.814 242.117 152.705)" fill="#AC48BD"/>
        <rect x="268.701" y="92.6437" width="296.878" height="29.2141" transform="rotate(-165.814 268.701 92.6437)" fill="#AC48BD"/>
        <rect x="265.004" y="187.809" width="296.878" height="9.47484" transform="rotate(-165.814 265.004 187.809)" fill="#AC48BD"/>
        </g>
        </svg>


        <svg className={style.light} width="245" height="244" viewBox="0 0 245 244" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_15_146)">
        <ellipse cx="122.5" cy="122" rx="102.5" ry="102" fill="#7C4DFF" fillOpacity="0.15"/>
        </g>
        <defs>
        <filter id="filter0_f_15_146" x="0" y="0" width="245" height="244" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_15_146"/>
        </filter>
        </defs>
        </svg>

        <div className={style.document}></div>

        <div className={style.glass}></div>

        <div className={style.chain}></div>


        </div>
        <div className={`${CommonStyle.text} ${style.text}`}>
            <p className={`${CommonStyle.title} `}>Функции</p>
            <p className={`${CommonStyle.subtitle} ${style.subtitle}`}>&emsp;Подключим новые модули<br/> к нашему кораблю (Функции)</p>
            <button className={`${CommonStyle.button} ${style.button}`}>доступ по подписке</button>
        </div>
    </div>
  )
}
