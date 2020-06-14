import React, { useRef, useState, useEffect } from 'react'
import { MdVideoLibrary } from 'react-icons/md'

import {
    ContainerIcon,
    UploadMedia
} from './styles'

//   hide native input file cause it\'s very limited to customiza this css.
//   the css style used is in ContainerIcon and only the upload function is used from UploadMedia  
function InputUpload() {
    const [file, setFile] = useState({
        fileType: '',
        fileName: '',
        file: {}
    })

    const uploadImageRef = useRef(null)
    const uploadImageClick = () => {
        //call click from hidden native input file
        uploadImageRef.current.click()
    }

    const onChangeUploadImage = (e) => {
        if (!e.target.files.length > 0) return false
        setFile({
          fileType: 'image',
          fileName: e.target.files[0].name,
          file: e.target.files[0]
        })
        // dispatch(uploadMediaRequest(e.target.files[0], 'video'))
    }

    return (
        <>
            <ContainerIcon onClick={() => uploadImageClick()}>
                <MdVideoLibrary size={27} color='#fff' />
                <UploadMedia 
                    ref={uploadImageRef} 
                    type='file' 
                    onChange={onChangeUploadImage} 
                    accept='.png'
                    data-testid='image-upload' 
                />
            </ContainerIcon>
            <span>{file.fileName}</span>
        </>
    )
}

export default InputUpload