import "./App.scss";
import {Main} from "./screens/main";
import {Game} from "./screens/game";
import {useEffect} from "react";

function App() {
  // return <Main />;
  return (
    <>
      <iframe
        src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
        allow='autoplay'
        style={{display: "none"}}
      ></iframe>
      <audio
        src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
        type='audio/mp3'
        autoPlay
      />
      <Game />
    </>
  );
}

export default App;
