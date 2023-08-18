import { useState } from "react"
import PushButton, { SendingData } from "./components/PushButton.tsx"
import "./App.css"
import MySlider from "./components/RangeSlider.tsx"
// import RangeSlider2 from "./components/RangeSlider2.tsx"

/* Components */
import SongList, { SongData } from "./components/SongList/SongList"

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
    { order: "1", name: "ドラえもん", url: "http://localhost:3000", time: 120 },
    { order: "2", name: "ドラえもん", url: "http://localhost:3000", time: 120 },
    { order: "3", name: "ドラえもん", url: "http://localhost:3000", time: 120 },
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
      {/* スライダー群 */}
      <div id="parameter-sliders" style={{ display: "flex" }}>
        <div>
          <MySlider
            name="Tempo"
            value={TempoValue}
            onChange={setTempoState}
            min={1}
            max={999}
            step={1}
            description="曲のBPM (テンポ) を表します。(1-999)"
          />
          <div style={{ display: "flex" }}>
            <div>
              <MySlider
                name="Energy"
                value={EnergyValue}
                onChange={setEnergyState}
                min={0}
                max={1}
                step={0.01}
                description="曲のエネルギッシュさを表します。(0-1)"
              />
              <MySlider
                name="Speech"
                value={SpeechValue}
                onChange={setSpeechState}
                min={0}
                max={1}
                step={0.01}
                description="曲に歌がどの程度入っているかを表します。(0-1)"
              />
              <MySlider
                name="Valence"
                value={ValenceValue}
                onChange={setValenceState}
                min={0}
                max={1}
                step={0.01}
                description="曲のネガティブさ、ポジティブさを表します。(N 0-1 P)"
              />
            </div>
            <div>
              <MySlider
                name="Mode"
                value={ModeValue}
                onChange={setModeState}
                min={0}
                max={1}
                step={1}
                description="曲が長調(1)か短調(0)かを表します。"
              />
              {/* <MySlider
                  name="Err"
                  value={ErrValue}
                  onChange={setErrState}
                  min={0}
                  max={1}
                  step={0.01}
                  description="指定した値からのずれをどの程度許容するかを表します。"
                /> */}
              <PushButton getter={getData} />
            </div>
          </div>
        </div>
      </div>

      <div className="playlist">
        <h1>playlist</h1>
        {SongsValue.map((song) => (
          <SongList key={song.order} order={song.order} name={song.name} url={song.url} time={song.time} />
        ))}
      </div>
    </>
  )
}
