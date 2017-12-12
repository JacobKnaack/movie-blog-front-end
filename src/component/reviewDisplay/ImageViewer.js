import React from 'react';

const ImageViewer = ({ imgSrc, alt }) => {

  return (
    <div className='imageViewer'>
      <img
        src={imgSrc}
        className='reviewImg'
        alt={alt}
      />
      <p className='reviewImg-credit'><span>Image Credit:</span> {imgSrc}</p>
      <p className='reviewImg-description'>{alt}</p>
    </div>
  )

}

export default ImageViewer;
