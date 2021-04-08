import preloader from './../../../assets/preloader/preloader.gif'
import s from './Preloader.module.css'

let Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader