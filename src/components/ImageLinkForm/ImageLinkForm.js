import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonClick}) => {
	return(
      <div>
      <p className='f3'>
      {'This magic Brain will detect faces in your picture. try it' }
            </p>
      <div className='center'>

      <div className='form center pa4 br2 shadow-5'>
      <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
      <button className='w-30 grow f4 link pv2 dib white bg-light-purple'
      onClick={onButtonClick}
      >Detect</button>
      </div>
      </div>
      </div>
		)
}


export default ImageLinkForm;