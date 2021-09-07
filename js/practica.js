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


    function menuFacturar(){
        let opt =5;
        do{
            opt = prompt("Menu de opciones: \n1. facturar Electrodomestico...\n2.facturar Tv...\n3.facturar Nevera...\n4.Salir...", 4);
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
                                if(arrayElectrodomesticos[i].cantidad - electrodomesticoGeneral.cantidad <0){
                                    alert("No es posible facturar, cantidad mayor que existencias actuales... \nexistencias: " +arrayElectrodomesticos[i].cantidad+ "cantidad a facturar: " +electrodomesticoGeneral.cantidad);
                                }else{
                                    let elementoAFacturarEncontrado = false;
                                    for(let i=0;i<arrayElectrodomesticosFacturados.length;i++){
                                        if(!(arrayElectrodomesticosFacturados[i] instanceof Televisor)&& !(arrayElectrodomesticosFacturados[i] instanceof Nevera)){
                                            if(arrayElectrodomesticosFacturados[i].consumo == electrodomesticoGeneral.consumo && arrayElectrodomesticosFacturados[i].esNacional==electrodomesticoGeneral.esNacional){
                                                arrayElectrodomesticosFacturados[i].cantidad = arrayElectrodomesticosFacturados[i].cantidad + electrodomesticoGeneral.cantidad;
                                                elementoAFacturarEncontrado = true;
                                            }                                            
                                        }
                                    }
                                    if(!elementoAFacturarEncontrado){
                                        arrayElectrodomesticosFacturados.push(electrodomesticoGeneral);
                                    }                                    
                                }
                                elementoEncontrado = true;
                            }
                        }
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
                            if(arrayElectrodomesticos[i].consumo == tv.consumo && arrayElectrodomesticos[i].esNacional==tv.esNacional && arrayElectrodomesticos[i].tamanio==tv.tamanio && arrayElectrodomesticos[i].esSintonizador==tv.esSintonizador){
                                if(arrayElectrodomesticos[i].cantidad - tv.cantidad <0){
                                    alert("No es posible facturar, cantidad mayor que existencias actuales... \nexistencias: " +arrayElectrodomesticos[i].cantidad+ "cantidad a facturar: " +electrodomesticoGeneral.cantidad);
                                }else{
                                    let elementoAFacturarEncontrado = false;
                                    for(let i=0;i<arrayElectrodomesticosFacturados.length;i++){
                                        if((arrayElectrodomesticosFacturados[i] instanceof Televisor)){
                                            if(arrayElectrodomesticosFacturados[i].consumo == tv.consumo && arrayElectrodomesticosFacturados[i].esNacional==tv.esNacional && arrayElectrodomesticosFacturados[i].tamanio==tv.tamanio && arrayElectrodomesticosFacturados[i].esSintonizador==tv.esSintonizador){
                                                arrayElectrodomesticosFacturados[i].cantidad = arrayElectrodomesticosFacturados[i].cantidad + tv.cantidad;
                                                elementoAFacturarEncontrado = true;
                                            }                                            
                                        }
                                    }
                                    if(!elementoAFacturarEncontrado){
                                        arrayElectrodomesticosFacturados.push(tv);
                                    }                                    
                                }
                                tvEncontrado = true;
                            }
                        }
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
                                if(arrayElectrodomesticos[i].cantidad - nevera.cantidad <0){
                                    alert("No es posible facturar, cantidad mayor que existencias actuales... \nexistencias: " +arrayElectrodomesticos[i].cantidad+ "cantidad a facturar: " +nevera.cantidad);
                                }else{
                                    let elementoAFacturarEncontrado = false;
                                    for(let i=0;i<arrayElectrodomesticosFacturados.length;i++){
                                        if((arrayElectrodomesticosFacturados[i] instanceof Nevera)){
                                            if(arrayElectrodomesticosFacturados[i].consumo == nevera.consumo && arrayElectrodomesticosFacturados[i].esNacional==nevera.esNacional&&arrayElectrodomesticosFacturados[i].capacidad==nevera.capacidad){
                                                arrayElectrodomesticosFacturados[i].cantidad = arrayElectrodomesticosFacturados[i].cantidad + nevera.cantidad;
                                                elementoAFacturarEncontrado = true;
                                            }                                            
                                        }
                                    }
                                    if(!elementoAFacturarEncontrado){
                                        arrayElectrodomesticosFacturados.push(nevera);
                                    }                                    
                                }
                                neveraEncontrada = true;
                            }
                        }
                    }
                    break;
                    case 4:
                    break;
                default:
                    break;
                    
            }
        }while (parseInt(opt)!==4);
    }

    function menuOperaciones(){
        let opt =5;
        do{
            opt = prompt("Menu de opciones: \n1. Insertar Inventario base...\n2.Facturar...\n3.Mostrar inventario...\n4.Salir...", 4);
            console.log(typeof(opt) + " opt: " + opt);            
            switch(parseInt(opt)){
                case 1:
                    menuInventario();                    
                    break;
                case 2:
                    menuFacturar();
                    break;
                    
                case 3:
                    MostrarInventario();
                    break;
                    case 4:
                    break;
                default:
                    break;
                    
            }
        }while (parseInt(opt)!==4);
    }

    function descontarDeInventario(/*arrayElectrodomesticos, arrayElectrodomesticosFacturados*/){
        var a;
        var b;
        var c;
        var d;
        for (let i=0;i<arrayElectrodomesticosFacturados.length;i++){
            for(let j= 0;j<arrayElectrodomesticos.length;j++){
                a=arrayElectrodomesticosFacturados[i] instanceof Televisor;                
                b=arrayElectrodomesticos[j] instanceof Televisor;          
                c=arrayElectrodomesticosFacturados[i] instanceof Nevera;                
                d=arrayElectrodomesticos[j] instanceof Nevera;                

                if(((a==true)&& (b==true))){
                    if(arrayElectrodomesticos[j].consumo==arrayElectrodomesticosFacturados[i].consumo && arrayElectrodomesticos[j].esNacional==arrayElectrodomesticosFacturados[i].esNacional && arrayElectrodomesticos[j].tamanio==arrayElectrodomesticosFacturados[i].tamanio && arrayElectrodomesticos[j].esSintonizador==arrayElectrodomesticosFacturados[i].esSintonizador){
                        arrayElectrodomesticos[j].cantidad = arrayElectrodomesticos[j].cantidad - arrayElectrodomesticosFacturados[i].cantidad;
                    }
                }else if(((c==true)&& (d==true))){
                    if(arrayElectrodomesticos[j].consumo==arrayElectrodomesticosFacturados[i].consumo && arrayElectrodomesticos[j].esNacional==arrayElectrodomesticosFacturados[i].esNacional && arrayElectrodomesticos[j].capacidad==arrayElectrodomesticosFacturados[i].capacidad){
                        arrayElectrodomesticos[j].cantidad = arrayElectrodomesticos[j].cantidad - arrayElectrodomesticosFacturados[i].cantidad;
                    }
                }else if (((b==false)&& (d==false))==((a==false)&& (c==false))){
                    if(arrayElectrodomesticos[j].consumo==arrayElectrodomesticosFacturados[i].consumo && arrayElectrodomesticos[j].esNacional==arrayElectrodomesticosFacturados[i].esNacional){
                        arrayElectrodomesticos[j].cantidad = arrayElectrodomesticos[j].cantidad - arrayElectrodomesticosFacturados[i].cantidad;
                    }
                }else{

                }
            }
        }
    }

