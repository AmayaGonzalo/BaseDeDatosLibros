let readlineSync = require('readline-sync');





class Libro{
    private nombre: string = readlineSync.question("Indique el nombre del libro: ");
    private autor: string = readlineSync.question("Indique el autor del libro: ");
    private anio: number = readlineSync.questionInt ("Indique el anio del libro: ");
    private edicion: number = readlineSync.questionInt ("Indique la edicion del libro: ");

    constructor (pNombre:string, pAutor: string, pAnio: number, pEdicion: number){
        this.nombre = pNombre;
        this.autor = pAutor;
        this.anio = pAnio;
        this.edicion = pEdicion;
    }

    public getNombre():string{
        return this.nombre;
    }
    public setNombre(pNombre:string):void{
        this.nombre = pNombre;
    }

    public getAutor():string{
        return this.autor;
    }
    public setAutor(pAutor:string):void{
        this.autor = pAutor;
    }

    public getAnio():number{
        return this.anio;
    }
    public setAnio(pAnio:number):void{
        this.anio = pAnio;
    }

    public getEdicion():number{
        return this.edicion;
    }
    public setEdicion(pEdicion: number):void{
        this.edicion = pEdicion;
    }
}

class GestorLibros{
    private listaLibros : Libro [];

    constructor (pListaLibros: Libro[]){
        this.listaLibros = pListaLibros;
    }


    public insertarLibro(pLibro: Libro):void{
        this.listaLibros.push(pLibro);
        console.log(pLibro,"insertado")
    }
       
    public consultarLibro(pNombre: string):void{       
        for (let i : number = 0; i < this.listaLibros.length; i++){
            if (pNombre === this.listaLibros[i].getNombre()){
                console.log(this.listaLibros[i]);  
            } else {
                console.log("El libro no se encuentra");
            }   
        }
    }
}

let primerLibro : Libro = new Libro (pNombre,pAutor,pAnio,pEdicion);
let segundoLibro : Libro = new Libro (pNombre,pAutor,pAnio,pEdicion);

let listaLibros : Libro [] = [];

let primerGestor = new GestorLibros(listaLibros);

primerGestor.insertarLibro(primerLibro);
console.log(listaLibros)
console.log(primerGestor);