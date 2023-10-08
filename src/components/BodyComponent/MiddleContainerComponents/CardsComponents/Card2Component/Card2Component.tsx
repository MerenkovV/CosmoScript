import CommonStyle from '../CardCommonStyle.module.css'
import style from './Card2Style.module.css'

export default function Card2Component() {
  return (
    <div className={`${CommonStyle.card} ${style.card}`}>
        <div className={`${CommonStyle.image} ${style.image}`}>
        
        <svg className={style.planet} width="210" height="209" viewBox="0 0 210 209" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_15_242)">
        <ellipse cx="105" cy="104.5" rx="95" ry="94.5" fill="#87E2AB"/>
        </g>
        <defs>
        <filter id="filter0_d_15_242" x="0" y="0" width="210" height="209" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_242"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_242" result="shape"/>
        </filter>
        </defs>
        </svg>

        <svg className={style.shadow} width="270" height="270" viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15_254" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="39" y="39" width="192" height="192">
        <circle cx="134.95" cy="134.95" r="95.4254" transform="rotate(-45.2821 134.95 134.95)" fill="#5098F0"/>
        </mask>
        <g mask="url(#mask0_15_254)">
        <rect x="-84.3765" y="139.072" width="156.982" height="280.094" transform="rotate(-45.2821 -84.3765 139.072)" fill="black" fillOpacity="0.15"/>
        </g>
        </svg>

        <svg className={style.islands} width="211" height="191" viewBox="0 0 211 191" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15_244" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="10" y="0" width="191" height="191">
        <circle cx="105.595" cy="95.7719" r="95.07" fill="#FDB51D"/>
        </mask>
        <g mask="url(#mask0_15_244)">
        <rect x="-25.6924" y="50.9119" width="309.492" height="57.6182" fill="#2AAC66"/>
        <rect x="-37.2158" y="118.408" width="309.492" height="30.4553" fill="#2AAC66"/>
        <rect x="-57.7939" y="21.2798" width="309.492" height="9.87741" fill="#2AAC66"/>
        </g>
        </svg>

        <svg className={style.light} width="253" height="253" viewBox="0 0 253 253" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_15_145)">
        <circle cx="126.5" cy="126.5" r="106.5" fill="#7C4DFF" fillOpacity="0.15"/>
        </g>
        <defs>
        <filter id="filter0_f_15_145" x="0" y="0" width="253" height="253" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_15_145"/>
        </filter>
        </defs>
        </svg>

        <div className={style.book}></div>

        <div className={style.message}></div>

        <div className={style.clock}></div>

        <div className={style.info}></div>


        </div>
        <div className={`${CommonStyle.text} ${style.text}`}>
            <p className={`${CommonStyle.title} `}>Запоминаем <br/> имена</p>
            <p className={`${CommonStyle.subtitle} `}>&emsp;   Научимся управлять кораблем <br/> и запишем имя капитана корабля (переменные).</p>
            <button className={`${CommonStyle.button} `}>Бесплатный доступ</button>
        </div>
    </div>
  )
}
