import styles from "./OpenSpotifyButton.module.css"
import linkIcon from "./link.svg"

interface Props {
  url: string
}

export default function PushButton(props: Props): JSX.Element {
	const handleOpenSpotify = () => {
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
