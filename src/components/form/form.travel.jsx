import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from "react-hook-form";
import fetchForm from '../../redux/actions/form.travel.action';
import './form.scss';
import Modal from '../modal/modal';
import { closeModal,openModal } from '../../service/util';


const FormTravel = () =>{
    const [textModal,setTextModal] = useState('');
    const name_modal = "myModalForm";
    const menu = useSelector((state=> state.menu));
    const form_travel = useSelector((state=> state.formTravel));

    const dispatch = useDispatch();
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = async values => {
        openModal(name_modal);
        await dispatch(fetchForm(values));
        closeModal();
    }
    const prev = ()  =>{
    }
    if(typeof form_travel.response_post['nickname'] !== "undefined"){
        setTimeout(function() {
            setTextModal('Los datos se almacenaron exitosamente');
            openModal(name_modal);
        }, 1000);
        setTimeout(function() {
            window.location.reload(false);
        }, 4000);
        
    }
    return(
        <div className="form_travel">
            <p>
               Hola bienvenido sabemos que quieres viajar en un <b>{menu.ittem_active}</b>  por favor diligencia el siguiente formulario:
            </p>
            { form_travel.error !== '' &&
                <p className="error_request">{form_travel.error}</p>
            }
            <Modal id={name_modal} getListMenu={prev} closeModal={closeModal} text={textModal}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-6">
                    <label>Nombre Completo:</label>
                    <input type="text" name="name_user" placeholder="Nombre Completo"
                        ref={register({
                        required: "Requerido",
                        })}
                    />
                    <span className="error_msg">{errors.name_user && errors.name_user.message}</span>
                </div>
                <div className="col-6">
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Email" 
                        ref={register({
                        required: "Requerido",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Dirección de correo incorrecta."
                        }
                        })}/>
                    <span className="error_msg">{errors.email && errors.email.message}</span>
                </div>
                <div className="col-6">
                    <label>Celular:</label>
                    <input type="text" name="phone" placeholder="Celular"
                        ref={register({
                        required: "Requerido",
                        pattern: {
                            value: /^[0-9-]+$/,
                            message: "Telefono incorrecto."
                        }
                    })}
                     />
                    <span className="error_msg">{errors.phone && errors.phone.message}</span>

                </div>
                <div className="col-6">
                    <label>Edad:</label>
                    <input type="number" name="age" placeholder="Edad"
                        ref={register({ required: "Requerido", min: 18,max:100 })} 
                    />
                    <span className="error_msg">{errors.age && "Requerido además la edad debe estar entre 18 y 100 años."}</span>
                </div>
                <div className="col-12 center">
                    <button type="submit" className="btn-success">Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default FormTravel;