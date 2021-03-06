import styles from "./styles.module.scss";

export function Player() {
  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>
      <div className={styles.emptyPlayer}>
        <strong>Selecione uma música para ouvir</strong>
      </div>
      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider} />
          </div>
          <span>00:00</span>
        </div>
        <div className={styles.buttons}>
          <button type="button">
            <img src="/shuffle.svg" alt="aleatório" />
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="tocar anterior" />
          </button>
          <button className={styles.playButton} type="button">
            <img src="/play.svg" alt="tocar" />
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="tocar próximo" />
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
}
