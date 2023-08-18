import RangeSlider from "react-bootstrap-range-slider"

type SliderVal = {
  min: number
  max: number
  step: number
  name: string
  description: string
  value: number
  onChange: (value: number) => void
}

export default function MySlider(props: SliderVal): JSX.Element {
  return (
    <>
      <span>
        <span>
          <div className={"slider-title"}>{props.name}</div>
          <div className={"slider-description"}>{props.description}</div>
        </span>
        <RangeSlider
          value={props.value}
          onChange={(changeEvent) => props.onChange(+changeEvent.target.value)}
          min={props.min}
          max={props.max}
          step={props.step}
        />
      </span>
    </>
  )
}
