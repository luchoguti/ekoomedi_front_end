import React from 'react';
import './modal.scss';

const Modal = (props) =>{
      return (
        <div id={props.id} className="modal">
            <div className="modal-content">
            <span className="close"  onClick={()=>{
                props.getListMenu();
                props.closeModal();
            }}>&times;</span>
                <div className="preloader"></div>
                <p><b>{props.text}</b></p>
            </div>
        </div>
    )
}

export default Modal;