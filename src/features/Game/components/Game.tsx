import { useEffect, useRef, useState } from 'react';
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
  WhatsappLogo,
  PhoneCall,
  EnvelopeSimple,
  Timer,
  Pause,
  Play
} from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Game.module.css';

const animations = ['fall', 'fallRotate', 'fallSpin', 'fallColor'];

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

const encodedPhone = 'OTA1NTIyOTcyMTg1';
const decodedPhone = () => atob(encodedPhone);

const icons = [
  { name: 'Call', Element: <PhoneCall size={64} />, url: `tel:${decodedPhone()}` },
  { name: 'WhatsApp', Element: <WhatsappLogo size={64} />, url: `https://wa.me/${decodedPhone()}` },
  { name: 'LinkedIn', Element: <LinkedinLogo size={64} />, url: 'https://www.linkedin.com/in/hllbr/' },
  { name: 'Email', Element: <EnvelopeSimple size={64} />, url: 'mailto:halibrahim.kocak@gmail.com' },
  { name: 'GitHub', Element: <GithubLogo size={64} />, url: 'https://github.com/hllbr' },
  { name: 'YouTube', Element: <YoutubeLogo size={64} />, url: 'https://www.youtube.com/@platonfarkndapaylasmlar637' },
  { name: 'WakaTime', Element: <Timer size={64} />, url: 'https://wakatime.com/@HLLBR' },
  { name: 'Twitter', Element: <TwitterLogo size={64} />, url: 'https://twitter.com' },
];

/**
 * Simple falling icons game built for fun.
 */
const Game = () => {
  const { t } = useTranslation();
  const [falling, setFalling] = useState<FallingIcon[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOverIcon, setGameOverIcon] = useState<FallingIcon | null>(null);
  const [paused, setPaused] = useState(false);
  const [duration, setDuration] = useState(4);
  const [delay, setDelay] = useState(1200);
  const [congrats, setCongrats] = useState(false);
  const idRef = useRef(0);
  const cutAnimations = [
    'cut',
    'cutBlood',
    'cutWind',
    'cutFade',
    'cutFlip',
    'cutExplode',
    'cutSlice'
  ];

  useEffect(() => {
    if (!gameStarted || gameOverIcon || paused) return;
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
    }, delay);
    return () => clearInterval(interval);
  }, [gameStarted, gameOverIcon, paused, delay]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'p') {
        setPaused(p => !p);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleCut = (id: number, el: HTMLDivElement) => {
    const anim = cutAnimations[Math.floor(Math.random() * cutAnimations.length)];
    const matrix = new DOMMatrix(window.getComputedStyle(el).transform);
    const containerRect = el.parentElement?.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const posY = rect.top - (containerRect?.top ?? 0);
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
    setPaused(false);
    setGameStarted(true);
  };

  useEffect(() => {
    const level = Math.floor(score / 10);
    setDuration(Math.max(1.5, 4 - level * 0.4));
    setDelay(Math.max(400, 1200 - level * 100));
    if ([10, 25, 50, 75, 100].includes(score)) {
      setCongrats(true);
      const t = setTimeout(() => setCongrats(false), 1500);
      return () => clearTimeout(t);
    }
  }, [score]);

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
          <span>{t('gameScreen.score')}: {score}</span>
          <button className={styles.pauseBtn} onClick={() => setPaused(p => !p)}>
            {paused ? <Play size={20} /> : <Pause size={20} />}
          </button>
        </div>
      )}
      {congrats && <div className={styles.congrats}>🎉</div>}
      {falling.map(icon => (
        <div
          key={icon.id}
          className={`${styles.icon} ${icon.cut ? styles[icon.cutAnimation] : styles[icon.animation]}`}
          style={{
            left: `${icon.left}%`,
            animationDuration: `${duration}s`,
            animationPlayState: paused ? 'paused' : 'running',
            ...(icon.cut
              ? {
                  '--ty': `${icon.posY ?? 0}px`,
                  '--rot': `${icon.rot ?? 0}deg`,
                }
              : {}),
          } as React.CSSProperties}
          onClick={e => !paused && handleCut(icon.id, e.currentTarget)}
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
