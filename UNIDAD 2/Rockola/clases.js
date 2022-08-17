//clase canciones
class Canciones{
    //contenedos de canciones
    constructor(){
        this.numcanciones=0;
    }
//aumentar canciones
    Obtenercanciones(c){
        this.numcanciones=this.numcanciones+c;
    }
//muestra las canciones restantes
    Regresarcanciones(){
        return this.numcanciones;
    }
//resta las canciones
    Quitarcanciones(){
        this.numcanciones=this.numcanciones-1;
    }
//dependiendo del boton presionado se retornara a una ruta que cambiara la cancion
    Cambiarcacion(c){
        switch(c){
            case 1:
                return "SONGS/c1.mp3";
                break;
            case 2:
                return "SONGS/c2.mp3";
                break;
            case 3:
                return "SONGS/c3.mp3";
                break;
            case 4:
                return "SONGS/c4.mp3";
                break;
            case 5:
                return "SONGS/c5.mp3";
                break;
            case 6:
                return "SONGS/c6.mp3";
                break;
            case 7:
                return "SONGS/c7.mp3";
                break;
            case 8:
                return "SONGS/c8.mp3";
                break;

                break;
        }
    }
}