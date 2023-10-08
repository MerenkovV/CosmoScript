import style from './RocketComponentStyle.module.css'

export default function RocketComponent() {
  return (
    <div className={style.body}>
        <svg className={style.gas} width="1304" height="1054" viewBox="0 0 1304 1054" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style={{mixBlendMode: 'soft-light'}}>
        <path opacity="0.4" d="M1137.47 564.304C1169.76 636.3 1220.94 649.784 1242.49 647.526C1169.99 668.225 989.814 715.116 849.161 737.084C673.344 764.545 323.199 766.056 198.373 605.706C6.83685 359.66 496.691 56.5289 496.691 56.5289C496.691 56.5289 155.952 297.56 308.577 514.167C397.878 640.905 872.406 524.264 1111.78 444.838C1106.89 454.662 1105.18 492.309 1137.47 564.304Z" fill="white"/>
        <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M434.769 568.447C578.126 622.637 767.122 612.82 892.542 593.231C967.376 581.543 1053.4 562.8 1128.44 544.7C1105.13 485.889 1106.95 454.445 1111.35 445.592C930.871 505.479 616.702 586.522 434.769 568.447Z" fill="white"/>
        <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M155.726 510.035C167.819 461.042 185.547 406.237 209.088 366.937C239.029 316.954 289.72 263.826 328.647 227.491C396.037 127.876 496.478 56.8263 496.478 56.8263C496.478 56.8263 123.369 287.713 155.726 510.035Z" fill="white"/>
        </g>
        </svg>

        <div className={style.rocket}></div>

    </div>
  )
}
