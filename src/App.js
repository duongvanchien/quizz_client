import "./App.scss";
import {Main} from "./screens/main";
import {Game} from "./screens/game";
import {useEffect} from "react";
import Audio from "./assets/audio.mp3";

function App() {
  // return <Main />;
  return (
    <>
      <audio autoplay>
        <source src={Audio} type='audio/ogg' />
        <source src={Audio} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <Game />
    </>
  );
}

export default App;
