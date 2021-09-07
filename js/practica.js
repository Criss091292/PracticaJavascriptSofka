'use strict';

class Electrodomestico{
    constructor(consumo, esNacional, cantidad){
        this.consumo=consumo;
        this.esNacional=esNacional;
        this.cantidad = cantidad;        
    } 
    
    get valor(){
        return this.calcularValor(this.consumo,this.esNacional);
    }

    
    calcularValor(consumo,esNacional){
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
}



class Televisor extends Electrodomestico{
    constructor(consumo, esNacional,cantidad, tamanio,esSintonizador){
        super(consumo,esNacional,cantidad);
        this.tamanio=tamanio;
        this.esSintonizador=esSintonizador;
    }

    get valor(){
        return this.calcularValorTV(this.consumo,this.esNacional,this.tamanio,this.esSintonizador);
    }

    calcularValorTV(consumo,esNacional, tamanio, esSintonizador){
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
}



class Nevera extends Electrodomestico{
    constructor(consumo, esNacional,cantidad, capacidad){
        super(consumo,esNacional,cantidad);
        this.capacidad=capacidad;
    }

    get valor(){
        return this.calcularValorNevera(this.consumo,this.esNacional, this.capacidad);
    }
    calcularValorNevera(consumo,esNacional, capacidad){
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
}

class Inventario{
    constructor(arrayElectrodomesticos){        
        this.arrayElectrodomesticos = arrayElectrodomesticos;
    }
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

