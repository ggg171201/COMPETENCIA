var m1 = document.getElementById('b1');
var m2 = document.getElementById('b2');
var m3 = document.getElementById('b3');
var cancion = document.getElementById('can');
var b1 = document.getElementById('can1');
var b2 = document.getElementById('can2');
var b3 = document.getElementById('can3');
var b4 = document.getElementById('can4');
var b5 = document.getElementById('can5');
var b6 = document.getElementById('can6');
var b7 = document.getElementById('can7');
var b8 = document.getElementById('can8');

var canciones= new Canciones();

m1.addEventListener('click', function(){
    canciones.Obtenercanciones(1);
    document.getElementById('cant').textContent=canciones.Regresarcanciones();
})
m2.addEventListener('click', function(){
    canciones.Obtenercanciones(3);
    document.getElementById('cant').textContent=canciones.Regresarcanciones();
})
m3.addEventListener('click', function(){
    canciones.Obtenercanciones(7);
    document.getElementById('cant').textContent=canciones.Regresarcanciones();
})
b1.addEventListener('click', function(){
    if(canciones.Regresarcanciones()>0){
        document.getElementById('can').src=canciones.Cambiarcacion(1);
        cancion.play();
        canciones.Quitarcanciones();
        document.getElementById('cant').textContent=canciones.Regresarcanciones();
    }else{
        alert("No has pagado");
    }
})
b2.addEventListener('click', function(){
    if(canciones.Regresarcanciones()>0){
        document.getElementById('can').src=canciones.Cambiarcacion(2);
        cancion.play();
        canciones.Quitarcanciones();
        document.getElementById('cant').textContent=canciones.Regresarcanciones();
    }else{
        alert("No has pagado");
    }
})
b3.addEventListener('click', function(){
    if(canciones.Regresarcanciones()>0){
        document.getElementById('can').src=canciones.Cambiarcacion(3);
        cancion.play();
        canciones.Quitarcanciones();
        document.getElementById('cant').textContent=canciones.Regresarcanciones();
    }else{
        alert("No has pagado");
    }
})
b4.addEventListener('click', function(){
    if(canciones.Regresarcanciones()>0){
        document.getElementById('can').src=canciones.Cambiarcacion(4);
        cancion.play();
        canciones.Quitarcanciones();
        document.getElementById('cant').textContent=canciones.Regresarcanciones();
    }else{
        alert("No has pagado");
    }
})
b5.addEventListener('click', function(){
    if(canciones.Regresarcanciones()>0){
        document.getElementById('can').src=canciones.Cambiarcacion(5);
        cancion.play();
        canciones.Quitarcanciones();
        document.getElementById('cant').textContent=canciones.Regresarcanciones();
    }else{
        alert("No has pagado");
    }
})
b6.addEventListener('click', function(){
    if(canciones.Regresarcanciones()>0){
        document.getElementById('can').src=canciones.Cambiarcacion(6);
        cancion.play();
        canciones.Quitarcanciones();
        document.getElementById('cant').textContent=canciones.Regresarcanciones();
    }else{
        alert("No has pagado");
    }
})
b7.addEventListener('click', function(){
    if(canciones.Regresarcanciones()>0){
        document.getElementById('can').src=canciones.Cambiarcacion(7);
        cancion.play();
        canciones.Quitarcanciones();
        document.getElementById('cant').textContent=canciones.Regresarcanciones();
    }else{
        alert("No has pagado");
    }
})
b8.addEventListener('click', function(){
    if(canciones.Regresarcanciones()>0){
        document.getElementById('can').src=canciones.Cambiarcacion(8);
        cancion.play();
        canciones.Quitarcanciones();
        document.getElementById('cant').textContent=canciones.Regresarcanciones();
    }else{
        alert("No has pagado");
    }
})

