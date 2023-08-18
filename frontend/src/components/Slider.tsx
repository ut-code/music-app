import RangeSlider from "react-bootstrap-range-slider"

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
      <RangeSlider
        value={props.value}
        onChange={(changeEvent) => props.onChange(+changeEvent.target.value)}
        min={props.min}
        max={props.max}
        step={props.step}
      />
    </>
  )
}