    function validarNumeroPositivo(numero){
        try {
            parseInt(numero);
            if(numero>=0){return true;}else{return false;}
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
                        consumo = prompt("Consumo ('A','B','C')","A");
                        validadorConsumo = validarConsumo(consumo);
                    }    
                    validadorEsNacional=false;
                    while(!validadorEsNacional){
                        esNacional = prompt("esNacional? (true or false)","");
                        if (esNacional.toLowerCase()=== "true"){
                            esNacional = true;
                            validadorEsNacional =  true;
                        }else if(esNacional.toLowerCase()=== "false"){
                            esNacional = false;
                            validadorEsNacional =  true;
                        }                        
                    }
                    validadorCantidad=false;
                    while(!validadorCantidad){
                        cantidad=prompt("cantidad:",1);
                        validadorCantidad =  validarNumeroPositivo(cantidad);
                    }
                    var electrodomesticoGeneral = new Electrodomestico(consumo,Boolean(esNacional),Number(cantidad));
                    alert("electrodomesticoGeneral :" +"\nConsumo: " +electrodomesticoGeneral.consumo + "\nEs nacional? :"+electrodomesticoGeneral.esNacional+"\nCantidad: "+electrodomesticoGeneral.cantidad+ "\nValor: " +electrodomesticoGeneral.valor );              
                    
                    let elementoEncontrado = false;
                    for(let i=0;i<arrayElectrodomesticos.length;i++){
                        let objeto = arrayElectrodomesticos[i] instanceof Electrodomestico;
                        if(!(arrayElectrodomesticos[i] instanceof Televisor)&& !(arrayElectrodomesticos[i] instanceof Nevera)){
                            if(arrayElectrodomesticos[i].consumo == electrodomesticoGeneral.consumo && arrayElectrodomesticos[i].esNacional==electrodomesticoGeneral.esNacional){
                                arrayElectrodomesticos[i].cantidad = arrayElectrodomesticos[i].cantidad + electrodomesticoGeneral.cantidad;
                                elementoEncontrado = true;
                            }
                        }
                    }
                    if(!elementoEncontrado){
                        arrayElectrodomesticos.push(electrodomesticoGeneral);
                    }
                    
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
                        if (esNacional.toLowerCase()=== "true"){
                            esNacional = true;
                            validadorEsNacional =  true;
                        }else if(esNacional.toLowerCase()=== "false"){
                            esNacional = false;
                            validadorEsNacional =  true;
                        }
                    }
                    validadorCantidad=false;
                    while(!validadorCantidad){
                        cantidad=prompt("cantidad:",1);
                        validadorCantidad =  validarNumeroPositivo(cantidad);
                    }
                    validadorTamanio=false;
                    while(!validadorTamanio){
                        tamanio=prompt("tamanio en pulgadas:",1);
                        validadorTamanio =  validarNumeroPositivo(tamanio);
                    }
                    validadorEsSintonizador=false;
                    while(!validadorEsSintonizador){
                        esSintonizador = prompt("esSintonizador? (true or false)",true);
                        if (esSintonizador.toLowerCase()=== "true"){
                            esSintonizador = true;
                            validadorEsSintonizador =  true;
                        }else if(esSintonizador.toLowerCase()=== "false"){
                            esSintonizador = false;
                            validadorEsSintonizador =  true;
                        }       
                    }
                    var tv = new Televisor(consumo,Boolean(esNacional),Number(cantidad),Number(tamanio),Boolean(esSintonizador));                    
                    alert("TV :" +"\nConsumo: " +tv.consumo + "\nEs nacional? :"+tv.esNacional+"\nCantidad: "+tv.cantidad+"\nTamanio: "+ tv.tamanio+"\nEs sintonizador? "+ tv.esSintonizador + "\nValor: " +tv.valor);                              
                    let tvEncontrado = false;
                    for(let i=0;i<arrayElectrodomesticos.length;i++){
                        let objeto = arrayElectrodomesticos[i] instanceof Televisor;
                        if(objeto==true){
                            if(arrayElectrodomesticos[i].consumo == tv.consumo && arrayElectrodomesticos[i].esNacional==tv.esNacional&&arrayElectrodomesticos[i].tamanio==tv.tamanio&&arrayElectrodomesticos[i].esSintonizador==tv.esSintonizador){
                                arrayElectrodomesticos[i].cantidad = arrayElectrodomesticos[i].cantidad + tv.cantidad;
                                tvEncontrado = true;
                            }
                        }
                    }
                    if(!tvEncontrado){
                        arrayElectrodomesticos.push(tv);
                    }
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
                        if (esNacional.toLowerCase()=== "true"){
                            esNacional = true;
                            validadorEsNacional =  true;
                        }else if(esNacional.toLowerCase()=== "false"){
                            esNacional = false;
                            validadorEsNacional =  true;
                        }
                    }
                    validadorCantidad=false;
                    while(!validadorCantidad){
                        cantidad=prompt("cantidad:",1);
                        validadorCantidad =  validarNumeroPositivo(cantidad);
                    }
                    validadorCapacidad=false;
                    while(!validadorCapacidad){
                        capacidad=prompt("capacidad:",1);
                        validadorCapacidad =  validarNumeroPositivo(capacidad);
                    }
                    var nevera = new Nevera(consumo,Boolean(esNacional),Number(cantidad),Number(capacidad));
                    alert("nevera :" +"\nConsumo: " +nevera.consumo + "\nEs nacional? :"+nevera.esNacional+"\nCantidad: "+nevera.cantidad+"\nCapacidad: "+ nevera.capacidad+ "\nValor: " +nevera.valor);              
                    let neveraEncontrada = false;
                    for(let i=0;i<arrayElectrodomesticos.length;i++){
                        let objeto = arrayElectrodomesticos[i] instanceof Nevera;
                        if(objeto==true){
                            if(arrayElectrodomesticos[i].consumo == nevera.consumo && arrayElectrodomesticos[i].esNacional==nevera.esNacional && arrayElectrodomesticos[i].capacidad==nevera.capacidad){
                                arrayElectrodomesticos[i].cantidad = arrayElectrodomesticos[i].cantidad + nevera.cantidad;
                                neveraEncontrada = true;
                            }
                        }
                    }
                    if(!neveraEncontrada){
                        arrayElectrodomesticos.push(nevera);
                    }
                    break;
                    case 4:
                    break;
                default:
                    break;
                    
            }
        }while (parseInt(opt)!==4);
    }

let arrayElectrodomesticos =[];

menuInventario();
arrayElectrodomesticos.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})


