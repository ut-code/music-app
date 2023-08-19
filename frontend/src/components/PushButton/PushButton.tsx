import { SongData } from "../SongList/SongList"
import styles from "./PushButton.module.css"
import { API_BASE_ENDPOINT } from "../../utils/endpoints"

export type SendingData = {
  tempo: number
  energy: number
  speech: number
  valence: number
  mode: number
  tolerance: number
}

interface Props {
  getter: () => SendingData
  setSongsValue: (SongsValue: SongData[]) => void
}

export default function PushButton(props: Props): JSX.Element {
  async function onClick(data: SendingData) {
    const url = `${API_BASE_ENDPOINT}/api/songs?tempo=${data.tempo}&energy=${data.energy}&speech=${
      data.speech
    }&valence=${data.valence}&mode=${data.mode}`
    const response = await fetch(url)
    const json = await response.json()

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
