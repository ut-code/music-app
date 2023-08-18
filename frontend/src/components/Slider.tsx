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
      <h3>{props.name}</h3>
      <div className={"slider-description"}>{props.description}</div>
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
