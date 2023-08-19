// import RangeSlider from "react-bootstrap-range-slider"

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
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div style={{ width: "100%" }}>
        <input
          type="range"
          className="rs-range"
          min={props.min}
          max={props.max}
          step={props.step}
          onChange={(changeEvent) => props.onChange(+changeEvent.target.value)}
        />
        {props.value}
      </div>
    </>
  )
}
