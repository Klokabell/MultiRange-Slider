import React, { useEffect, useRef, useState } from 'react';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import '../Styling/sliderstyle.css';
import wNumb from 'wnumb';

function MultiRangeSlider(props) {
  const sliderRef = useRef(null);
  const [sliderValues, setSliderValues] = useState(props.initialValue);



  useEffect(() => {
    const slider = noUiSlider.create(sliderRef.current, {
      start:  sliderValues,
      connect: [false, true, false, true, false],
      range: {
        min: 6,
        max: 24,
      },
      margin: 1,
      step: 1,
      pips: { mode: 'steps', density: 1 },
      tooltips: [
        wNumb({ decimals: 0 }),
        wNumb({ decimals: 0 }),
        wNumb({ decimals: 0 }),
        wNumb({ decimals: 0 }),
      ],
    });





    if (props.enabled) {
      slider.on('update', (values) => {
        setSliderValues(values)
      })
      sliderRef.current.noUiSlider.enable();
    } else {
      slider.off('update');
      sliderRef.current.noUiSlider.disable();
    }

    return () => {
      slider.destroy();
    };
  }, [props.initialValue, props.enabled]);

  return <div ref={sliderRef} className={`slider-styled ${props.enabled ? '' : 'disabled'}`} id="slider-round" />;
}

export default MultiRangeSlider;
