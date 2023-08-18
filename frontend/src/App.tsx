import { useState } from "react"
import "./App.css"

/* Components */
import SongList, { SongData } from "./components/SongList/SongList"
import PushButton, { SendingData } from "./components/PushButton/PushButton"
import Slider from "./components/Slider.tsx"
// import RangeSlider2 from "./components/RangeSlider2.tsx"

export default function App() {
  const [TempoValue, setTempoState] = useState<number>(120)
  const [EnergyValue, setEnergyState] = useState<number>(0)
  const [SpeechValue, setSpeechState] = useState<number>(0)
  const [ValenceValue, setValenceState] = useState<number>(0)
  const [ModeValue, setModeState] = useState<number>(0)
  const [ErrValue] = useState<number>(0.1)

  //range2のためのState
  // const [minValue, setMinState] = useState<number>(0.1)
  // const [maxValue, setMaxState] = useState<number>(0.2)

  const [SongsValue] = useState<SongData[]>([
    { order: "01", name: "ドラえもん", url: "http://localhost:3000", time: 120 },
    { order: "02", name: "ドラえもん", url: "http://localhost:3000", time: 120 },
    { order: "03", name: "ドラえもん", url: "http://localhost:3000", time: 120 },
  ])

  const getData: () => SendingData = () => {
    const data: SendingData = {
      tempo: TempoValue,
      energy: EnergyValue,
      speech: SpeechValue,
      valence: ValenceValue,
      mode: ModeValue,
      tolerance: ErrValue,
    }
    return data
  }

  return (
    <>
      <div className="container">
        <div className="tempo">
          <Slider
            name="Tempo"
            value={TempoValue}
            onChange={setTempoState}
            min={1}
            max={999}
            step={1}
            description="曲のBPM (テンポ) を表します。1-999"
          />
        </div>
        <div className="energy">
          <Slider
            name="Energy"
            value={EnergyValue}
            onChange={setEnergyState}
            min={0}
            max={1}
            step={0.01}
            description="曲のエネルギッシュさを表します。0-1"
          />
        </div>
        <div className="speech">
          <Slider
            name="Speech"
            value={SpeechValue}
            onChange={setSpeechState}
            min={0}
            max={1}
            step={0.01}
            description="曲に歌がどの程度入っているかを表します。0-1"
          />
        </div>
        <div className="valence">
          <Slider
            name="Valence"
            value={ValenceValue}
            onChange={setValenceState}
            min={0}
            max={1}
            step={0.01}
            description="曲のネガティブさ、ポジティブさを表します。0-1"
          />
        </div>
        <div className="mode">
          {/* <Slider
            name="Mode"
            value={ModeValue}
            onChange={setModeState}
            min={0}
            max={1}
            step={1}
            description="曲が長調(1)か短調(0)かを表します。0または1"
          /> */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <h3>Mode</h3>
            <p>曲が長調・短調を表します。0または1</p>
          </div>
          <div className="buttonContainer">
            <div className={`radio major`}>
              <input
                id="major"
                type="radio"
                name="mode"
                value={1}
                onChange={() => setModeState(1)}
                checked={ModeValue === 1}
              />
              <label htmlFor={"major"} className="label">長調</label>
            </div>
            <div className={`radio minor`}>
              <input
                id="minor"
                type="radio"
                name="mode"
                value={0}
                onChange={() => setModeState(0)}
                checked={ModeValue === 0}
              />
              <label htmlFor={"minor"} className="label">短調</label>
            </div>
            <div className={`radio whichever`}>
              <input
                id="whichever"
                type="radio"
                name="mode"
                value={-1}
                onChange={() => setModeState(-1)}
                checked={ModeValue === -1}
              />
              <label htmlFor={"whichever"} className="label">どちらでもいい</label>
            </div>
            ModeValue: {ModeValue}
          </div>
        </div>
        {/* <Slider
              name="Err"
              value={ErrValue}
              onChange={setErrState}
              min={0}
              max={1}
              step={0.01}
              description="指定した値からのずれをどの程度許容するかを表します。"
            /> */}
        <div className="howToUse">
          <h3>How to Use</h3>
          <p>
            Tempo, Energy, Speech,
            Valenceのひねりを変えたり、Modeのボタンを変え、PUSHボタンを押すと画面右にプレイリストが表示されます。これを使えば、その日の気分に合わせてプレイリストを自動作成することができます。
          </p>
        </div>
        <div className="push">
          <PushButton getter={getData} />
        </div>
        <div className="playlist">
          <h1 style={{ color: "#30A9DE", textAlign: "end", textDecoration: "underline" }}>Playlist</h1>
          {SongsValue.map((song) => (
            <SongList key={song.order} order={song.order} name={song.name} url={song.url} time={song.time} />
          ))}
        </div>
      </div>
    </>
  )
}
