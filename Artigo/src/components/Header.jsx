import style from '../styles/header.module.css'
import image from '../assets/download.png'

const Header = () => {

    return (
        <>
            <header className={style.header}>
                <img className={style.img} src={image} alt="" />
            </header>
        </>
    )
}

export default Header