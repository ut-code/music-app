import styles from "./Slider.module.css"

interface Props {
  min: number
  max: number
  step: number
  name: string
  description: string
  value: number
  onChange: (value: number) => void
}

export default function Slider(props: Props): JSX.Element {
  const bulletPosition = (props.value / 200) * 578

  return (
    <>
      {/* <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div style={{ width: "100%" }}>
        <input
          type="range"
          className={styles.range}
          min={props.min}
          max={props.max}
          step={props.step}
          value={props.value}
          onChange={(changeEvent) => props.onChange(+changeEvent.target.value)}
        />
        {props.value}
      </div> */}
      <div className={styles.container}>
        <div className={styles.rangeSlider}>
          <span id="rs-bullet" className={styles.rsLabel} style={{ left: `${bulletPosition}px` }}>
            {props.value}
            <span className={styles.unit}>kg</span>
          </span>
          <input
            id="rs-range-line"
            className={styles.rsRange}
            type="range"
            value={props.value}
            min="0"
            max="200"
            onChange={(changeEvent) => props.onChange(+changeEvent.target.value)}
          />
        </div>

        <div className={styles.boxMinMax}>
          <span>0</span>
          <span>200</span>
        </div>
      </div>
    </>
  )
}
