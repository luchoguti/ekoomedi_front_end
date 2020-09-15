import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchIttemActive} from "../../redux/actions/menu.action";
import './list.menu.scss';

const ListMenu = () =>{
    const active = 'active'
    const no_active = '';

    const changeActivity = (key) => {
        for (let index = 0; index < menu.list_menu['data'].length; index++) {
            document.getElementById("ittem"+index).classList.remove("active");
        }
        document.getElementById("ittem"+key).classList.add("active");
    }
    const menu = useSelector((state=> state.menu));
    const dispatch = useDispatch();
    if (typeof menu.list_menu['data'] != 'undefined'){
        return(
            <ul>
            {
                menu.list_menu['data'].map((name_menu,key)=>{
                    if(key === 0)
                    return <li key={key}><a id={'ittem'+key} href="!#" className={active} onClick={
                        ()=>{
                            changeActivity(key);
                            dispatch(fetchIttemActive(name_menu.description_item_menu));
                        }
                    }>{name_menu.description_item_menu}</a></li>
                    return <li key={key}><a id={'ittem'+key} className={no_active} href="!#" onClick={
                        ()=>{
                            changeActivity(key);
                            dispatch(fetchIttemActive(name_menu.description_item_menu));
                        }
                    }>{name_menu.description_item_menu}</a></li>
                })
            }
            </ul>
        )
    }
    return(
        <ul></ul>
    )
}
export default ListMenu;