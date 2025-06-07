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
  { name: 'GitHub', url: 'https://github.com/hllbr', icon: <GithubLogo size={60} /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hllbr/', icon: <LinkedinLogo size={60} /> },
  { name: 'WhatsApp', url: 'https://wa.me/905522972185', icon: <WhatsappLogo size={60} /> },
  { name: 'YouTube', url: 'https://www.youtube.com/@platonfarkndapaylasmlar637', icon: <YoutubeLogo size={60} /> },
  { name: 'Email', url: 'mailto:halibrahim.kocak@gmail.com', icon: <EnvelopeSimple size={60} /> },
  { name: 'WakaTime', url: 'https://wakatime.com/@HLLBR', icon: <Timer size={60} /> },
];

const PLAYER_SIZE = 64;
const ICON_SIZE = 60;
const ICONS_ON_SCREEN = 4; // 3-5 arası, ortalama 4
const SPAWN_INTERVAL = 500; // ms, daha sık
const BASE_SPEED = 4; // daha hızlı başlasın

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
    if (iconsRef.current.length >= ICONS_ON_SCREEN) return; // Ekranda max ikon
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.random() * (rect.width - ICON_SIZE);
    const speed = BASE_SPEED + score / 15; // daha hızlı
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
      spawnRef.current = setInterval(spawnIcon, SPAWN_INTERVAL);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (spawnRef.current) clearInterval(spawnRef.current);
    };
  }, [gameStarted, playerX]);

  // --- YENİ: Klavye ile hareket ---
  useEffect(() => {
    if (!gameStarted) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      setPlayerX(prev => {
        if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
          return Math.max(0, prev - 5);
        }
        if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
          return Math.min(100, prev + 5);
        }
        return prev;
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStarted]);

  // --- YENİ: Mouse hover ile hareket ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setPlayerX(Math.min(100, Math.max(0, x)));
  };

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

  const getCrashMessage = (icon: FallingIcon) => {
    switch (icon.name) {
      case 'LinkedIn':
        return t('gameScreen.crashedLinkedIn');
      case 'WhatsApp':
        return t('gameScreen.crashedWhatsApp');
      case 'YouTube':
        return t('gameScreen.crashedYouTube');
      case 'Email':
        return t('gameScreen.crashedEmail');
      case 'WakaTime':
        return t('gameScreen.crashedWakaTime');
      case 'GitHub':
        return t('gameScreen.crashedGitHub');
      default:
        return t('gameScreen.crashed', { platform: icon.name });
    }
  };

  const getOkButtonText = (icon: FallingIcon) => {
    switch (icon.name) {
      case 'LinkedIn':
        return t('gameScreen.okLinkedIn');
      case 'WhatsApp':
        return t('gameScreen.okWhatsApp');
      case 'YouTube':
        return t('gameScreen.okYouTube');
      case 'Email':
        return t('gameScreen.okEmail');
      case 'WakaTime':
        return t('gameScreen.okWakaTime');
      case 'GitHub':
        return t('gameScreen.okGitHub');
      default:
        return t('gameScreen.ok');
    }
  };

  const visitIcon = () => {
    if (gameOverIcon) {
      switch (gameOverIcon.name) {
        case 'WhatsApp':
          window.open('https://wa.me/905522972185', '_blank', 'noopener,noreferrer');
          break;
        case 'LinkedIn':
          window.open('https://www.linkedin.com/in/hllbr/', '_blank', 'noopener,noreferrer');
          break;
        case 'YouTube':
          window.open('https://www.youtube.com/@platonfarkndapaylasmlar637', '_blank', 'noopener,noreferrer');
          break;
        case 'Email':
          window.open('mailto:halibrahim.kocak@gmail.com', '_blank', 'noopener,noreferrer');
          break;
        case 'WakaTime':
          window.open('https://wakatime.com/@HLLBR', '_blank', 'noopener,noreferrer');
          break;
        case 'GitHub':
          window.open('https://github.com/hllbr', '_blank', 'noopener,noreferrer');
          break;
        default:
          window.open(gameOverIcon.url, '_blank', 'noopener,noreferrer');
      }
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
      onMouseMove={handleMouseMove} // Mouse hover ile hareket
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
          <div className={styles.fallingAnim}>
            {icon.icon}
          </div>
        </div>
      ))}
      <div
        className={styles.player}
        style={{ left: `${playerX}%`, width: PLAYER_SIZE, height: PLAYER_SIZE }}
      >
        {!gameOverIcon && (
          <span className={styles.rocketFire}></span>
        )}
        <Rocket size={PLAYER_SIZE - 8} color="#38bdf8" weight="fill" />
      </div>
      {gameOverIcon && (
        <div className={styles.overlay} onClick={closeModal}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <p>{getCrashMessage(gameOverIcon)}</p>
            <p>{t('gameScreen.score')}: {score}</p>
            <div className={styles.modalButtons}>
              <button onClick={visitIcon}>{getOkButtonText(gameOverIcon)}</button>
              <button onClick={closeModal}>{t('gameScreen.cancel')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
