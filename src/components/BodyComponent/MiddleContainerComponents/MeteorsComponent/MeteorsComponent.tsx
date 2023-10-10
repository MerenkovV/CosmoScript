import style from "./MeteorsComponentStyle.module.css"

export default function MeteorsComponent() {
  return (
    <div className={style.container}>
        <svg className={style.meteor1} width="80" height="74" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.8" fillRule="evenodd" clipRule="evenodd" d="M67.8118 69.1708L0.0409525 0.600127L75.1221 61.0894C76.0254 61.3331 76.886 61.7884 77.6272 62.4593C80.1303 64.725 80.3227 68.5909 78.057 71.094C75.7913 73.5971 71.9255 73.7895 69.4224 71.5238C68.6822 70.8539 68.1441 70.044 67.8118 69.1708Z" fill="white"/>
        </svg>

        <svg className={style.meteor2} width="134" height="144" viewBox="0 0 134 144" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.63819 126.381L133.37 0.10025L16.6236 133.796C15.8895 135.211 14.8809 136.648 13.6262 137.997C9.389 142.554 3.94968 144.385 1.47712 142.086C-0.99544 139.787 0.43507 134.229 4.67226 129.672C5.92506 128.325 7.28296 127.216 8.63819 126.381Z" fill="white" fillOpacity="0.8"/>
        </svg>

        <svg className={style.meteor3} width="71" height="75" viewBox="0 0 71 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.06758 65.9755L70.0979 0.137698L9.23091 69.8414C8.84821 70.5788 8.32235 71.3282 7.66816 72.0317C5.45906 74.4076 2.62322 75.362 1.33413 74.1634C0.0450364 72.9648 0.790843 70.0671 2.99994 67.6912C3.65309 66.9888 4.36103 66.4106 5.06758 65.9755Z" fill="white" fillOpacity="0.8"/>
        </svg>

    </div>
  )
}
