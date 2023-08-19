import { SongData } from "../SongList/SongList"
import styles from "./OpenSpotifyButton.module.css"
import linkIcon from "./link.svg"

interface Props {
  url: string
  songData: SongData[]
}



export default function PushButton(props: Props): JSX.Element {


	const handleOpenSpotify = async () => {

		const ids = props.songData.map(m=>m.id);

		const url =`${import.meta.env.VITE_API_ENDPOINT}/api/create-playlist`;
		const jsonObj = JSON.stringify({"ids": ids});
		console.log(jsonObj);

		const response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: jsonObj,
		  })

		window.open(props.url, "_blank")
	}

  return (
    <>
			<button className={styles.button} onClick={handleOpenSpotify}>
				<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
				<h6>Spotifyで再生する</h6>
				<img src={linkIcon} alt="link" style={{ marginLeft: "20px" }} />
				</div>
			</button>
    </>
  )
}


