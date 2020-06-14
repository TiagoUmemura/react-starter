import React, {useRef} from 'react'

import { useOnClickOutside } from 'hooks/hooks'
import { 
    Container,
    ModalWindow 
} from './styles'

function Modal({ onClickClose }) {
    const modalWindowRef = useRef(null)
    useOnClickOutside(modalWindowRef, onClickClose)

    return (
        <Container>
            <ModalWindow ref={modalWindowRef}>
                <span>Test</span>
                <div onClick={onClickClose}>
                    <span>Close</span>
                </div>
            </ModalWindow>
        </Container>
    );
}

export default Modal;