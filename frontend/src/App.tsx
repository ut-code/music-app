import { useState } from 'react'
import PushButton, {SendingData} from "./components/PushButton.tsx"
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
  const [ ErrValue, setErrState ] = useState<number>(0.1);



  const getData : ()=>SendingData = ()=>{
    const data:SendingData = {
      tempo:TempoValue,
      energy:EnergyValue,
      speech:SpeechValue,
      valence:ValenceValue,
      mode:ModeValue,
      err:ErrValue
    }
    return data;
  }




  return (
    <>

    {/* スライダー群 */}
    <MySlider name="Tempo" value={TempoValue} onChange={setTempoState} min={1} max={999} step={1}/>
    <br></br>
    <MySlider name="Energy" value={EnergyValue} onChange={setEnergyState} min={0} max={1} step={0.01}/>
    <br></br>
    <MySlider name="Speech" value={SpeechValue} onChange={setSpeechState} min={0} max={1} step={0.01}/>
    <br></br>
    <MySlider name="Valence" value={ValenceValue} onChange={setValenceState}  min={0} max={1} step={0.01} />
    <br></br>
    <MySlider name="Mode" value={ModeValue} onChange={setModeState}  min={0} max={1} step={1}/>
    <br></br>
    <MySlider name="Err" value={ErrValue} onChange={setErrState}  min={0} max={1} step={0.01}/>

    {/* 決定ボタン */}
    <PushButton getter={getData} />


    </>
  );

  
}

