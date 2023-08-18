import { useEffect, useState } from "react"
import styles from "./SongList.module.css"
import Music from "../../api/musicType"
import { getAllMusic } from "../../api/getAllMusic"

export type SongData = {
  order: string
  name: string
  url: string
  time: number
}

export default function SongList(props: SongData) {
  const [musicData, setMusicData] = useState<Music[]>([])

  useEffect(() => {
    async function tmp(){
      return await getAllMusic()
    }
    tmp().then((music)=>{
      setMusicData(music)
    })
  }, [])

  return (
    <div className={styles.songList}>
      <div className={styles.container}>
        <div className={styles.order}>{props.order}</div>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.artistTime}>
          {props.url}・{props.time}・{JSON.stringify(musicData)}
        </div>
      </div>
    </div>
  )
}
