import "./styles.css";
import { useState } from 'react';
import { PlayArrow, Pause, SkipNext, SkipPrevious, Add, Remove } from '@material-ui/icons';

function PlayPauseButton() {
   //Using useToggle Hook
   const [toggle, setToggle] = useState(true);
   const handleClick = () => {
    setToggle(!toggle)
      };
   if (toggle) {
     return <PlayArrow onClick={handleClick} />
   } 
   else {
     return <Pause onClick={handleClick} />
   }
  }

export default function App() {
  const [volume, setVolume] = useState(5);
  let volumeCount = () => {
    setVolume(volume + 1);
    console.log(volume);
  };

  let decreaseVolume = () => {
    setVolume(volume - 1);
    console.log(volume);
  };

  const [track, setTrack] = useState(1);
  let trackCount = () => {
    setTrack(track + 1); 
    console.log(track);
     };
  let decreaseTrack = () => {
    setTrack(track - 1);
    console.log(track);
  };

  return (
    <div className="App">
      <h1>iPod Shuffle</h1>
      <h2>Genuine 4th Generation 2GB Silver</h2>
      <Remove onClick={decreaseVolume}/>
      <SkipPrevious onClick={decreaseTrack} />
      <PlayPauseButton />
      <SkipNext onClick={trackCount} />
      <Add onClick={volumeCount}/>
    </div>
  );
}
