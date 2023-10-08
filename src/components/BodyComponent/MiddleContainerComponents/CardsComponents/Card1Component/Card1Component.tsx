import CommonStyle from '../CardCommonStyle.module.css'
import style from './Card1Style.module.css'

export default function Card1Component() {
  return (
    <div className={`${CommonStyle.card} ${style.card}`}>
        <div className={`${CommonStyle.image} ${style.image}`}>
        <svg className={style.shadow} width="146" height="146" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15_225" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="11" y="11" width="124" height="124">
        <circle cx="73" cy="73.0001" r="61.9023" transform="rotate(-11.4989 73 73.0001)" fill="#5098F0"/>
        </mask>
        <g mask="url(#mask0_15_225)">
        <rect x="-46.7397" y="-3.89136" width="101.834" height="181.696" transform="rotate(-11.4989 -46.7397 -3.89136)" fill="black" fillOpacity="0.2"/>
        </g>
        </svg>

        <svg className={style.planet} width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_15_213)">
        <circle cx="72" cy="72.0002" r="62" fill="#5098F0"/>
        </g>
        <defs>
        <filter id="filter0_d_15_213" x="0" y="0.000244141" width="144" height="144" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_213"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_213" result="shape"/>
        </filter>
        </defs>
        </svg>

        <svg className={style.greenIsland} width="84" height="107" viewBox="0 0 84 107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M68.7714 86.7467C67.6414 92.8227 51.3508 102.781 43.3468 107C36.4413 103.361 47.5842 86.7467 47.5842 79.7845C47.5842 72.8223 36.7552 72.1894 30.6344 67.4424C24.5137 62.6955 31.2622 43.866 38.9524 40.7014C46.6426 37.5368 62.1799 48.2965 64.0632 51.6193C65.9465 54.9422 83.681 59.3727 83.9948 64.7525C84.3087 70.1324 70.1839 79.1516 68.7714 86.7467Z" fill="#78DA55"/>
        <path d="M21.061 23.4542C16.0388 26.1125 18.9684 33.8447 21.061 37.3785C15.2541 39.5938 2.54178 35.1633 0.344592 28.834C-1.8526 22.5048 6.62229 10.6375 21.061 3.20059C35.4996 -4.23627 47.5842 2.88413 49.7814 8.42222C51.9786 13.9603 27.3387 20.1313 21.061 23.4542Z" fill="#78DA55"/>
        </svg>

        <svg className={style.blueIsland} width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15_218" style={{maskType:"alpha"}}maskUnits="userSpaceOnUse" x="0" y="0" width="124" height="124">
        <circle cx="62.0347" cy="62.0347" r="61.962" fill="#5098F0"/>
        </mask>
        <g mask="url(#mask0_15_218)">
        <path d="M82.9796 29.2211C91.3576 31.7345 101.83 18.0505 106.019 10.8943L128.36 29.2211C122.426 35.8536 110.103 50.0263 108.288 53.6568C106.019 58.1948 65.7001 48.0715 60.8129 41.6135C55.9258 35.1555 72.5072 26.0793 82.9796 29.2211Z" fill="#4158D1"/>
        <path d="M24.8577 52.9585C18.295 46.2561 2.10921 47.8386 -5.16332 49.4677L-7.25781 79.8378C4.02916 95.6046 27.5456 127.348 31.3157 128.186C36.0283 129.233 60.2895 96.0701 59.2422 90.3102C58.195 84.5504 38.821 89.9612 31.3157 79.8378C23.8104 69.7144 33.0611 61.3365 24.8577 52.9585Z" fill="#4158D1"/>
        <path d="M41.0899 8.97442C46.396 5.76287 49.7006 0.771003 50.6897 -1.32349L25.3812 4.6109L7.229 24.334C10.1962 25.0322 16.724 26.603 19.0978 27.3012C22.065 28.1739 34.4574 12.9889 41.0899 8.97442Z" fill="white"/>
        <path d="M90.834 112.128C95.1627 110.732 100.201 111.546 102.179 112.128L92.5795 127.313H70.7619C72.2164 124.87 75.2999 119.633 75.9981 118.237C76.8708 116.492 85.4233 113.873 90.834 112.128Z" fill="white"/>
        </g>
        </svg>

        <svg className={style.light} width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_15_141)">
        <circle cx="96" cy="96.0002" r="71" fill="#7C4DFF" fillOpacity="0.15"/>
        </g>
        <defs>
        <filter id="filter0_f_15_141" x="0" y="0.000244141" width="192" height="192" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_15_141"/>
        </filter>
        </defs>
        </svg>

        <svg className={style.line} width="524" height="250" viewBox="0 0 524 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M148.953 5.6774C142.454 0.812931 59.5904 -8.59169 23.5205 50.4305C-29.3888 137.007 26.7704 218.181 68.6891 236.902C139.854 268.683 214.09 223.434 236.365 210.309C278.284 185.612 302.006 116.556 380.97 87.7248C459.934 58.8936 521.025 121.128 522 141.234" stroke="white" strokeWidth="3" strokeLinejoin="round" strokeDasharray="6 12 18 24"/>
        </svg>

        <div className={style.letter1}></div>

        <svg className={style.planet2} width="226" height="227" viewBox="0 0 226 227" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_15_214)">
        <ellipse cx="113" cy="113.5" rx="103" ry="103.5" fill="#FDB51D"/>
        </g>
        <defs>
        <filter id="filter0_d_15_214" x="0" y="0.000244141" width="226" height="227" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_214"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_214" result="shape"/>
        </filter>
        </defs>
        </svg>

        <svg className={style.islands} width="275" height="275" viewBox="0 0 275 275" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15_228" style={{maskType:"alpha"}}maskUnits="userSpaceOnUse" x="34" y="33" width="208" height="208">
        <circle cx="137.715" cy="137.086" r="103.309" transform="rotate(65.2991 137.715 137.086)" fill="#FDB51D"/>
        </mask>
        <g mask="url(#mask0_15_228)">
        <path d="M203.7 30.2104C193.549 54.7858 168.682 105.678 150.43 112.643C127.616 121.349 95.5225 93.5571 78.2501 115.09C64.4322 132.317 19.9246 159.321 -0.601919 170.669" stroke="#FF7738" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M230.28 75.5574C223.145 95.2885 205.205 136.725 190.528 144.62C172.182 154.489 134.427 153.26 108.749 165.071C75.3975 180.412 55.3918 209.996 53.532 226.943" stroke="#FF7738" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M249.397 153.659C240.176 166.005 217.568 191.9 200.898 196.707C180.061 202.716 135.807 209.125 123.068 216.415C110.329 223.704 85.702 247.905 79.7925 273.152" stroke="#FF7738" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M144.601 23.7807C142.79 37.7252 141.489 61.3288 125.551 68.6597C109.613 75.9907 71.0539 65.2385 50.6143 62.0051" stroke="#FF7738" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M171.306 25.0862C167.315 46.4702 174.816 82.474 141.884 89.3971C124.808 92.987 94.13 82.7551 63.4407 92.2224C49.1068 96.6443 9.48764 124.191 2.41568 136.026" stroke="#FFC702" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M117.117 28.5554C119.492 34.4957 121.84 46.9087 112.235 49.0382C102.63 51.1677 79.545 44.0494 69.2033 40.224" stroke="#FFC702" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M213.712 218.347C196.899 218.333 162.188 221.418 153.645 223.805C121.958 232.659 123.191 249.852 112.778 260.125" stroke="#FFC702" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M247.196 118.554C235.284 136.191 208.767 171.989 198 174.081C184.542 176.695 144.355 178.731 124.58 187.827C104.805 196.922 71.4415 221.566 64.5344 246.198" stroke="#FFC702" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M213.516 54.6604C207.567 75.157 192.165 117.548 178.144 123.139C160.618 130.127 131.606 123.804 104.293 136.725C76.9802 149.646 42.4711 182.683 35.4876 196.265" stroke="#FFC702" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        </svg>

        <svg className={style.shadow2} width="271" height="270" viewBox="0 0 271 270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_15_239" style={{maskType:"alpha"}}maskUnits="userSpaceOnUse" x="31" y="31" width="209" height="208">
        <circle cx="135.276" cy="134.998" r="103.871" transform="rotate(-21.5813 135.276 134.998)" fill="#5098F0"/>
        </mask>
        <g mask="url(#mask0_15_239)">
        <rect x="-85.1284" y="43.1418" width="170.875" height="304.882" transform="rotate(-21.5813 -85.1284 43.1418)" fill="black" fillOpacity="0.07"/>
        </g>
        </svg>

        <svg className={style.light2} width="271" height="272" viewBox="0 0 271 272" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_15_142)">
        <ellipse cx="135.5" cy="136" rx="115.5" ry="116" fill="#7C4DFF" fillOpacity="0.15"/>
        </g>
        <defs>
        <filter id="filter0_f_15_142" x="0" y="0.000244141" width="271" height="272" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_15_142"/>
        </filter>
        </defs>
        </svg>

        <div className={style.message1}></div>

        <div className={style.letter2}></div>

        </div>
        <div className={`${CommonStyle.text} ${style.text}`}>
            <p className={`${CommonStyle.title} `}>Приветствие</p>
            <p className={`${CommonStyle.subtitle} `}>&emsp;Создадим космический корабль, научимся отправлять и принимать сообщения с земли (Ввод/вывод данных).</p>
            <button className={`${CommonStyle.button} `}>Бесплатный доступ</button>
        </div>
    </div>
  )
}
