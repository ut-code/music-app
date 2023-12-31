import styles from "./SongList.module.css"

export type SongData = {
  order: string
  name: string
  url: string
  time: number
  artist: string
}

export default function SongList(props: SongData) {
  return (
    <div className={styles.songList}>
      <div className={styles.container}>
        <div className={styles.order}>{props.order}</div>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.artistTime}>
          {props.artist}・{props.time}
        </div>
      </div>
    </div>
  )
}
