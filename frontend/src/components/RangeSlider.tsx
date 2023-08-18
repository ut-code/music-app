import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';



type SliderVal = {
  min:number;
  max:number;
  step:number;
  name:string;
  value: number;
  onChange: (value: number) => void;
};

export default function MySlider(props:SliderVal):JSX.Element{


  return (
    <>
    <span>
    <div>{props.name}</div>
    <RangeSlider
      value={props.value}
      onChange={changeEvent => props.onChange(+changeEvent.target.value)}
      min={props.min}
      max={props.max}
      step={props.step}
    />
    </span>

    </>
  );

}
