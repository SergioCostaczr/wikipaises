import styles from './SearchBar.module.css'

function SearchBar({ value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>🔍</span>
      <input
        type="text"
        className={styles.input}
        placeholder="Buscar país..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          className={styles.clear}
          onClick={() => onChange('')}
          aria-label="Limpar busca"
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar