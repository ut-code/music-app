import styles from '../styles/songList.module.css';

export default function SongList(props: { order: string, name: string, artist: string, time: number }) {
    return (
        <div className={styles.songList}>
            <div className={styles.container}>
                <div className={styles.order}>{props.order}</div>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.artistTime}>{props.artist}・{props.time}</div>
            </div>
        </div>
    );
}