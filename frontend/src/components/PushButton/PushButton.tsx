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
}

export default function PushButton(props: ButtonProp): JSX.Element {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={() => onClick(props.getter())} className={styles.button013}>
        PUSH
      </button>
    </div>
  )
}

async function onClick(data: SendingData) {
  //const json:string = JSON.stringify(data);
  const url =
    "url" +
    `?tempo=${data.tempo}&energy=${data.energy}&speech=${data.speech}&valence=${data.valence}&mode=${data.mode}&
    tolerance=${data.tolerance}`

  // let response: any
  await fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      // let response = data
    })
}
