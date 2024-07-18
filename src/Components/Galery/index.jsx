import React, { useState } from 'react';
import '../Galery/index.css';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      <div className="images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`imgage ${index}`}
            onClick={() => handleImageClick(image)}
            className="image"
          />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={handleCloseClick}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" />
            <button onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
