import styles from './Card.module.css'
import InfoBlock from '../InfoBlock/InfoBlock'

// Formata número: 215000000 → "215.000.000"
function formatPopulation(number) {
  return number.toLocaleString('pt-BR')
}

function Card({ flag, name, capital, region, population }) {
  return (
    <div className={styles.card}>

      <img
        src={flag}
        alt={`Bandeira de ${name}`}
        className={styles.flag}
      />

      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>

        <div className={styles.infoGrid}>
          <InfoBlock label="Capital" value={capital || '—'} />
          <InfoBlock label="Região" value={region} />
          <InfoBlock label="População" value={formatPopulation(population)} />
        </div>
      </div>

    </div>
  )
}

export default Card