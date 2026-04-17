import styles from './RegionFilter.module.css'

const REGIONS = ['Americas', 'Europe', 'Asia', 'Africa', 'Oceania']

function RegionFilter({ selected, onChange }) {
  return (
    <div className={styles.wrapper}>
      {/* Botão "Todos" — limpa o filtro */}
      <button
        className={`${styles.btn} ${selected === '' ? styles.active : ''}`}
        onClick={() => onChange('')}
      >
        Todos
      </button>

      {REGIONS.map((region) => (
        <button
          key={region}
          className={`${styles.btn} ${selected === region ? styles.active : ''}`}
          onClick={() => onChange(region)}
        >
          {region}
        </button>
      ))}
    </div>
  )
}

export default RegionFilter