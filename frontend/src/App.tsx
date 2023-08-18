import { useState } from 'react'
import "./App.css"
import React from "react"
import MySlider from './components/RangeSlider.tsx';


/* Components */
import SongList from "./components/SongList/SongList"


export default function App(){

  const [ TempoValue, setTempoState ] = useState<number>(120); 
  const [ EnergyValue, setEnergyState ] = useState<number>(0); 
  const [ SpeechValue, setSpeechState ] = useState<number>(0); 
  const [ ValenceValue, setValenceState ] = useState<number>(0); 
  const [ ModeValue, setModeState ] = useState<number>(0);

  return (
    <>
    <MySlider name="Tempo" value={TempoValue} onChange={setTempoState} min={1} max={999} step={1}/>
    <br></br>
    <MySlider name="Energy" value={EnergyValue} onChange={setEnergyState} min={0} max={1} step={0.01}/>
    <br></br>
    <MySlider name="Speech" value={SpeechValue} onChange={setSpeechState} min={0} max={1} step={0.01}/>
    <br></br>
    <MySlider name="Valence" value={ValenceValue} onChange={setValenceState}  min={0} max={1} step={0.01} />
    <br></br>
    <MySlider name="Mode" value={ModeValue} onChange={setModeState}  min={0} max={1} step={1}/>
    </>
  );

  
}

// function App() {
//   return (
//     // <div className="App">
//     //   <div className="container">
//     //     <div className="tempo">tempo</div>
//     //     <div className="energy">energy</div>
//     //     <div className="mode">mode</div>
//     //     <div className="speech">speech</div>
//     //     <div className="valence">valence</div>
//     //     <div className="howToUse">how to use</div>
//     //     <div className="push">push</div>
//     //     <div className="playlist">
//     //       <h1>playlist</h1>
//     //       <SongList order={"01"} name={"アイドル"} artist={"YOASOBI"} time={0} />
//     //       <SongList order={"02"} name={"青のすみか"} artist={"キタニタツヤ"} time={0} />
//     //       <SongList order={"03"} name={"怪獣の花唄"} artist={"Vaundy"} time={0} />
//     //     </div>
//     //   </div>
//     // </div>



//   )
// }

//export default App
