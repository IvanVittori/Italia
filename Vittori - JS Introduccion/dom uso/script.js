function datos()
{
    let dato_nombre=document.querySelector('#nombre');
    let dato_apellido=document.querySelector('#apellido');
    let dato_telefono=document.querySelector('#telefono');

    alert ("Nombre: " + dato_nombre.value + "\nApellido: " + dato_apellido.value + "\nTelefono: " + dato_telefono.value);
     //let datos=`${dato_nombre.value}
     //  ${dato_apellido.value}\n
     //  tel: ${dato_telefono.value}`;
}