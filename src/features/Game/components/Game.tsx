import { useEffect, useRef, useState } from 'react';
import { GithubLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react';
import styles from '../styles/Game.module.css';

interface FallingIcon {
  id: number;
  left: number;
  url: string;
  Element: JSX.Element;
  cut: boolean;
}

const icons = [
  { Element: <LinkedinLogo size={32} />, url: 'https://www.linkedin.com/in/hllbr/' },
  { Element: <GithubLogo size={32} />, url: 'https://github.com/hllbr' },
  { Element: <YoutubeLogo size={32} />, url: 'https://www.youtube.com/@platonfarkndapaylasmlar637' },
  { Element: <TwitterLogo size={32} />, url: 'https://twitter.com' },
];

const Game = () => {
  const [falling, setFalling] = useState<FallingIcon[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFalling((prev) => [
        ...prev,
        {
          id: idRef.current++,
          left: Math.random() * 90,
          url: icons[idRef.current % icons.length].url,
          Element: icons[idRef.current % icons.length].Element,
          cut: false,
        },
      ]);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const handleCut = (id: number) => {
    setFalling((prev) => prev.map((f) => (f.id === id ? { ...f, cut: true } : f)));
  };

  const handleAnimationEnd = (icon: FallingIcon) => {
    setFalling((prev) => prev.filter((f) => f.id !== icon.id));
    if (!icon.cut) {
      window.open(icon.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={styles.container}>
      {falling.map((icon) => (
        <div
          key={icon.id}
          className={`${styles.icon} ${icon.cut ? styles.cut : ''}`}
          style={{ left: `${icon.left}%` }}
          onClick={() => handleCut(icon.id)}
          onAnimationEnd={() => handleAnimationEnd(icon)}
        >
          {icon.Element}
        </div>
      ))}
    </div>
  );
};

export default Game;
