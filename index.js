var readlineSync = require('readline-sync');
var Libro = /** @class */ (function () {
    function Libro(pNombre, pAutor, pAnio, pEdicion) {
        this.nombre = pNombre;
        this.autor = pAutor;
        this.anio = pAnio;
        this.edicion = pEdicion;
    }
    Libro.prototype.getNombre = function () {
        return this.nombre;
    };
    Libro.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (pAutor) {
        this.autor = pAutor;
    };
    Libro.prototype.getAnio = function () {
        return this.anio;
    };
    Libro.prototype.setAnio = function (pAnio) {
        this.anio = pAnio;
    };
    Libro.prototype.getEdicion = function () {
        return this.edicion;
    };
    Libro.prototype.setEdicion = function (pEdicion) {
        this.edicion = pEdicion;
    };
    return Libro;
}());
var GestorLibros = /** @class */ (function () {
    function GestorLibros(pListaLibros) {
        this.listaLibros = pListaLibros;
    }
    GestorLibros.prototype.insertarLibro = function (pLibro) {
        this.listaLibros.push(pLibro);
        console.log("Libro agregado");
    };
    GestorLibros.prototype.eliminarLibro = function (pLibro) {
        for (var i = 0; i < this.listaLibros.length; i++) {
            if (pLibro.getNombre() === this.listaLibros[i].getNombre()) {
                this.listaLibros.splice(i, 1);
                console.log("El libro: ", pLibro.getNombre(), " ha sido eliminado.");
            }
        }
    };
    GestorLibros.prototype.consultarLibro = function (pLibroConsulta) {
        for (var i = 0; i < this.listaLibros.length; i++) {
            if (pLibroConsulta.getNombre() === this.listaLibros[i].getNombre()) {
                console.log(this.listaLibros[i].getNombre());
            }
        }
    };
    GestorLibros.prototype.modificarLibro = function (pNombre) {
        for (var i = 0; i < this.listaLibros.length; i++) {
            if (pNombre.getNombre() === this.listaLibros[i].getNombre()) {
                console.log('Ingrese "1" para cambiar el nombre del libro.');
                console.log('Ingrese "2" para cambiar el autor del libro.');
                console.log('Ingrese "3" para cambiar el año del libro.');
                console.log('Ingrese "4" para cambiar la edición del libro.');
                var modLibro = readlineSync.questionInt("Que desea modificar: ");
                if (modLibro === 1) {
                    var pNombreNuevo = readlineSync.question("Ingrese el nuevo nombre del libro: ");
                    this.listaLibros[i].setNombre(pNombreNuevo);
                    console.log("El nombre ha sido modificado por: ", pNombreNuevo);
                }
                else if (modLibro === 2) {
                    var pNombreNuevo = readlineSync.question("Ingrese el nuevo autor del libro: ");
                    this.listaLibros[i].setAutor(pNombreNuevo);
                    console.log("El autor ha sido modificado por: ", pNombreNuevo);
                }
                else if (modLibro === 3) {
                    var pNombreNuevo = readlineSync.questionInt("Ingrese el nuevo año del libro: ");
                    this.listaLibros[i].setAnio(pNombreNuevo);
                    console.log("El año ha sido modificado por: ", pNombreNuevo);
                }
                else if (modLibro === 4) {
                    var pNombreNuevo = readlineSync.questionInt("Ingrese la nuevo edicion del libro: ");
                    this.listaLibros[i].setEdicion(pNombreNuevo);
                    console.log("La edición del libro ha sido modificado por: ", pNombreNuevo);
                }
            }
        }
    };
    return GestorLibros;
}());
var primerLibro = new Libro("Martin Fierro", "José Hernández", 1872, 5);
var segundoLibro = new Libro("Matematicas discretas", "Ramon Espinosa", 2013, 7);
var tercerLibro = new Libro("Ingenieria de Software", "Pressman", 2010, 7);
var PrimerListaLibros = [primerLibro, segundoLibro];
var primerGestor = new GestorLibros(PrimerListaLibros);
primerGestor.insertarLibro(tercerLibro); //Se inserta un libro nuevo en la lista de libros
var pLibroConsulta = readlineSync.question("Indique que libro desea consultar: "); //( pide el titulo de un libro por parametros y lo ejecute)
primerGestor.consultarLibro(pLibroConsulta);
//primerGestor.modificarLibro(segundoLibro);
//let pNombreLibro: Libro = readlineSync.question("Indique que libro desea modificar: ");
//primerGestor.modificarLibro(pNombreLibro);
//console.log(segundoLibro)
