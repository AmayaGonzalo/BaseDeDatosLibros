let readlineSync = require('readline-sync');

class Libro {
    private nombre: string;
    private autor: string;
    private anio: number;
    private edicion: number;

    constructor(pNombre: string, pAutor: string, pAnio: number, pEdicion: number) {
        this.nombre = pNombre;
        this.autor = pAutor;
        this.anio = pAnio;
        this.edicion = pEdicion;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }

    public getAutor(): string {
        return this.autor;
    }
    public setAutor(pAutor: string): void {
        this.autor = pAutor;
    }

    public getAnio(): number {
        return this.anio;
    }
    public setAnio(pAnio: number): void {
        this.anio = pAnio;
    }

    public getEdicion(): number {
        return this.edicion;
    }
    public setEdicion(pEdicion: number): void {
        this.edicion = pEdicion;
    }
}

class GestorLibros {
    private listaLibros: Libro[];

    constructor(pListaLibros: Libro[]) {
        this.listaLibros = pListaLibros;
    }

    public insertarLibro(pLibro: Libro): void {
        this.listaLibros.push(pLibro);
        console.log("Libro agregado");
    }

    public eliminarLibro(pLibro: Libro): void {
        for (let i: number = 0; i < this.listaLibros.length; i++) {
            if (pLibro.getNombre() === this.listaLibros[i].getNombre()) {
                this.listaLibros.splice(i, 1);
                console.log("El libro: ", pLibro.getNombre(), " ha sido eliminado.");
            }
        }
    }

    public consultarLibro(pLibroConsulta: Libro): void {
        for (let i: number = 0; i < this.listaLibros.length; i++) {
            if (pLibroConsulta.getNombre() === this.listaLibros[i].getNombre()) {
                console.log(this.listaLibros[i].getNombre());
            }
        }
    }

    public modificarLibro(pNombre: Libro): void {
        for (let i: number = 0; i < this.listaLibros.length; i++) {
            if (pNombre.getNombre() === this.listaLibros[i].getNombre()) {
                console.log('Ingrese "1" para cambiar el nombre del libro.');
                console.log('Ingrese "2" para cambiar el autor del libro.');
                console.log('Ingrese "3" para cambiar el año del libro.');
                console.log('Ingrese "4" para cambiar la edición del libro.');
                let modLibro = readlineSync.questionInt("Que desea modificar: ");

                if (modLibro === 1) {
                    let pNombreNuevo = readlineSync.question("Ingrese el nuevo nombre del libro: ");
                    this.listaLibros[i].setNombre(pNombreNuevo);
                    console.log("El nombre ha sido modificado por: ", pNombreNuevo);
                } else if (modLibro === 2) {
                    let pNombreNuevo = readlineSync.question("Ingrese el nuevo autor del libro: ");
                    this.listaLibros[i].setAutor(pNombreNuevo);
                    console.log("El autor ha sido modificado por: ", pNombreNuevo);
                } else if (modLibro === 3) {
                    let pNombreNuevo = readlineSync.questionInt("Ingrese el nuevo año del libro: ");
                    this.listaLibros[i].setAnio(pNombreNuevo);
                    console.log("El año ha sido modificado por: ", pNombreNuevo);
                } else if (modLibro === 4) {
                    let pNombreNuevo = readlineSync.questionInt("Ingrese la nuevo edicion del libro: ");
                    this.listaLibros[i].setEdicion(pNombreNuevo);
                    console.log("La edición del libro ha sido modificado por: ", pNombreNuevo);
                }
            }
        }
    }
}


let primerLibro: Libro = new Libro("Martin Fierro", "José Hernández", 1872, 5);
let segundoLibro: Libro = new Libro("Matematicas discretas", "Ramon Espinosa", 2013, 7);
let tercerLibro: Libro = new Libro("Ingenieria de Software", "Pressman", 2010, 7);

let PrimerListaLibros: Libro[] = [primerLibro, segundoLibro];

let primerGestor = new GestorLibros(PrimerListaLibros);



primerGestor.insertarLibro(tercerLibro); //Se inserta un libro nuevo en la lista de libros


//let pLibroConsulta: Libro = readlineSync.question("Indique que libro desea consultar: "); //(  la idea es que pida el titulo de un libro por parametros y lo ejecute)
//primerGestor.consultarLibro(pLibroConsulta); //( toma el valor del parametro y lo buscar, pero no me sale...)
primerGestor.consultarLibro(segundoLibro);// lo ejecuta de manera directa y funciona
//primerGestor.modificarLibro(segundoLibro); // lo ejecuta de manera directa y funciona

//let pNombreLibro: Libro = readlineSync.question("Indique que libro desea modificar: "); //pide por parametro el ligro para modificar pero no funciona)
//primerGestor.modificarLibro(pNombreLibro);
//console.log(segundoLibro)

