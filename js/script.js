let diaMes;
let pesos = 900;
let valorImportancia = null;

const valorDia = 100/(900*30);

function calculoValor(dia, pesos, valor){

	valorImportancia = pesos*dia*valor;
    console.log(valorImportancia)

	if(valorImportancia > 100){
		valorImportancia = 100;
	}else if(valorImportancia < 0){
		valorImportancia = 0;
	}

    return valorImportancia;
}

function diames(){
	diaMes = parseInt(prompt("Ingrese un día del mes del 1 al 30"))
	if(diaMes < 1 || diaMes >30 || diaMes == ""){
		alert("Ingrese un día entre 1 y 30")
		diames();
	}
	return diaMes;
}

function dinero(){
	pesos = parseInt(prompt("Ingrese un monto en pesos"))
	if(pesos <= 0 || isNaN(pesos) || pesos ==""){
		alert("Ingrese un un valor mayor que 0")
        dinero();
	}
	return pesos;
}

function importancia(importancia, pesos){
    if(importancia <= 25){
        alert(`Sus $${pesos} no valen ni mierda`)
    }else if(importancia > 25 && importancia <= 50){
        alert(`Sus $${pesos} valen algo, pero no tanto`)
    }else if(importancia > 50 && importancia <= 75){
        alert(`Sus $${pesos} messirve `)
    }else if(importancia > 75 && importancia <=100){
        alert(`Sus $${pesos} es mucha plata hdp\n¿a quién le tiras la goma?`)
    }
}

calculoValor(diames(), dinero(), valorDia)
importancia(valorImportancia, pesos)

