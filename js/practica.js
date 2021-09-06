'use strict';

class Electrodomestico{
    constructor(consumo, esNacional, cantidad){
        this.consumo=consumo;
        this.esNacional=esNacional;
        this.cantidad = cantidad;
        this.valor = calcularValor(consumo,esNacional);
    }    
}

function calcularValor(consumo,esNacional){
    let valorConsumo = 0;
    let valorProcedencia = 0;
    if(esNacional){valorProcedencia=250000;}else{valorProcedencia=350000}
    switch(consumo){        
        case 'A':
            valorConsumo = 450000;
            break;
        case 'B':
            valorConsumo = 350000;
            break;
        case 'C':
            valorConsumo = 250000;
            break;
        default:
            break;
    }
    return (valorConsumo+valorProcedencia);
}

class Televisor extends Electrodomestico{
    constructor(consumo, esNacional,cantidad, tamanio,esSintonizador){
        super(consumo,esNacional,cantidad);
        this.tamanio=tamanio;
        this.esSintonizador=esSintonizador;
        this.valor = calcularValorTV(consumo,esNacional,tamanio,esSintonizador);
    }
}

function calcularValorTV(consumo,esNacional, tamanio, esSintonizador){
    let valorConsumo = 0;
    let valorProcedencia = 0;
    let precio = 0;
    if(esNacional){valorProcedencia=250000;}else{valorProcedencia=350000}
    switch(consumo){        
        case "A":
            valorConsumo = 450000;
            break;
        case "B":
            valorConsumo = 350000;
            break;
        case "C":
            valorConsumo = 250000;
            break;
        default:
            break;
    }
    precio = (valorConsumo+valorProcedencia);
    if (tamanio>40){precio = precio*1.3;}
    if (esSintonizador){precio =precio+250000;}
    return precio;
}

class Nevera extends Electrodomestico{
    constructor(consumo, esNacional,cantidad, capacidad){
        super(consumo,esNacional,cantidad);
        this.capacidad=capacidad;
        this.valor = calcularValorNevera(consumo,esNacional, capacidad);
    }
}

