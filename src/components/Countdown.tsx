import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const {
        minutos,
        segundos,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    const [minutoEsquerdo, minutoDireito] = String(minutos).padStart(2, '0').split('');
    const [segundoEsquerdo, segundoDireito] = String(segundos).padStart(2, '0').split('');

    return (

        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minutoEsquerdo}</span>
                    <span>{minutoDireito}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{segundoEsquerdo}</span>
                    <span>{segundoDireito}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                    <img src="icons/check.svg" alt="Concluido" />
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo
                                <img src="icons/cancel.svg" alt="Abandonar" />
                            </button>
                        ) :
                            <button
                                type="button"
                                className={styles.countdownButton}
                                onClick={startCountdown}
                            >
                                Iniciar ciclo
                            <img src="icons/play.svg" alt="Iniciar" />
                            </button>
                        }
                    </>
                )}

        </div>
    );
}