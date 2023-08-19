import styles from "./SongList.module.css"

export type SongData = {
  id: string
  order: string
  name: string
  url: string
  time: number
}

export default function SongList(props: SongData) {
  return (
    <div className={styles.songList}>
      <div className={styles.container}>
        <div className={styles.order}>{props.order}</div>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.artistTime}>
          {props.url}・{props.time}
        </div>
      </div>
    </div>
  )
}
