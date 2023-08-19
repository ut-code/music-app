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
    // // keyを全部みる
    // if (json.length !== 0) {
    //   const keys = Object.keys(json[0])
    //   console.log(keys)
    // }
    // SongData型に直す
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const songs: SongData[] = json.map((song: any, index: number) => {
      return {
        order: String(index + 1),
        artist: song.artist,
        music_id: song.music_id,
        time: song.duration_ms,
        name: song.song_name,
      }
    })
    props.setSongsValue(songs)
  }  

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={() => onClick(props.getter())} className={styles.button013}>
        PUSH
      </button>
    </div>
  )
}
