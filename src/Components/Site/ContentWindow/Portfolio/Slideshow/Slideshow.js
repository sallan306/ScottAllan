import React from 'react';
import { Zoom } from 'react-slideshow-image';
import picture1 from '../../../../images/giraffe_negative.jpg';
import picture2 from '../../../../images/giraffe_pixel.jpg';
import picture3 from '../../../../images/giraffe_paint.jpg';
 
const images = [
  picture1,
  picture2,
  picture3
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.5,
  arrows: true
}
 
const Slideshow = () => {

    return (

      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{height: "100%", width: "100%"}} src={each} />)
        }
      </Zoom>
    )
}

export default Slideshow;