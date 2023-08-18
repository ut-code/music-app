import React, { useState, useRef } from 'react';
import './RangeSlider.css'; // スタイリングを適用するためのCSSファイル

interface RangeSliderProps {
  minValue: number;
  maxValue: number;
  initialMinValue: number;
  initialMaxValue: number;
  onValuesChange: (minValue: number, maxValue: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  minValue,
  maxValue,
  initialMinValue,
  initialMaxValue,
  onValuesChange,
}) => {
  const [minKnobValue, setMinKnobValue] = useState(initialMinValue);
  const [maxKnobValue, setMaxKnobValue] = useState(initialMaxValue);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleKnobMouseDown = (event: React.MouseEvent<HTMLDivElement>, knob: 'min' | 'max') => {
    if (sliderRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const mouseOffsetX = event.clientX - sliderRect.left;

      const handleMouseMove = (event: MouseEvent) => {
        const newKnobValue = Math.min(
          maxValue,
          Math.max(minValue, Math.round(((event.clientX - sliderRect.left) / sliderRect.width) * maxValue))
        );

        if (knob === 'min') {
          setMinKnobValue(newKnobValue);
          if (newKnobValue > maxKnobValue) {
            setMaxKnobValue(newKnobValue);
          }
          onValuesChange(newKnobValue, maxKnobValue);
        } else {
          setMaxKnobValue(newKnobValue);
          if (newKnobValue < minKnobValue) {
            setMinKnobValue(newKnobValue);
          }
          onValuesChange(minKnobValue, newKnobValue);
        }
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  return (
    <div className="range-slider" ref={sliderRef}>
      <div
        className="range-bar"
        style={{
          left: `${(minKnobValue / maxValue) * 100}%`,
          width: `${((maxKnobValue - minKnobValue) / maxValue) * 100}%`,
        }}
      />
      <div
        className="knob min-knob"
        style={{ left: `${(minKnobValue / maxValue) * 100}%` }}
        onMouseDown={(e) => handleKnobMouseDown(e, 'min')}
      />
      <div
        className="knob max-knob"
        style={{ left: `${(maxKnobValue / maxValue) * 100}%` }}
        onMouseDown={(e) => handleKnobMouseDown(e, 'max')}
      />
    </div>
  );
};

export default RangeSlider;
