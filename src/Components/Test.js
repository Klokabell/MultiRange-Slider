import React, { useEffect, useRef } from 'react';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

function TestSlider({ enabled, initialValue }) {
    const sliderRef = useRef(null);
  
    useEffect(() => {
      const slider = noUiSlider.create(sliderRef.current, {
        start: initialValue,
        range: {
          min: 6,
          max: 24,
        },
        // Additional configuration options
      });
  
      if (enabled) {
        slider.enable();
      } else {
        slider.disable();
      }
  
      return () => {
        slider.destroy();
      };
    }, [enabled, initialValue]);
  
    return <div ref={sliderRef} />;
  }

export default TestSlider