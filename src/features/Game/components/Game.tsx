import { useEffect, useRef, useState } from 'react';
import {
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
  YoutubeLogo,
  EnvelopeSimple,
  Timer,
  Rocket
} from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Game.module.css';

interface IconData {
  name: string;
  url: string;
  icon: JSX.Element;
}

interface FallingIcon extends IconData {
  id: number;
  x: number;
  y: number;
  speed: number;
}

const icons: IconData[] = [
  { name: 'GitHub', url: 'https://github.com/hllbr', icon: <GithubLogo size={32} /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hllbr/', icon: <LinkedinLogo size={32} /> },
  { name: 'WhatsApp', url: 'https://wa.me/905522972185', icon: <WhatsappLogo size={32} /> },
  { name: 'YouTube', url: 'https://www.youtube.com/@platonfarkndapaylasmlar637', icon: <YoutubeLogo size={32} /> },
  { name: 'Email', url: 'mailto:halibrahim.kocak@gmail.com', icon: <EnvelopeSimple size={32} /> },
  { name: 'WakaTime', url: 'https://wakatime.com/@HLLBR', icon: <Timer size={32} /> },
];

const PLAYER_SIZE = 48;
const ICON_SIZE = 40;

const Game = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [playerX, setPlayerX] = useState(50); // percentage
  const [falling, setFalling] = useState<FallingIcon[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOverIcon, setGameOverIcon] = useState<FallingIcon | null>(null);
  const nextId = useRef(0);
  const iconsRef = useRef<FallingIcon[]>([]);
  const animationRef = useRef<number>();
  const spawnRef = useRef<NodeJS.Timer>();
  const dragging = useRef(false);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    movePlayer(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragging.current) movePlayer(e);
  };

  const handlePointerUp = () => {
    dragging.current = false;
  };

  const movePlayer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setPlayerX(Math.min(100, Math.max(0, x)));
  };

  const spawnIcon = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.random() * (rect.width - ICON_SIZE);
    const speed = 2 + score / 20;
    const data = icons[Math.floor(Math.random() * icons.length)];
    const icon: FallingIcon = {
      ...data,
      id: nextId.current++,
      x,
      y: -ICON_SIZE,
      speed,
    };
    iconsRef.current.push(icon);
    setFalling([...iconsRef.current]);
  };

  const gameLoop = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    iconsRef.current = iconsRef.current.flatMap(icon => {
      const newY = icon.y + icon.speed;
      const playerXpx = (playerX / 100) * rect.width;
      const playerYpx = rect.height - PLAYER_SIZE;
      const collideX = Math.abs(playerXpx - icon.x) < (PLAYER_SIZE + ICON_SIZE) / 2;
      const collideY = Math.abs(playerYpx - newY) < (PLAYER_SIZE + ICON_SIZE) / 2;

      if (collideX && collideY && !gameOverIcon) {
        setGameOverIcon(icon);
        setGameStarted(false);
        return [];
      }

      if (newY > rect.height) {
        setScore(s => s + 1);
        return [];
      }

      return [{ ...icon, y: newY }];
    });
    setFalling([...iconsRef.current]);
    animationRef.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    if (gameStarted) {
      animationRef.current = requestAnimationFrame(gameLoop);
      spawnRef.current = setInterval(spawnIcon, 1000);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (spawnRef.current) clearInterval(spawnRef.current);
    };
  }, [gameStarted, playerX]);

  const startGame = () => {
    setScore(0);
    setPlayerX(50);
    iconsRef.current = [];
    setFalling([]);
    setGameOverIcon(null);
    nextId.current = 0;
    setGameStarted(true);
  };

  const closeModal = () => setGameOverIcon(null);

  const visitIcon = () => {
    if (gameOverIcon) {
      window.open(gameOverIcon.url, '_blank', 'noopener,noreferrer');
    }
    closeModal();
  };

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {!gameStarted && !gameOverIcon && (
        <div className={styles.startOverlay} onClick={startGame}>
          {t('gameScreen.tapToStart')}
        </div>
      )}
      <div className={styles.score}>{t('gameScreen.score')}: {score}</div>
      {falling.map(icon => (
        <div
          key={icon.id}
          className={styles.falling}
          style={{ left: icon.x, top: icon.y, width: ICON_SIZE, height: ICON_SIZE }}
        >
          {icon.icon}
        </div>
      ))}
      <div
        className={styles.player}
        style={{ left: `${playerX}%`, width: PLAYER_SIZE, height: PLAYER_SIZE }}
      >
        <Rocket size={PLAYER_SIZE - 8} />
      </div>
      {gameOverIcon && (
        <div className={styles.overlay} onClick={closeModal}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <p>{t('gameScreen.gameOver')}</p>
            <p>{t('gameScreen.score')}: {score}</p>
            <p>{t('gameScreen.crashed', { platform: gameOverIcon.name })}</p>
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
