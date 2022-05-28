import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import style from './modal.module.css'

const modalRoot = document.getElementById("modal-root"); 

class Modal extends Component {

    componentDidMount () {
        document.addEventListener('keydown', this.closeModal)
    };

    componentWillUnmount () {
        document.removeEventListener('keydown', this.closeModal)
    }

    closeModal = evt => {
        const { close } = this.props
        if(evt.code === "Escape") {
            close();
            return;
        }
        if(evt.target === evt.currentTarget) {
            close();
        }
    }

    render () {
        const {closeModal} = this
        const {children} = this.props
        return createPortal(
            <div className={style.overlay} onClick={closeModal}>
                <div className={style.modal}>
                    {children}
                </div>
            </div>, modalRoot
        )
    }
}

Modal.propTypes = {
    close: PropTypes.func.isRequired,
    children:PropTypes.node.isRequired
}

export default Modal;