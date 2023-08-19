import { SongData } from "../SongList/SongList"
import styles from "./PushButton.module.css"

export type SendingData = {
  tempo: number
  energy: number
  speech: number
  valence: number
  mode: number
  tolerance: number
}

type ButtonProp = {
  getter: () => SendingData
  setSongsValue: (SongsValue: SongData[]) => void
}

export default function PushButton(props: ButtonProp): JSX.Element {
  async function onClick(data: SendingData) {
    const url = `${import.meta.env.VITE_API_ENDPOINT}/api/songs?tempo=${data.tempo}&energy=${data.energy}&speech=${data.speech}&valence=${data.valence}&mode=${data.mode}`
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    // props.setSongsValue()
  }  

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={() => onClick(props.getter())} className={styles.button013}>
        PUSH
      </button>
    </div>
  )
}
