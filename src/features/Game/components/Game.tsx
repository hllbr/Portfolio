import { useEffect, useRef, useState } from 'react';
import { GithubLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Game.module.css';

interface FallingIcon {
  id: number;
  left: number;
  url: string;
  name: string;
  Element: JSX.Element;
  cut: boolean;
  animation: string;
  cutAnimation: string;
  posY?: number;
  rot?: number;
}

const icons = [
  { name: 'LinkedIn', Element: <LinkedinLogo size={64} />, url: 'https://www.linkedin.com/in/hllbr/' },
  { name: 'GitHub', Element: <GithubLogo size={64} />, url: 'https://github.com/hllbr' },
  { name: 'YouTube', Element: <YoutubeLogo size={64} />, url: 'https://www.youtube.com/@platonfarkndapaylasmlar637' },
  { name: 'Twitter', Element: <TwitterLogo size={64} />, url: 'https://twitter.com' },
];

const Game = () => {
  const { t } = useTranslation();
  const [falling, setFalling] = useState<FallingIcon[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOverIcon, setGameOverIcon] = useState<FallingIcon | null>(null);
  const idRef = useRef(0);
  const animations = ['fall', 'fallRotate', 'fallSpin', 'fallColor'];
  const cutAnimations = ['cut', 'cutBlood', 'cutWind', 'cutFade', 'cutFlip'];

  useEffect(() => {
    if (!gameStarted || gameOverIcon) return;
    const interval = setInterval(() => {
      setFalling(prev => [
        ...prev,
        {
          id: idRef.current++,
          left: Math.random() * 90,
          url: icons[idRef.current % icons.length].url,
          name: icons[idRef.current % icons.length].name,
          Element: icons[idRef.current % icons.length].Element,
          cut: false,
          animation: animations[Math.floor(Math.random() * animations.length)],
          cutAnimation: 'cut',
        },
      ]);
    }, 1200);
    return () => clearInterval(interval);
  }, [gameStarted, gameOverIcon]);

  const handleCut = (id: number, el: HTMLDivElement) => {
    const anim = cutAnimations[Math.floor(Math.random() * cutAnimations.length)];
    const style = window.getComputedStyle(el);
    const matrix = new DOMMatrix(style.transform);
    const posY = matrix.m42;
    const rot = (Math.atan2(matrix.m21, matrix.m11) * 180) / Math.PI;
    setFalling(prev =>
      prev.map(f =>
        f.id === id ? { ...f, cut: true, cutAnimation: anim, posY, rot } : f
      )
    );
    setScore(prev => prev + 1);
  };

  const handleAnimationEnd = (icon: FallingIcon) => {
    setFalling(prev => prev.filter(f => f.id !== icon.id));
    if (!icon.cut && !gameOverIcon) {
      setGameOverIcon(icon);
      setGameStarted(false);
      setFalling([]);
    }
  };

  const startGame = () => {
    setScore(0);
    setFalling([]);
    setGameOverIcon(null);
    idRef.current = 0;
    setGameStarted(true);
  };

  const closeModal = () => {
    setGameOverIcon(null);
  };

  const visitIcon = () => {
    if (gameOverIcon) {
      window.open(gameOverIcon.url, '_blank', 'noopener,noreferrer');
    }
    closeModal();
  };

  return (
    <div className={styles.container}>
      {!gameStarted && !gameOverIcon && (
        <div className={styles.startOverlay} onClick={startGame}>
          {t('gameScreen.tapToTrap')}
        </div>
      )}
      {gameStarted && (
        <div className={styles.scoreboard}>
          {t('gameScreen.score')}: {score}
        </div>
      )}
      {falling.map(icon => (
        <div
          key={icon.id}
          className={`${styles.icon} ${icon.cut ? styles[icon.cutAnimation] : styles[icon.animation]}`}
          style={{
            left: `${icon.left}%`,
            ...(icon.cut
              ? {
                  '--ty': `${icon.posY ?? 0}px`,
                  '--rot': `${icon.rot ?? 0}deg`,
                }
              : {}),
          } as React.CSSProperties}
          onClick={e => handleCut(icon.id, e.currentTarget)}
          onAnimationEnd={() => handleAnimationEnd(icon)}
        >
          {icon.Element}
        </div>
      ))}
      {gameOverIcon && (
        <div className={styles.overlay} onClick={closeModal}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <p>{t('gameScreen.gameOver')}</p>
            <p>{t('gameScreen.score')}: {score}</p>
            <p>{t('gameScreen.missed', { platform: gameOverIcon.name })}</p>
            <div className={styles.modalButtons}>
              <button onClick={visitIcon}>{t('gameScreen.ok')}</button>
              <button onClick={closeModal}>{t('gameScreen.cancel')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
