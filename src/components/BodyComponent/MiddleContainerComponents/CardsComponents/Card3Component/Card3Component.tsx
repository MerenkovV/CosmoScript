import CommonStyle from '../CardCommonStyle.module.css'
import style from './Card3Style.module.css'

export default function Card3Component() {
  return (
    <div className={`${CommonStyle.card} ${style.card}`}>
        <div className={`${CommonStyle.image} ${style.image}`}>
        
        <svg className={style.planet} width="246" height="245" viewBox="0 0 246 245" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_15_215)">
        <circle cx="122.535" cy="122.5" r="112.5" fill="#AAAAAA"/>
        </g>
        <defs>
        <filter id="filter0_d_15_215" x="0.034668" y="0" width="245" height="245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_215"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_215" result="shape"/>
        </filter>
        </defs>
        </svg>


        <svg className={style.shadow} width="283" height="283" viewBox="0 0 283 283" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15_290" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="23" y="23" width="237" height="237">
        <circle cx="141.5" cy="141.5" r="118.095" transform="rotate(-12.9132 141.5 141.5)" fill="#5098F0"/>
        </mask>
        <g mask="url(#mask0_15_290)">
        <rect x="-90.4863" y="0.491943" width="194.275" height="346.635" transform="rotate(-12.9132 -90.4863 0.491943)" fill="black" fill-opacity="0.2"/>
        </g>
        </svg>



        <svg className={style.islands} width="246" height="247" viewBox="0 0 246 247" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15_276" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="10" y="10" width="226" height="227">
        <circle cx="123.07" cy="123.471" r="112.661" fill="#AAAAAA"/>
        </mask>
        <g mask="url(#mask0_15_276)">
        <path d="M86.2247 72.4549C48.5294 76.7063 6.74807 62.1808 -9.43068 54.3867L-45.2129 106.466C-17.6972 117.567 42.4358 140.051 62.8423 141.185C119.881 144.354 158.852 94.4203 199.948 86.6261C232.826 80.3908 258.523 89.2242 267.261 94.4203V38.0898C222.622 47.7735 123.92 68.2036 86.2247 72.4549Z" fill="#616161"/>
        <path d="M202.982 125.129C228.207 118.894 244.197 131.742 249.039 138.946V178.979C211.013 214.407 131.631 280.303 118.31 260.464C101.658 235.664 108.39 205.55 118.31 186.773C128.229 167.997 171.452 132.923 202.982 125.129Z" fill="#616161"/>
        <ellipse cx="74.8879" cy="104.694" rx="30.468" ry="15.234" fill="#AAAAAA"/>
        <ellipse cx="130.51" cy="89.8146" rx="15.9426" ry="8.14842" fill="#AAAAAA"/>
        <ellipse cx="91.8933" cy="15.4158" rx="71.5644" ry="25.8624" transform="rotate(-11.5002 91.8933 15.4158)" fill="#616161"/>
        </g>
        </svg>


        <svg className={style.light} width="294" height="293" viewBox="0 0 294 293" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_15_143)">
        <circle cx="146.535" cy="146.5" r="126.5" fill="#7C4DFF" fill-opacity="0.15"/>
        </g>
        <defs>
        <filter id="filter0_f_15_143" x="0.034668" y="0" width="293" height="293" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_15_143"/>
        </filter>
        </defs>
        </svg>

        <div className={style.stop}></div>

        <div className={style.lamp}></div>

        <div className={style.keyboard}></div>

        <div className={style.gear}></div>


        </div>
        <div className={`${CommonStyle.text} ${style.text}`}>
            <p className={`${CommonStyle.title} `}>Автопилот</p>
            <p className={`${CommonStyle.subtitle} `}>&emsp;   Научимся облетать астероиды<br/> и другие корабли (Условия).</p>
            <button className={`${CommonStyle.button} ${style.button}`}>доступ по подписке</button>
        </div>
    </div>
  )
}
