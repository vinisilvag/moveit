import { useContext } from 'react'

import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/Countdown.module.css'

export default function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
        <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          className={styles.countdownButton}
          disabled={hasFinished}
        >
          Ciclo encerrado
          <img
            style={{marginLeft: '1rem'}}
            src="/icons/buttons/complete.svg"
            alt="Tempo finalizado"
          />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <img
                style={{marginLeft: '1rem'}}
                src="/icons/buttons/close.svg"
                alt="Abandonar ciclo"
              />
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img
                style={{marginLeft: '1rem'}}
                src="/icons/buttons/start.svg"
                alt="Iniciar um ciclo"
              />
            </button>
          )}
        </>
      )}
    </div>
  )
}
