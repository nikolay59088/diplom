import React from 'react'
import './Upload.scss'
import * as PropTypes from 'prop-types'
import DragFile from '../DragFile/DragFile'


const Upload = ({ label, onDrop, data }) =>{


  const onDrag = (e) =>{
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.dropEffect = 'copy'
  }

  return(
    <div draggable={true} className='uploadContainer'>
      <p>{label}</p>
      <div onDrop={onDrop} onDragOver={onDrag} className='upload-zone'>

        {
          data.length ? data.map((file, index) =>{
            return <DragFile file={file} key={index}/>
          }) : <p>Drag files to upload</p>
        }

      </div>
    </div>)
}

Upload.propTypes = {
  label: PropTypes.string,
  onDrop: PropTypes.func,
  data: PropTypes.array
}

export default Upload