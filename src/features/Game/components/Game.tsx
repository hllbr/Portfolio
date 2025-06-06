import React, { useEffect, useRef, useState } from 'react';
import {
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
  YoutubeLogo,
  EnvelopeSimple,
  Timer
} from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Game.module.css';

interface IconData {
  name: string;
  url: string;
  element: React.ReactElement;
}

const icons: IconData[] = [
  { name: 'GitHub', url: 'https://github.com/hllbr', element: <GithubLogo size={40} /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hllbr/', element: <LinkedinLogo size={40} /> },
  { name: 'WhatsApp', url: 'https://wa.me/905522972185', element: <WhatsappLogo size={40} /> },
  { name: 'YouTube', url: 'https://www.youtube.com/@platonfarkndapaylasmlar637', element: <YoutubeLogo size={40} /> },
  { name: 'Email', url: 'mailto:halibrahim.kocak@gmail.com', element: <EnvelopeSimple size={40} /> },
  { name: 'WakaTime', url: 'https://wakatime.com/@HLLBR', element: <Timer size={40} /> }
];

interface FallingIcon {
  id: number;
  x: number;
  y: number;
  speed: number;
  data: IconData;
}

const Game = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [playerX, setPlayerX] = useState(50);
  const [iconsState, setIconsState] = useState<FallingIcon[]>([]);
  const [gameRunning, setGameRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [collision, setCollision] = useState<FallingIcon | null>(null);
  const iconId = useRef(0);
  const animationRef = useRef<number>(0);

  const spawnInterval = useRef<NodeJS.Timeout | null>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pos = ((e.clientX - rect.left) / rect.width) * 100;
    setPlayerX(Math.max(0, Math.min(100, pos)));
  };

  const startGame = () => {
    setIconsState([]);
    setScore(0);
    setCollision(null);
    setPlayerX(50);
    setGameRunning(true);
  };

  // spawn icons
  useEffect(() => {
    if (!gameRunning) return;
    spawnInterval.current = setInterval(() => {
      setIconsState(prev => [
        ...prev,
        {
          id: iconId.current++,
          x: Math.random() * 90,
          y: -10,
          speed: 1 + Math.random() * 1.5 + score * 0.02,
          data: icons[Math.floor(Math.random() * icons.length)]
        }
      ]);
    }, 1000);
    return () => {
      if (spawnInterval.current) clearInterval(spawnInterval.current);
    };
  }, [gameRunning, score]);

  // update positions & collision
  useEffect(() => {
    if (!gameRunning) return;
    const update = () => {
      setIconsState(prev => {
        return prev
          .map(icon => ({ ...icon, y: icon.y + icon.speed }))
          .filter(icon => {
            if (icon.y > 100) {
              setScore(s => s + 1);
              return false;
            }
            return true;
          });
      });
      animationRef.current = requestAnimationFrame(update);
    };
    animationRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationRef.current);
  }, [gameRunning]);

  // collision detection
  useEffect(() => {
    if (!gameRunning) return;
    const rectWidth = 48;
    const playerCenter = playerX;
    iconsState.forEach(icon => {
      if (Math.abs(icon.x - playerCenter) < rectWidth / 2 && icon.y >= 80) {
        setCollision(icon);
        setGameRunning(false);
      }
    });
  }, [iconsState, playerX, gameRunning]);

  const closeModal = () => setCollision(null);

  const visit = () => {
    if (collision) {
      window.open(collision.data.url, '_blank', 'noopener,noreferrer');
    }
    closeModal();
  };

  return (
    <div
      className={`${styles.container}`}
      ref={containerRef}
      onPointerMove={gameRunning ? handleMove : undefined}
      onPointerDown={gameRunning ? handleMove : undefined}
    >
      <div className={styles.starfield} />
      <div className={styles.score}>{t('gameScreen.score')}: {score}</div>
      <div
        className={styles.player}
        style={{ left: `${playerX}%` }}
      >
        {icons[0].element}
      </div>
      {iconsState.map(icon => (
        <div
          key={icon.id}
          className={styles.icon}
          style={{ left: `${icon.x}%`, top: `${icon.y}%` }}
        >
          {icon.data.element}
        </div>
      ))}
      {!gameRunning && !collision && (
        <div className={styles.start} onClick={startGame}>
          {t('gameScreen.tapToStart')}
        </div>
      )}
      {collision && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <p>{t('gameScreen.gameOver')}</p>
            <p>{t('gameScreen.score')}: {score}</p>
            <p>{t('gameScreen.missed', { platform: collision.data.name })}</p>
            <div>
              <button onClick={visit}>{t('gameScreen.ok')}</button>
              <button onClick={closeModal}>{t('gameScreen.cancel')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
