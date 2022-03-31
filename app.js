const nombreEmpleado=document.querySelector('#nombreEmpleado');
const valorHora=document.querySelector('#valorHora');
const cantidadHora=document.querySelector('#cantidadHoraMes');
const totalQuincenal=document.querySelector('#totalQuincenal');
const salarioBruto=document.querySelector('#salarioBruto');
const deduccionSalud=document.querySelector('#deduccionSalud');
const deduccionPension=document.querySelector('#deduccionPension')
const salarioNeto=document.querySelector('#salarioNeto')
const img=document.querySelector('#img');
const nombre=document.querySelector('#nombre');


function calcularSalario(){
    let salario = 0;
    let salud = 0;
    let pension = 0;
    let neto = 0;
    let quincena = 0;
    if(cantidadHora.value < 48 ){
        alert('No puede trabajar menos de 48 horas al mes')
    }else if(cantidadHora.value > 198){
        alert('no puedes trabajar mas de 198 horas al mes')
    }else{     
    salario=parseInt(valorHora.value)*parseInt(cantidadHora.value);
    console.log(salario);
    salarioBruto.value=salario 

    salud=parseInt(salarioBruto.value)*.04
    deduccionSalud.value=salud

    pension=parseInt(salarioBruto.value)*.04
    deduccionPension.value=pension

    neto=parseInt(salarioBruto.value)-parseInt(deduccionSalud.value)-parseInt(deduccionPension.value)
    salarioNeto.value=neto

    quincena=parseInt(salarioNeto.value)/2
    totalQuincenal.value=quincena

    img.src="./img/foto.jpeg"
    nombre.textContent=nombreEmpleado.value
    }
}
