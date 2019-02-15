import React from 'react';

const  FaceRecognition = ({imageURL}) => {
    if(imageURL !== '') {
        return (
            <div className='center ma'>
            <div className='absolute mt2'>
                <img src={imageURL} alt='image' width='500px' height='auto' /> 
            </div>
        </div>
        );
    } else {
        return null;
    }
}

export default FaceRecognition;