function calcularValorNevera(consumo,esNacional, capacidad){
    let valorConsumo = 0;
    let valorProcedencia = 0;
    let precio = 0;
    if(esNacional){valorProcedencia=250000;}else{valorProcedencia=350000}
    switch(consumo){        
        case "A":
            valorConsumo = 450000;
            break;
        case "B":
            valorConsumo = 350000;
            break;
        case "C":
            valorConsumo = 250000;
            break;
        default:
            break;
    }
    precio = (valorConsumo+valorProcedencia);
    if (capacidad>120){
        precio = precio* ((Math.floor((capacidad-120)/10))*0.05+1);
    }
    return precio;
}

    function validarConsumo(consumo){
        switch(consumo){
            case "A": 
                return true;
            case "B":
                return true;
            case "C":
                return true;
            case "a":
                return true;
            case "b":
                return true;
            case "c":
                return true;    
            default:
                return false;
        }
    }

    function validarEsNacional(esNacional){
        switch(esNacional){
            case "true": 
                return true;
            case "false":
                return true;
            case true:
                return true;
            case false:
                return true;  
            default:
                return false;
        }
    }

    function validarCantidad(cantidad){
        try {
            parseInt(cantidad);
            if(cantidad>0){return true;}else{return false;}
        } catch (error) {
            return false;
        }
    }

    function validarTamanio(tamanio){
        try {
            parseInt(tamanio);
            if(tamanio>0){return true;}else{return false;}
        } catch (error) {
            return false;
        }
    }

    function validarEsSintonizador(esSintonizador){
        switch(esSintonizador){
            case "true": 
                return true;
            case "false":
                return true;
            case true:
                return true;
            case false:
                return true;  
            default:
                return false;
        }
    }

    function validarCapacidad(capacidad){
        try {
            parseInt(capacidad);
            if(capacidad>0){return true;}else{return false;}
        } catch (error) {
            return false;
        }
    }

    function menuInventario(){
        let opt =5;
        do{
            opt = prompt("Menu de opciones: \n1. Insertar Electrodomestico...\n2.Insertar Tv...\n3.insertar Nevera...\n4.Salir...", 4);
            console.log(typeof(opt) + " opt: " + opt);
            var consumo;
            var esNacional;
            var cantidad;
            var tamanio;
            var esSintonizador;
            var capacidad;
            let validadorConsumo = false;
            let validadorEsNacional = false;
            let validadorCantidad = false;
            let validadorTamanio = false;
            let validadorEsSintonizador = false;
            let validadorCapacidad = false;
            switch(parseInt(opt)){
                case 1:
                    validadorConsumo = false;
                    while(!validadorConsumo){
                        consumo = prompt("Consumo ('A','B','C')",'A');
                        validadorConsumo = validarConsumo(consumo);
                    }    
                    validadorEsNacional=false;
                    while(!validadorEsNacional){
                        esNacional = prompt("esNacional? (true or false)",true);
                        validadorEsNacional =  validarEsNacional(esNacional);
                    }
                    validadorCantidad=false;
                    while(!validadorCantidad){
                        cantidad=prompt("cantidad:",1);
                        validadorCantidad =  validarCantidad(cantidad);
                    }
                    var electrodomesticoGeneral = new Electrodomestico(consumo,Boolean(esNacional),Number(cantidad));
                    alert("electrodomesticoGeneral :" +"\nConsumo: " +electrodomesticoGeneral.consumo + "\nEs nacional? :"+electrodomesticoGeneral.esNacional+"\nCantidad: "+electrodomesticoGeneral.cantidad+ "\nValor: " +electrodomesticoGeneral.valor );              
                    arrayElectrodomesticos.push(electrodomesticoGeneral);
                    break;
                case 2:
                    validadorConsumo = false;
                    while(!validadorConsumo){
                        consumo = prompt("Consumo ('A','B','C')",'A');
                        validadorConsumo = validarConsumo(consumo);
                    }    
                    validadorEsNacional=false;
                    while(!validadorEsNacional){
                        esNacional = prompt("esNacional? (true or false)",true);
                        validadorEsNacional =  validarEsNacional(esNacional);
                    }
                    validadorCantidad=false;
                    while(!validadorCantidad){
                        cantidad=prompt("cantidad:",1);
                        validadorCantidad =  validarCantidad(cantidad);
                    }
                    validadorTamanio=false;
                    while(!validadorTamanio){
                        tamanio=prompt("tamanio en pulgadas:",1);
                        validadorTamanio =  validarTamanio(tamanio);
                    }
                    validadorEsSintonizador=false;
                    while(!validadorEsSintonizador){
                        esSintonizador = prompt("esSintonizador? (true or false)",true);
                        validadorEsSintonizador = validarEsSintonizador(esSintonizador);
                    }
                    ///alert(typeof(consumo) + "\n"+typeof(esNacional)+"\n"+typeof(cantidad)+"\n"+typeof(tamanio)+"\n"+typeof(esSintonizador));
                    var tv = new Televisor(consumo,Boolean(esNacional),Number(cantidad),Number(tamanio),Boolean(esSintonizador));
                    alert("TV :" +"\nConsumo: " +tv.consumo + "\nEs nacional? :"+tv.esNacional+"\nCantidad: "+tv.cantidad+"\nTamanio: "+ tv.tamanio+"\nEs sintonizador? "+ tv.esSintonizador + "\nValor: " +tv.valor);                              
                    arrayTelevisores.push(tv);
                    break;
                case 3:
                    validadorConsumo = false;
                    while(!validadorConsumo){
                        consumo = prompt("Consumo ('A','B','C')",'A');
                        validadorConsumo = validarConsumo(consumo);
                    }    
                    validadorEsNacional=false;
                    while(!validadorEsNacional){
                        esNacional = prompt("esNacional? (true or false)",true);
                        validadorEsNacional =  validarEsNacional(esNacional);
                    }
                    validadorCantidad=false;
                    while(!validadorCantidad){
                        cantidad=prompt("cantidad:",1);
                        validadorCantidad =  validarCantidad(cantidad);
                    }
                    validadorCapacidad=false;
                    while(!validadorCapacidad){
                        capacidad=prompt("capacidad:",1);
                        validadorCapacidad =  validarCapacidad(capacidad);
                    }
                    var nevera = new Nevera(consumo,Boolean(esNacional),Number(cantidad),Number(capacidad));
                    alert("nevera :" +"\nConsumo: " +nevera.consumo + "\nEs nacional? :"+nevera.esNacional+"\nCantidad: "+nevera.cantidad+"\nCapacidad: "+ nevera.capacidad+ "\nValor: " +nevera.valor);              
                    arrayNeveras.push(nevera);
                    break;
                    case 4:
                    break;
                default:
                    break;
                    
            }
        }while (parseInt(opt)!==4);
    }
    
    




let arrayElectrodomesticos =[];
let arrayTelevisores =[];
let arrayNeveras =[];

menuInventario();

arrayElectrodomesticos.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})
arrayTelevisores.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})
arrayNeveras.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})  

