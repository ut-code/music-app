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
  function msToMinSec(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    // パディングを追加して2桁にする（例： "01"）
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');
  
    return `${paddedMinutes}:${paddedSeconds}`;
  }

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
        time: msToMinSec(song.duration_ms),
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
