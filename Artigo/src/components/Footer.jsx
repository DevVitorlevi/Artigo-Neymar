import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Desenvolvido Por <a className={styles.a} href="https://github.com/DevVitorlevi" target='_blank'>Vitor Levi🔗</a></p>
        </footer>
    )
}

export default Footer