import React from 'react';
import './FaceRecognition.css';

const  FaceRecognition = ({imageURL, box}) => {
    if(imageURL !== '') {
        return (
            <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' src={imageURL} alt='faces_to_detect' width='500' height='auto' /> 
                <div 
                    className='bounding-box' 
                    style={{ 
                        top: box.topRow,
                        right: box.rightCol, 
                        bottom: box.bottomRow, 
                        left: box.leftCol, 
                    }} />
            </div>
        </div>
        );
    } else {
        return null;
    }
}

export default FaceRecognition;