var arrayElectrodomesticos =[];
var arrayElectrodomesticosFacturados =[];
menuOperaciones();
menuInventario();
menuFacturar();
console.log("inventario general");
arrayElectrodomesticos.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})
console.log("a facturar");
arrayElectrodomesticosFacturados.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})
MostrarFactura();
descontarDeInventario(/*this.arrayElectrodomesticos,this.arrayElectrodomesticosFacturados*/);
MostrarInventario();
function MostrarInventario(){
    alert("inventario general");
    var a;
    var b;
    var mensaje ="";
    var internacional;
    var conSintonizador;
    var valor;
    for (var i=0;i<arrayElectrodomesticos.length;i++){
        a= arrayElectrodomesticos[i] instanceof Televisor;
        b= arrayElectrodomesticos[i] instanceof Nevera;
        if(arrayElectrodomesticos[i].esNacional){
            internacional = "nacionales";
        }else{
            internacional = "internacionales";
        }
        if(a==true){            
            if(arrayElectrodomesticosFacturados[i].esSintonizador){
                conSintonizador = "con sintonizador";
            }else{
                conSintonizador = "sin sintonizador";
            }
            valor = arrayElectrodomesticos[i].valor*arrayElectrodomesticos[i].cantidad;
            mensaje=mensaje+arrayElectrodomesticos[i].cantidad + " TV de consumo " + arrayElectrodomesticos[i].consumo + " " +internacional + " " + conSintonizador + "\n";
        }else if(b==true){
            valor = arrayElectrodomesticos[i].valor*arrayElectrodomesticos[i].cantidad;
            mensaje=mensaje+arrayElectrodomesticos[i].cantidad + " Neveras de consumo " + arrayElectrodomesticos[i].consumo + " " +internacional + "  con capacidad de " + arrayElectrodomesticos[i].capacidad +" litros" + "\n";
        }else{
            valor = arrayElectrodomesticos[i].valor*arrayElectrodomesticos[i].cantidad;
            mensaje=mensaje+arrayElectrodomesticos[i].cantidad + " Electrodomesticos generales de consumo " + arrayElectrodomesticos[i].consumo + " " +internacional +  "\n";                        
        }
    }
    alert(mensaje);

}
function MostrarFactura(){
    alert("Factura:");
    var a;
    var b;
    var totalFactura= 0;
    var mensaje ="";
    var internacional;
    var conSintonizador;
    var valor;
    for (var i=0;i<arrayElectrodomesticosFacturados.length;i++){
        a= arrayElectrodomesticosFacturados[i] instanceof Televisor;
        b= arrayElectrodomesticosFacturados[i] instanceof Nevera;
        if(arrayElectrodomesticosFacturados[i].esNacional){
            internacional = "nacionales";
        }else{
            internacional = "internacionales";
        }
        if(a==true){            
            if(arrayElectrodomesticosFacturados[i].esSintonizador){
                conSintonizador = "con sintonizador";
            }else{
                conSintonizador = "sin sintonizador";
            }
            valor = arrayElectrodomesticosFacturados[i].valor*arrayElectrodomesticosFacturados[i].cantidad;
            mensaje=mensaje+arrayElectrodomesticosFacturados[i].cantidad + " TV de consumo " + arrayElectrodomesticosFacturados[i].consumo + " " +internacional + " " + conSintonizador + "     Valor: " + valor + "\n";
            totalFactura = totalFactura + valor;
        }else if(b==true){
            valor = arrayElectrodomesticosFacturados[i].valor*arrayElectrodomesticosFacturados[i].cantidad;
            mensaje=mensaje+arrayElectrodomesticosFacturados[i].cantidad + " Neveras de consumo " + arrayElectrodomesticosFacturados[i].consumo + " " +internacional + "  con capacidad de " + arrayElectrodomesticosFacturados[i].capacidad +" litros" + "     Valor: " + valor + "\n";
            totalFactura = totalFactura + valor;
        }else{
            valor = arrayElectrodomesticosFacturados[i].valor*arrayElectrodomesticosFacturados[i].cantidad;
            mensaje=mensaje+arrayElectrodomesticosFacturados[i].cantidad + " Electrodomesticos generales de consumo " + arrayElectrodomesticosFacturados[i].consumo + " " +internacional +  "     Valor: " + valor + "\n";
            totalFactura = totalFactura + valor;            
        }
    }
    mensaje = mensaje + "Total factura: " + totalFactura;
    alert(mensaje);
}



