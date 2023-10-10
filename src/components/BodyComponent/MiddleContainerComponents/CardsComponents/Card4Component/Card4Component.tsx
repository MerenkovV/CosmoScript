import CommonStyle from '../CardCommonStyle.module.css'
import style from './Card4Style.module.css'

export default function Card4Component() {
  return (
    <div className={`${CommonStyle.card} ${style.card}`}>
        <div className={`${CommonStyle.image} ${style.image}`}>

        <svg className={style.planet} width="271" height="270" viewBox="0 0 271 270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_15_216)">
        <circle cx="135.037" cy="135" r="125" fill="#AAAAAA"/>
        </g>
        <defs>
        <filter id="filter0_d_15_216" x="0.0371094" y="0" width="270" height="270" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_216"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_216" result="shape"/>
        </filter>
        </defs>
        </svg>

        <svg className={style.shadow} width="301" height="301" viewBox="0 0 301 301" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15_293" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="19" y="19" width="263" height="263">
        <circle cx="150.091" cy="150.909" r="131.048" transform="rotate(-9.08216 150.091 150.909)" fill="#5098F0"/>
        </mask>
        <g mask="url(#mask0_15_293)">
        <rect x="-96.3096" y="-22.4147" width="215.583" height="384.653" transform="rotate(-9.08216 -96.3096 -22.4147)" fill="black" fillOpacity="0.2"/>
        </g>
        </svg>


        <svg className={style.islands} width="271" height="271" viewBox="0 0 271 271" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15_283" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="10" y="10" width="251" height="251">
        <circle cx="125.017" cy="125.017" r="125.017" transform="matrix(-1 0 0 1 260.564 10.8142)" fill="#AAAAAA"/>
        </mask>
        <g mask="url(#mask0_15_283)">
        <path d="M176.433 79.2199C218.263 83.9375 264.627 67.8189 282.58 59.1699L322.287 116.961C291.753 129.279 225.025 154.23 202.38 155.488C139.085 159.005 95.8404 103.594 50.2367 94.9453C13.7537 88.0261 -14.7618 97.8283 -24.4591 103.594V41.0857C25.076 51.8314 134.604 74.5022 176.433 79.2199Z" fill="#7C4DFF"/>
        <path d="M46.8706 137.671C18.8793 130.752 1.1358 145.01 -4.23706 153.003V197.428C37.9595 236.741 126.048 309.864 140.83 287.849C159.307 260.329 151.838 226.913 140.83 206.077C129.822 185.24 81.8597 146.32 46.8706 137.671Z" fill="#7C4DFF"/>
        <ellipse cx="33.8097" cy="16.9048" rx="33.8097" ry="16.9048" transform="matrix(-1 0 0 1 222.823 98.0903)" fill="#AAAAAA"/>
        <ellipse cx="17.6911" cy="9.04212" rx="17.6911" ry="9.04212" transform="matrix(-1 0 0 1 144.982 89.4414)" fill="#AAAAAA"/>
        <ellipse cx="79.4134" cy="28.6989" rx="79.4134" ry="28.6989" transform="matrix(-0.979924 -0.199371 -0.199371 0.979924 253.684 3.63477)" fill="#7C4DFF"/>
        </g>
        </svg>

        <svg className={style.light} width="321" height="320" viewBox="0 0 321 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_15_144)">
        <circle cx="160.037" cy="160" r="140" fill="#7C4DFF" fillOpacity="0.15"/>
        </g>
        <defs>
        <filter id="filter0_f_15_144" x="0.0371094" y="0" width="320" height="320" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_15_144"/>
        </filter>
        </defs>
        </svg>

        <div className={style.phone}></div>

        <div className={style.joystick}></div>

        <div className={style.bottle}></div>


        </div>
        <div className={`${CommonStyle.text} ${style.text}`}>
            <p className={`${CommonStyle.title} `}>Автопилот +</p>
            <p className={`${CommonStyle.subtitle} ${style.subtitle}`}>&emsp;   Усовершенствуем наш Автопилот<br/> с помощью цикла (Цикл).</p>
            <button className={`${CommonStyle.button} ${style.button}`}>доступ по подписке</button>
        </div>
    </div>
  )
}
