import React, {Fragment, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import fetchMenu from '../../redux/actions/menu.action';
import Modal from '../modal/modal';
import { closeModal } from '../../service/util';

const Menu = () =>{
    const dispatch = useDispatch()
    const getListMenu = useCallback(
      () => dispatch(fetchMenu()),
      [dispatch]
    )
    setTimeout(function() {
        getListMenu()
        closeModal() 
    }, 4000);

    return (
        <Fragment>
            <Modal id="myModalMenu" getListMenu={getListMenu} closeModal={closeModal} text="" />
        </Fragment>
    )
}

export default Menu;

