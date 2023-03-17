const btn_empleados_activar = document.getElementById('btn_empleados')

const activar_form_empleados = () =>{
    let btn1 = document.getElementById('form_empleados').style.display = 'block'
    let btn2 = document.getElementById('form_celulares').style.display = 'none'
    let btn3 = document.getElementById('form_portatiles').style.display = 'none'

}

btn_empleados_activar.addEventListener('click',activar_form_empleados)

const btn_celulares_activar = document.getElementById('btn_celulares')

const activar_form_celulares = () =>{
    let btn1 = document.getElementById('form_empleados').style.display = 'none'
    let btn2 = document.getElementById('form_celulares').style.display = 'block'
    let btn3 = document.getElementById('form_portatiles').style.display = 'none'

}

btn_celulares_activar.addEventListener('click',activar_form_celulares)

const btn_portatiles_activar = document.getElementById('btn_portatiles')

const activar_form_portatiles = () =>{
    let btn1 = document.getElementById('form_empleados').style.display = 'none'
    let btn2 = document.getElementById('form_celulares').style.display = 'none'
    let btn3 = document.getElementById('form_portatiles').style.display = 'block'

}

btn_portatiles_activar.addEventListener('click',activar_form_portatiles)
