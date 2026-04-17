import styles from './Pagination.module.css'

function Pagination({ currentPage, totalPages, onPrev, onNext }) {
  // Se só tem uma página, não faz sentido mostrar paginação
  if (totalPages <= 1) return null

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        onClick={onPrev}
        disabled={currentPage === 1}
      >
        ← Anterior
      </button>

      <span className={styles.info}>
        Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
      </span>

      <button
        className={styles.btn}
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Próximo →
      </button>
    </div>
  )
}

export default Pagination