import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.logo}>🌍</span>
        <h1 className={styles.title}>WikiPaíses</h1>
        <p className={styles.subtitle}>
          Explore informações sobre países do mundo inteiro
        </p>
      </div>
    </header>
  )
}

export default Header