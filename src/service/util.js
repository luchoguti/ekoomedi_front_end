export const url_host_back = 'http://127.0.0.1:8000/api/';

export const closeModal = () =>{
    let x = document.getElementsByClassName("modal");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
}

export const openModal = (id) =>{
    document.getElementById(id).style.display = 'inline';
}