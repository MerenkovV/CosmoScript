import style from './ArrowsComponent.module.css'

export default function ArrowComponent() {
  return (
    <div className={style.body}>
        <svg className={style.light} width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_15_147)">
        <circle cx="62" cy="62" r="52" fill="#7C4DFF" fill-opacity="0.1"/>
        </g>
        <defs>
        <filter id="filter0_f_15_147" x="0" y="0" width="124" height="124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_15_147"/>
        </filter>
        </defs>
        </svg>

        <svg className={style.circle} width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_15_260)">
        <circle cx="44" cy="44" r="34" fill="#040723"/>
        </g>
        <defs>
        <filter id="filter0_d_15_260" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_260"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_260" result="shape"/>
        </filter>
        </defs>
        </svg>

        <svg className={style.arrow} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.74131 1.55962C5.84224 0.511752 4.26393 0.391127 3.21606 1.2902C2.16819 2.18927 2.04756 3.76758 2.94663 4.81545L14.8864 18.7313L3.5902 17.8679C2.21351 17.7627 1.01218 18.7935 0.906962 20.1702C0.801746 21.5469 1.83249 22.7482 3.20918 22.8534L20.1626 24.1491L22.6554 24.3396L22.8459 21.8469L22.8721 21.5036C22.8731 21.492 22.874 21.4804 22.8748 21.4688L24.1416 4.8934C24.2468 3.51671 23.2161 2.31538 21.8394 2.21016C20.4627 2.10495 19.2613 3.13569 19.1561 4.51238L18.3479 15.0872L6.74131 1.55962Z" fill="white"/>
        </svg>

    </div>
  )
}
