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
  // const bulletPosition = (props.value / 200) * 578

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className={styles.container}>
        <div className={styles.rangeSlider}>
          <input
            id="rs-range-line"
            className={styles.rsRange}
            type="range"
            value={props.value}
            min={props.min}
            max={props.max}
            step={props.step}
            onChange={(changeEvent) => props.onChange(+changeEvent.target.value)}
          />
        </div>
        <p>{props.value}</p>
      </div>
    </>
  )
}
