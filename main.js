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

const btn_empleados = document.getElementById('btn_empl')

const targeta_empleados = () =>{
    let nombre = document.getElementById('nombre_empl').value
    let cargo = document.getElementById('cargo_empl').value
    let valor = document.getElementById('valor_empl').value
    let cantidad = document.getElementById('cantidad_empl').value
    let salario = valor * cantidad;
    let salud = salario * 0.08
    let totalPagar = salario - salud
    if(nombre == "" && cargo == "" && valor == "" && cantidad == ""){

        alert("Por favor ingrese los datos")
    }else{
        const card = document.querySelector('#cards_empl')
        const div = document.createElement('div')
        div.className = 'card_empl'
        card.append(div)
        div.innerHTML+=`
            
            <div id="div_img"></div>
            <p>Nombre: ${nombre}</p>
            <p>Cargo: ${cargo}</p>
            <p>Salario: ${salario}</p>
            <p>Deducciones: ${salud}</p>
            <p>Total Pagar: ${totalPagar}
            
        `
        document.querySelector('#nombre_empl').value = ""
        document.querySelector('#cargo_empl').value = ""
        document.querySelector('#valor_empl').value = ""
        document.querySelector('#cantidad_empl').value = ""
    }
}

btn_empleados.addEventListener('click',targeta_empleados)

//////// 
const btn_celulares = document.getElementById('btn_celu')

const targeta_celulares = () =>{
    let nombre = document.getElementById('nombre_celu').value
    let cargo = document.getElementById('referencia_celu').value
    let valor = document.getElementById('valor_celu').value
    let cantidad = document.getElementById('cantidad_celu').value
    let totalPagar = valor*cantidad

    if(nombre == ""  && cargo == "" && valor == "" && cantidad == ""){
        alert("Porfavor ingrese los datos")
    }else{
        const card = document.querySelector('#cards_celu')
        const div = document.createElement('div')
        div.className = 'card_empl'
        card.append(div)
        div.innerHTML+=`
            
            <div id="div_img"></div>
            <p>Nombre: ${nombre}</p>
            <p>Referencia: ${cargo}</p>
            <p>Cantidad: ${cantidad}</p>
            <p>Total Pagar: ${totalPagar}
            
        `
        document.querySelector('#nombre_celu').value = ""
        document.querySelector('#referencia_celu').value = ""
        document.querySelector('#valor_celu').value = ""
        document.querySelector('#cantidad_celu').value = ""
    }
}

btn_celulares.addEventListener('click',targeta_celulares)
//////////

const btn_portatiles = document.getElementById('btn_port')

const targeta_portatiles = () =>{
    let marca = document.getElementById('marca_port').value
    let referencia = document.getElementById('referencia_port').value
    let precio = document.getElementById('precio_port').value
    let ram = document.getElementById('ram_port').value
    let procesador = document.getElementById('procesador_port').value
    let disco = document.getElementById('disco_port').value
    
    if(marca == "" && referencia == "" && precio == "" && ram == "" && procesador == "" && disco == ""){
        alert("Porfavor ingrese los datos")
    }else{
        const card = document.querySelector('#cards_port')
        const div = document.createElement('div')
        div.className = 'card_empl'
        card.append(div)
        div.innerHTML+=`
            
            <div id="div_img"></div>
            <p>Marca: ${marca}</p>
            <p>Referencia: ${referencia}</p>
            <p>RAM: ${ram}</p>
            <p>Procesador: ${procesador}
            <p>Disco Duro: ${disco}</p>
            
        `
        document.querySelector('#marca_port').value = ""
        document.querySelector('#referencia_port').value = ""
        document.querySelector('#precio_port').value = ""
        document.querySelector('#ram_port').value = ""
        document.querySelector('#procesador_port').value = ""
        document.querySelector('#disco_port').value = ""
    }
}

btn_portatiles.addEventListener('click',targeta_portatiles)



