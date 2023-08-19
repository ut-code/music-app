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
				<p className="h4">Spotifyで再生する</p>
				<img src={linkIcon} alt="link" style={{ marginLeft: "20px" }} />
				</div>
			</button>
    </>
  )
}
