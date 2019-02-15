import React from 'react';
import './ImgLinkForm.css';

const ImgLinkForm = ({onInputChange, onBtnSubmit}) => {
    return (
        <div>
            <p className='center f3'>
                { 'This magic brain detect faces on images. Just give it a try.' }
            </p>
            <div className='form center'>
                <div className='center pa4 br3 shadow-5'> 
                    <input type='text' className='f4 pa2 w-70 center' onChange={ onInputChange } />
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={ onBtnSubmit }
                    >
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImgLinkForm;