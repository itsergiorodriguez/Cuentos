import  { useState} from 'react';
import useSound from 'use-sound';
import Bach from '../../assets/musica/Bach.mp3';
import './Player.css';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(Bach);

  const handleToggle = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <button
        className={`player-button ${isPlaying ? 'playing' : 'paused'}`}
        onClick={handleToggle}
      >
        {isPlaying ? 'Pausar' : 'Sonar'} 🎶
      </button>
    </div>
  );
};

export default Player;
