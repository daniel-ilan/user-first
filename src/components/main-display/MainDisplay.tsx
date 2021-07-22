import { useState } from 'react';
import ImageDisplay from '../image-display/ImageDisplay';
import SearchBar from '../serach-bar/SearchBar';
import classes from './mainDisplay.module.css';

type Image = {
  url: string;
  alt: string;
};

const ImagesDisplay = () => {
  const [allImages, setAllImages] = useState<Image[]>([]);
  const [defaultImages, setDefaultImages] = useState<Image[]>([]);
  const [keyword, setKeyword] = useState('');
  window.addEventListener('message', function (event) {
    if (event.origin !== 'https://www.ikea.co.il') {
      return;
    }

    setAllImages(JSON.parse(event.data));
    setDefaultImages(JSON.parse(event.data));
  });

  const updateInput = async (input: string) => {
    const filtered = defaultImages.filter((image) => {
      return image.alt.toLowerCase().includes(input.toLowerCase());
    });
    setKeyword(input);
    setAllImages(filtered);
  };
  if (defaultImages.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.wrapper}>
      <SearchBar keyword={keyword} updateInput={updateInput} />
      <ImageDisplay images={allImages} />
    </div>
  );
};

export default ImagesDisplay;
