import React from 'react';
import classes from './imageDisplay.module.css';

type Image = {
  url: string;
  alt: string;
};

interface Iprops {
  images: Image[];
}

const ImageDisplay: React.FC<Iprops> = ({ images }) => {
  return (
    <div className={classes.wrapper}>
      {images.map((image, index) => {
        return (
          <div key={index} className={classes.imageContainer}>
            <img src={image.url} alt={image.alt} className={classes.image} />
            <p className={classes.alt}>{image.alt}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ImageDisplay;
